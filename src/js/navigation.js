// Navigation system
const Navigation = {
    currentPage: 'home',
    
    init: function() {
        this.setupEventListeners();
        this.showPage('home');
    },

    setupEventListeners: function() {
        // Mobile menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('#mobile-menu-btn')) {
                this.toggleMobileMenu();
            }
        });

        // Handle all navigation clicks
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-navigate]');
            if (target) {
                e.preventDefault();
                const page = target.getAttribute('data-navigate');
                this.showPage(page);
            }
        });

        // Handle anchor links for home page sections
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target && this.currentPage === 'home') {
                e.preventDefault();
                const sectionId = target.getAttribute('href').substring(1);
                Utils.scrollTo(sectionId);
            }
        });
    },

    showPage: function(pageId) {
        // Hide all pages
        document.querySelectorAll('.page-section').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(`${pageId}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
            this.updateNavigation();
            this.updateHeader();
            window.scrollTo(0, 0);
        }
    },

    updateNavigation: function() {
        const isHomePage = this.currentPage === 'home';
        const desktopNav = document.getElementById('desktop-nav');
        const pagesNav = document.getElementById('pages-nav');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const mobilePageLinks = document.querySelectorAll('.mobile-page-link');

        if (desktopNav && pagesNav) {
            if (isHomePage) {
                desktopNav.style.display = 'flex';
                pagesNav.style.display = 'none';
            } else {
                desktopNav.style.display = 'none';
                pagesNav.style.display = 'flex';
            }
        }

        // Update mobile nav
        mobileNavLinks.forEach(link => {
            link.style.display = isHomePage ? 'block' : 'none';
        });
        mobilePageLinks.forEach(link => {
            link.style.display = isHomePage ? 'none' : 'block';
        });
    },

    updateHeader: function() {
        // This will be called by Components.renderHeader()
        Components.renderHeader();
    },

    toggleMobileMenu: function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        if (mobileMenu) {
            Utils.toggle(mobileMenu);
        }

        if (menuIcon && closeIcon) {
            Utils.toggle(menuIcon);
            Utils.toggle(closeIcon);
        }
    },

    goBack: function() {
        this.showPage('home');
    }
};

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
});