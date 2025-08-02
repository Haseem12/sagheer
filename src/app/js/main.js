// Main application initialization and content rendering
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    Components.renderHeader();
    Components.renderHero();
    Components.renderFooter();
    
    // Render home page content
    renderHomePageContent();
    
    // Render all other pages
    renderAllPages();
    
    // Set up global event listeners
    setupGlobalEventListeners();
});

function renderHomePageContent() {
    // Render About section
    renderAboutSection();
    
    // Render Pillars section
    renderPillarsSection();
    
    // Render Projects section
    renderProjectsSection();
    
    // Render Journal section
    renderJournalSection();
    
    // Render Opportunities section
    renderOpportunitiesSection();
}

function renderAboutSection() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    About <span class="lab-accent-blue">Sagheer+</span>
                </h2>
                <p class="text-xl text-gray-600 mb-8">
                    We're building the future of innovation in Africa, one idea at a time.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-16 items-center mb-20">
                <div>
                    <h3 class="text-2xl font-bold mb-6">Our Mission</h3>
                    <p class="text-gray-600 text-lg mb-6">
                        To create a thriving ecosystem where young African innovators can transform 
                        their ideas into impactful solutions that address real-world challenges. 
                        We bridge the gap between creativity and execution, providing the tools, 
                        resources, and community needed to turn vision into reality.
                    </p>
                    <p class="text-gray-600 text-lg">
                        Through our multidisciplinary approach, we're not just building startups – 
                        we're cultivating the next generation of African leaders who will shape 
                        the continent's future through technology and innovation.
                    </p>
                </div>

                <div class="relative">
                    <div class="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <div class="text-white text-center">
                            <div class="text-6xl mb-4">🚀</div>
                            <div class="text-xl font-semibold">Innovation Lab</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-4 gap-8">
                <div class="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
                    <div class="w-16 h-16 lab-bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        ${Utils.getIcon('target', 'w-8 h-8 text-white')}
                    </div>
                    <h4 class="text-xl font-semibold mb-3">Purpose-Driven</h4>
                    <p class="text-gray-600">
                        Every project we undertake is designed to create meaningful impact 
                        in our communities and beyond.
                    </p>
                </div>

                <div class="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
                    <div class="w-16 h-16 lab-bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                        ${Utils.getIcon('lightbulb', 'w-8 h-8 text-white')}
                    </div>
                    <h4 class="text-xl font-semibold mb-3">Innovation First</h4>
                    <p class="text-gray-600">
                        We embrace experimentation and encourage bold thinking to push 
                        the boundaries of what's possible.
                    </p>
                </div>

                <div class="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
                    <div class="w-16 h-16 lab-bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        ${Utils.getIcon('users', 'w-8 h-8 text-white')}
                    </div>
                    <h4 class="text-xl font-semibold mb-3">Community-Centered</h4>
                    <p class="text-gray-600">
                        We believe in the power of collaboration and building strong networks 
                        that uplift everyone involved.
                    </p>
                </div>

                <div class="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
                    <div class="w-16 h-16 lab-bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                        ${Utils.getIcon('heart', 'w-8 h-8 text-white')}
                    </div>
                    <h4 class="text-xl font-semibold mb-3">Authentic Impact</h4>
                    <p class="text-gray-600">
                        We measure success not just by metrics, but by the real positive 
                        change we create in people's lives.
                    </p>
                </div>
            </div>
        </div>
    `;
}

function renderPillarsSection() {
    const pillarsSection = document.getElementById('pillars-section');
    const pillars = [
        {
            icon: 'code',
            title: 'Tech R&D',
            description: 'Cutting-edge research and development in AI, blockchain, and emerging technologies',
            color: 'blue',
            features: ['AI/ML Research', 'Blockchain Development', 'IoT Solutions', 'Mobile Apps']
        },
        {
            icon: 'palette', 
            title: 'Creative Design',
            description: 'Human-centered design thinking and creative solutions for complex problems',
            color: 'purple',
            features: ['UX/UI Design', 'Brand Identity', 'Digital Art', 'Design Systems']
        },
        {
            icon: 'rocket',
            title: 'Startup Incubation', 
            description: 'End-to-end support for entrepreneurs from ideation to market launch',
            color: 'green',
            features: ['Mentorship', 'Funding Support', 'Market Research', 'Business Development']
        },
        {
            icon: 'users',
            title: 'Community Innovation',
            description: 'Building networks and fostering collaboration within the innovation ecosystem',
            color: 'yellow',
            features: ['Events & Workshops', 'Networking', 'Knowledge Sharing', 'Partnerships']
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: 'from-blue-500 to-blue-600',
            purple: 'from-purple-500 to-purple-600',
            green: 'from-green-500 to-green-600',
            yellow: 'from-yellow-500 to-yellow-600'
        };
        return colorMap[color] || 'from-blue-500 to-blue-600';
    };

    pillarsSection.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Our <span class="lab-accent-blue">Four Pillars</span>
                </h2>
                <p class="text-xl text-gray-600">
                    The foundation of our multidisciplinary approach to innovation
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${pillars.map(pillar => `
                    <div class="bg-white rounded-2xl shadow-lg p-8 h-full lab-hover-lift relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-br ${getColorClasses(pillar.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gradient-to-br ${getColorClasses(pillar.color)} rounded-xl flex items-center justify-center mb-6">
                                ${Utils.getIcon(pillar.icon, 'w-8 h-8 text-white')}
                            </div>
                            
                            <h3 class="text-xl font-bold mb-4">${pillar.title}</h3>
                            <p class="text-gray-600 mb-6">${pillar.description}</p>
                            
                            <div class="space-y-2">
                                ${pillar.features.map(feature => `
                                    <div class="flex items-center text-sm text-gray-500">
                                        <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        ${feature}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProjectsSection() {
    const projectsSection = document.getElementById('projects-section');
    projectsSection.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Project <span class="lab-accent-blue">Showcase</span>
                </h2>
                <p class="text-xl text-gray-600 mb-8">
                    Discover the innovative solutions we've built and launched
                </p>

                <!-- Filter buttons -->
                <div class="flex flex-wrap justify-center gap-3" id="project-filters">
                    <button onclick="filterProjects('all')" class="filter-btn active px-4 py-2 rounded-full text-sm font-medium transition-all lab-bg-blue text-white">
                        All
                    </button>
                    <button onclick="filterProjects('ai')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-gray-600 hover:bg-gray-100">
                        AI
                    </button>
                    <button onclick="filterProjects('design')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-gray-600 hover:bg-gray-100">
                        Design
                    </button>
                    <button onclick="filterProjects('community')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-gray-600 hover:bg-gray-100">
                        Community
                    </button>
                    <button onclick="filterProjects('startup')" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all bg-white text-gray-600 hover:bg-gray-100">
                        Startup
                    </button>
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
                <!-- Projects will be populated by JavaScript -->
            </div>

            <div class="text-center mt-12">
                <button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all">
                    View All Projects
                </button>
            </div>
        </div>
    `;
    
    // Render initial projects
    filterProjects('all');
}

function renderJournalSection() {
    const journalSection = document.getElementById('journal-section');
    const featuredArticle = DATA.articles[0];
    const otherArticles = DATA.articles.slice(1);
    
    journalSection.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Lab <span class="lab-accent-blue">Journal</span>
                </h2>
                <p class="text-xl text-gray-600">
                    Insights, research, and stories from our innovation journey
                </p>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Featured article -->
                <div class="lg:col-span-2">
                    <article class="bg-white rounded-2xl shadow-lg overflow-hidden lab-hover-lift">
                        <div class="relative h-64 lg:h-80">
                            <img src="${featuredArticle.image}" alt="${featuredArticle.title}" class="w-full h-full object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="px-3 py-1 rounded-full text-xs font-medium ${DataHelpers.getCategoryColor(featuredArticle.category)}">
                                    ${featuredArticle.category}
                                </span>
                            </div>
                        </div>
                        
                        <div class="p-8">
                            <h3 class="text-2xl font-bold mb-4">${featuredArticle.title}</h3>
                            <p class="text-gray-600 mb-6">${featuredArticle.excerpt}</p>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4 text-sm text-gray-500">
                                    <div class="flex items-center gap-1">
                                        ${Utils.getIcon('calendar', 'w-4 h-4')}
                                        ${featuredArticle.date}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        ${Utils.getIcon('clock', 'w-4 h-4')}
                                        ${featuredArticle.readTime}
                                    </div>
                                </div>
                                <button class="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                    Read More
                                    ${Utils.getIcon('arrowRight', 'w-4 h-4')}
                                </button>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Article list -->
                <div class="space-y-6">
                    ${otherArticles.map(article => `
                        <article class="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                            <div class="flex gap-4">
                                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
                                </div>
                                
                                <div class="flex-1">
                                    <span class="px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block ${DataHelpers.getCategoryColor(article.category)}">
                                        ${article.category}
                                    </span>
                                    <h4 class="font-semibold mb-2 text-sm leading-tight">${article.title}</h4>
                                    <p class="text-gray-600 text-xs mb-3 line-clamp-2">${article.excerpt}</p>
                                    
                                    <div class="flex items-center justify-between text-xs text-gray-500">
                                        <span>${article.date}</span>
                                        <span>${article.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                    
                    <button class="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg transition-all">
                        View All Articles
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderOpportunitiesSection() {
    const opportunitiesSection = document.getElementById('opportunities-section');
    opportunitiesSection.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    <span class="lab-accent-blue">Opportunities</span> Await
                </h2>
                <p class="text-xl text-gray-600">
                    Ready to be part of Africa's innovation ecosystem? Choose your path forward.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <div class="bg-white border-2 border-blue-200 rounded-2xl shadow-lg lab-hover-lift">
                    <div class="text-center p-8">
                        <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            ${Utils.getIcon('briefcase', 'w-8 h-8 text-white')}
                        </div>
                        <h3 class="text-xl font-bold mb-4">Apply to Incubator</h3>
                        <p class="text-gray-600 mb-6">Join our 12-week intensive program designed to transform your startup idea into a market-ready business.</p>
                        
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Mentorship from industry experts</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Access to funding networks</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Technical resources and tools</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Go-to-market strategy support</span>
                            </li>
                        </ul>
                        
                        <button data-navigate="apply" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all group">
                            Apply Now
                            ${Utils.getIcon('arrowRight', 'inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform')}
                        </button>
                    </div>
                </div>

                <div class="bg-white border-2 border-green-200 rounded-2xl shadow-lg lab-hover-lift">
                    <div class="text-center p-8">
                        <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            ${Utils.getIcon('building', 'w-8 h-8 text-white')}
                        </div>
                        <h3 class="text-xl font-bold mb-4">Partner With Us</h3>
                        <p class="text-gray-600 mb-6">Collaborate with Sagheer+ Lab to drive innovation and create impact across Africa.</p>
                        
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Strategic partnerships</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Corporate innovation programs</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">R&D collaboration</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Community outreach initiatives</span>
                            </li>
                        </ul>
                        
                        <button data-navigate="partnership" class="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all group">
                            Start Partnership
                            ${Utils.getIcon('arrowRight', 'inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform')}
                        </button>
                    </div>
                </div>

                <div class="bg-white border-2 border-purple-200 rounded-2xl shadow-lg lab-hover-lift">
                    <div class="text-center p-8">
                        <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            ${Utils.getIcon('users', 'w-8 h-8 text-white')}
                        </div>
                        <h3 class="text-xl font-bold mb-4">Join the Lab</h3>
                        <p class="text-gray-600 mb-6">Become part of our diverse team of innovators, designers, developers, and strategists.</p>
                        
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Full-time and contract roles</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Remote and hybrid opportunities</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Continuous learning environment</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span class="text-sm text-gray-600">Competitive compensation</span>
                            </li>
                        </ul>
                        
                        <button data-navigate="openings" class="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition-all group">
                            View Openings
                            ${Utils.getIcon('arrowRight', 'inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform')}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Call to action banner -->
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 class="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Transform Your Ideas into Impact?
                </h3>
                <p class="text-lg mb-8 opacity-90">
                    Join thousands of innovators who are already building the future with Sagheer+ Lab
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-all">
                        Schedule a Call
                    </button>
                    <button class="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg transition-all">
                        Download Our Brochure
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Global functions
function filterProjects(tag) {
    const projectsGrid = document.getElementById('projects-grid');
    const filteredProjects = DataHelpers.getProjectsByTag(tag);
    
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'lab-bg-blue', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    
    event.target.classList.add('active', 'lab-bg-blue', 'text-white');
    event.target.classList.remove('bg-white', 'text-gray-600');
    
    // Render projects
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden lab-hover-lift">
            <div class="relative h-48 overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 rounded-full text-xs font-medium ${DataHelpers.getStatusColor(project.status)}">
                        ${project.status}
                    </span>
                </div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-bold mb-3">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `
                        <span class="px-2 py-1 rounded-full border text-xs font-medium">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <div class="flex gap-3">
                    <button class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                        ${Utils.getIcon('github', 'w-4 h-4')}
                        Code
                    </button>
                    <button class="flex items-center gap-2 px-3 py-2 lab-bg-blue hover:bg-blue-700 text-white rounded-lg text-sm">
                        ${Utils.getIcon('externalLink', 'w-4 h-4')}
                        Demo
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupGlobalEventListeners() {
    // Handle form submissions with alerts
    document.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = Utils.getFormData(form);
        
        // Simple validation
        if (form.checkValidity()) {
            alert('Form submitted successfully! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
}

function renderAllPages() {
    // This function will be implemented by the forms.js file
    if (typeof Forms !== 'undefined') {
        Forms.renderAllPages();
    }
}