/* =========================================================
   MISC
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("open");

            const expanded =
                navbar.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                expanded
            );

        });


        const navLinks =
            document.querySelectorAll(".nav-link");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.getElementById("header");

    function updateHeader() {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .package-card, .portfolio-card, .check-item, .about-content, .contact-form-container"
        );


    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.getElementById("name").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const service =
                    document.getElementById("service").value;

                const message =
                    document.getElementById("message").value.trim();


                if (
                    !name ||
                    !email ||
                    !service ||
                    !message
                ) {

                    formMessage.textContent =
                        "Please complete all required fields.";

                    formMessage.style.color =
                        "#b44949";

                    return;

                }


                /*
                 * Static website demonstration.
                 *
                 * Replace this section later with:
                 *
                 * - Formspree
                 * - EmailJS
                 * - Web3Forms
                 * - Your own PHP backend
                 * - Cloudflare Worker
                 *
                 * when you want the form to actually
                 * send emails.
                 */


                formMessage.textContent =
                    "Thank you, " +
                    name +
                    ". Your enquiry has been prepared successfully.";

                formMessage.style.color =
                    "#0b5278";


                contactForm.reset();


                setTimeout(function () {

                    formMessage.textContent = "";

                }, 6000);

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    !document.querySelector(targetId)
                ) {
                    return;
                }

                event.preventDefault();

                const target =
                    document.querySelector(targetId);

                const headerHeight =
                    header.offsetHeight;

                const targetPosition =
                    target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       BUTTON HOVER EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, .package-button, .form-button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {
                this.style.transition =
                    "0.3s ease";
            }
        );

    });


});