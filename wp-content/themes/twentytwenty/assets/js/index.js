(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)

        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Scroll with offset on links with a class name .scrollto
     */
    on('click', '#navbar .nav-link', function (e) {
        let section = select(this.hash)
        if (section) {
            e.preventDefault()

            let navbar = select('#navbar')
            let header = select('#header')
            let sections = select('section', true)
            let navlinks = select('#navbar .nav-link', true)

            navlinks.forEach((item) => {
                item.classList.remove('active')
            })

            this.classList.add('active')

            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }

            if (this.hash == '#header') {
                header.classList.remove('header-top')
                sections.forEach((item) => {
                    item.classList.remove('section-show')
                })
                return;
            }

            if (!header.classList.contains('header-top')) {
                header.classList.add('header-top')
                setTimeout(function () {
                    sections.forEach((item) => {
                        item.classList.remove('section-show')
                    })
                    section.classList.add('section-show')

                }, 350);
            } else {
                sections.forEach((item) => {
                    item.classList.remove('section-show')
                })
                section.classList.add('section-show')
            }

            scrollto(this.hash)
        }
    }, true)

    const navGlobalLink = document.querySelectorAll('#menu-item-51 .nav-link');
    const navGlobalLinkAddClass = navGlobalLink[0];
    navGlobalLinkAddClass.className += ' active';

    /**
     * Activate/show sections on load with hash links
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            let initial_nav = select(window.location.hash)

            if (initial_nav) {
                let header = select('#header')
                let navlinks = select('#navbar .nav-link', true)

                header.classList.add('header-top')

                navlinks.forEach((item) => {
                    if (item.getAttribute('href') == window.location.hash) {
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }
                })

                setTimeout(function () {
                    initial_nav.classList.add('section-show')
                }, 350);

                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-filters li', true);

            on('click', '#portfolio-filters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
            }, true);
        }

    });

    const portfolioFiltersItem = document.querySelectorAll('[data-filter="*"]');
    const portfolioFiltersItemAddLink = portfolioFiltersItem[0];
    portfolioFiltersItemAddLink.className += 'filter-active';

    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    // Forbiddance
    document.ondragstart = noSelect;
    document.oncontextmenu = noSelect;
    document.onselectstart = noSelect;

    function noSelect() {
        return false
    }

    /* CUSTOM */

    // Page load time
    window.onload = function () {
        let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log('Page initialized');
        console.log('Page loaded time: ' + loadTime + ' ms');
    };

    // Preloader
    function fadeOutEffect() {
        var fadeTarget = document.getElementById("sk-cube-grid-wrap");
        var fadeEffect = setTimeout(function () {
            fadeTarget.style.cssText = `
                opacity: 0; 
                visibility: hidden;
                `;
        }, 3000);
    }

    fadeOutEffect();

})()
