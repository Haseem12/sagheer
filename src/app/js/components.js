// Component rendering system
const Components = {
    renderHeader: function() {
        const header = document.getElementById('main-header');
        const isHomePage = Navigation.currentPage === 'home';
        
        header.innerHTML = `
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex items-center space-x-2 cursor-pointer" data-navigate="home">
                            <div class="w-8 h-8 lab-bg-blue rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold text-sm">S+</span>
                            </div>
                            <span class="text-xl font-bold lab-accent-blue">
                                Sagheer<span class="lab-accent-yellow">+</span>
                            </span>
                            <span class="text-gray-600 text-sm font-mono">Lab</span>
                        </div>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden md:flex items-center space-x-8" id="desktop-nav" style="display: ${isHomePage ? 'flex' : 'none'};">
                        <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="#pillars" class="text-gray-600 hover:text-blue-600 transition-colors">Pillars</a>
                        <a href="#projects" class="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                        <a href="#journal" class="text-gray-600 hover:text-blue-600 transition-colors">Journal</a>
                        <a href="#opportunities" class="text-gray-600 hover:text-blue-600 transition-colors">Opportunities</a>
                    </nav>

                    <!-- Alternative Navigation for other pages -->
                    <nav class="hidden md:flex items-center space-x-8" id="pages-nav" style="display: ${isHomePage ? 'none' : 'flex'};">
                        <button data-navigate="home" class="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
                        <button data-navigate="apply" class="text-gray-600 hover:text-blue-600 transition-colors">Apply</button>
                        <button data-navigate="partnership" class="text-gray-600 hover:text-blue-600 transition-colors">Partnership</button>
                        <button data-navigate="openings" class="text-gray-600 hover:text-blue-600 transition-colors">Careers</button>
                    </nav>

                    <!-- Desktop CTA -->
                    <div class="hidden md:flex items-center space-x-4">
                        <button data-navigate="signin" class="text-gray-600 hover:text-blue-600 px-4 py-2 rounded transition-colors">
                            Sign In
                        </button>
                        <button data-navigate="get-started" class="lab-bg-blue hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                            Get Started
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="md:hidden p-2" id="mobile-menu-btn">
                        <div id="menu-icon">${Utils.getIcon('menu', 'w-6 h-6')}</div>
                        <div id="close-icon" class="hidden">${Utils.getIcon('close', 'w-6 h-6')}</div>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <div id="mobile-menu" class="md:hidden py-4 border-t hidden">
                    <nav class="flex flex-col space-y-4">
                        ${isHomePage ? `
                            <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors mobile-nav-link">About</a>
                            <a href="#pillars" class="text-gray-600 hover:text-blue-600 transition-colors mobile-nav-link">Pillars</a>
                            <a href="#projects" class="text-gray-600 hover:text-blue-600 transition-colors mobile-nav-link">Projects</a>
                            <a href="#journal" class="text-gray-600 hover:text-blue-600 transition-colors mobile-nav-link">Journal</a>
                            <a href="#opportunities" class="text-gray-600 hover:text-blue-600 transition-colors mobile-nav-link">Opportunities</a>
                        ` : `
                            <button data-navigate="home" class="text-gray-600 hover:text-blue-600 transition-colors text-left mobile-page-link">Home</button>
                            <button data-navigate="apply" class="text-gray-600 hover:text-blue-600 transition-colors text-left mobile-page-link">Apply</button>
                            <button data-navigate="partnership" class="text-gray-600 hover:text-blue-600 transition-colors text-left mobile-page-link">Partnership</button>
                            <button data-navigate="openings" class="text-gray-600 hover:text-blue-600 transition-colors text-left mobile-page-link">Careers</button>
                        `}
                        <div class="flex flex-col space-y-2 pt-4">
                            <button data-navigate="signin" class="text-gray-600 hover:text-blue-600 px-4 py-2 rounded transition-colors text-left">
                                Sign In
                            </button>
                            <button data-navigate="get-started" class="lab-bg-blue hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-left">
                                Get Started
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        `;
    },

    renderHero: function() {
        const heroSection = document.getElementById('hero-section');
        heroSection.innerHTML = `
            <!-- Animated background elements -->
            <div class="absolute inset-0">
                <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pulse-animation"></div>
                <div class="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pulse-animation" style="animation-delay: 1s;"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pulse-animation" style="animation-delay: 0.5s;"></div>
            </div>

            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-4xl mx-auto text-center">
                    <div class="fade-in mb-8">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                            ${Utils.getIcon('sparkles', 'w-4 h-4')}
                            Innovation Lab • Nigeria
                        </div>
                        
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Where 
                            <span class="lab-accent-blue">Ideas</span> 
                            Become 
                            <span class="lab-accent-yellow">Impact</span>
                        </h1>
                        
                        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            A multidisciplinary innovation lab combining tech R&D, creative design, 
                            startup incubation, and community innovation across Africa.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button data-navigate="apply" class="lab-bg-blue hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all group">
                            Explore Projects
                            ${Utils.getIcon('arrowRight', 'inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform')}
                        </button>
                        
                        <button data-navigate="partnership" class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg transition-all">
                            Partner With Us
                        </button>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-3xl font-bold lab-accent-blue mb-2">50+</div>
                            <div class="text-gray-600 text-sm">Projects Launched</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold lab-accent-blue mb-2">25+</div>
                            <div class="text-gray-600 text-sm">Startups Incubated</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold lab-accent-blue mb-2">100+</div>
                            <div class="text-gray-600 text-sm">Community Members</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold lab-accent-blue mb-2">5</div>
                            <div class="text-gray-600 text-sm">Countries</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-gray-300 rounded-full mt-2 bounce-animation"></div>
                </div>
            </div>
        `;
    },

    renderFooter: function() {
        const footer = document.getElementById('main-footer');
        footer.innerHTML = `
            <footer class="bg-gray-900 text-white">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div class="grid md:grid-cols-4 gap-8 mb-12">
                        <!-- Brand and description -->
                        <div class="md:col-span-2">
                            <div class="flex items-center space-x-2 mb-6">
                                <div class="w-8 h-8 lab-bg-blue rounded-lg flex items-center justify-center">
                                    <span class="text-white font-bold text-sm">S+</span>
                                </div>
                                <span class="text-xl font-bold">
                                    Sagheer<span class="lab-accent-yellow">+</span>
                                </span>
                                <span class="text-gray-400 text-sm font-mono">Lab</span>
                            </div>
                            <p class="text-gray-400 mb-6 max-w-md">
                                Transforming Africa's future through innovation, one idea at a time. 
                                Join our community of creators, builders, and visionaries.
                            </p>
                            
                            <!-- Newsletter signup -->
                            <div class="max-w-md">
                                <h4 class="font-semibold mb-3">Stay Updated</h4>
                                <div class="flex gap-2">
                                    <input type="email" placeholder="Enter your email" class="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg">
                                    <button class="lab-bg-blue hover:bg-blue-700 px-4 py-2 rounded-lg">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h4 class="font-semibold mb-6">Quick Links</h4>
                            <ul class="space-y-3">
                                <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
                                <li><a href="#pillars" class="text-gray-400 hover:text-white transition-colors">Our Pillars</a></li>
                                <li><a href="#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                                <li><a href="#journal" class="text-gray-400 hover:text-white transition-colors">Journal</a></li>
                                <li><a href="#opportunities" class="text-gray-400 hover:text-white transition-colors">Opportunities</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info -->
                        <div>
                            <h4 class="font-semibold mb-6">Contact</h4>
                            <ul class="space-y-3">
                                <li class="flex items-center gap-3">
                                    ${Utils.getIcon('mail', 'w-4 h-4 text-gray-400')}
                                    <span class="text-gray-400">hello@sagheerlab.com</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span class="text-gray-400">+234 (0) 123 456 789</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    ${Utils.getIcon('mapPin', 'w-4 h-4 text-gray-400 mt-1')}
                                    <span class="text-gray-400">
                                        Innovation Hub, Victoria Island<br />
                                        Lagos, Nigeria
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="border-t border-gray-800 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div class="text-gray-400 text-sm">
                                © 2025 Sagheer+ Lab. All rights reserved.
                            </div>
                            
                            <div class="flex gap-6">
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    ${Utils.getIcon('github', 'w-5 h-5')}
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 10.956-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg>
                                </a>
                            </div>
                            
                            <div class="flex gap-6 text-sm">
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
};