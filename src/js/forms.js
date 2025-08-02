// Forms and page content management
const Forms = {
    currentStep: 1,
    maxSteps: 4,
    
    renderAllPages: function() {
        this.renderApplyPage();
        this.renderPartnershipPage();
        this.renderOpeningsPage();
        this.renderSignInPage();
        this.renderSignUpPage();
        this.renderGetStartedPage();
    },

    renderApplyPage: function() {
        const applyPage = document.getElementById('apply-page');
        applyPage.innerHTML = this.getApplyPageTemplate();
    },

    renderPartnershipPage: function() {
        const partnershipPage = document.getElementById('partnership-page');
        partnershipPage.innerHTML = this.getPartnershipPageTemplate();
    },

    renderOpeningsPage: function() {
        const openingsPage = document.getElementById('openings-page');
        openingsPage.innerHTML = this.getOpeningsPageTemplate();
        this.filterJobs('all');
    },

    renderSignInPage: function() {
        const signinPage = document.getElementById('signin-page');
        signinPage.innerHTML = this.getSignInPageTemplate();
    },

    renderSignUpPage: function() {
        const signupPage = document.getElementById('signup-page');
        signupPage.innerHTML = this.getSignUpPageTemplate();
    },

    renderGetStartedPage: function() {
        const getStartedPage = document.getElementById('get-started-page');
        getStartedPage.innerHTML = this.getStartedPageTemplate();
    },

    // Apply Page Template
    getApplyPageTemplate: function() {
        return `
            <div class="min-h-screen bg-gray-50 py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto">
                        <div class="mb-8">
                            <button data-navigate="home" class="text-gray-600 hover:text-blue-600 mb-4 flex items-center gap-2">
                                ${Utils.getIcon('arrowLeft', 'w-4 h-4')}
                                Back to Home
                            </button>
                            <div class="text-center">
                                <h1 class="text-3xl md:text-4xl font-bold mb-4">
                                    Apply to <span class="lab-accent-blue">Incubator</span>
                                </h1>
                                <p class="text-xl text-gray-600 mb-8">
                                    Join our 12-week intensive program and transform your startup idea into reality
                                </p>
                            </div>
                        </div>
                        <div class="mb-8" id="apply-progress">${this.renderProgressSteps()}</div>
                        <div class="bg-white rounded-lg shadow-lg">
                            <div class="p-6 border-b">
                                <h2 class="text-xl font-bold" id="step-title">Step 1: Personal Information</h2>
                                <p class="text-gray-600" id="step-description">Tell us about yourself</p>
                            </div>
                            <form id="apply-form" class="p-6">
                                ${this.renderApplyFormSteps()}
                                ${this.renderFormNavigation()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Partnership Page Template
    getPartnershipPageTemplate: function() {
        return `
            <div class="min-h-screen bg-gray-50 py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto">
                        <div class="mb-12">
                            <button data-navigate="home" class="text-gray-600 hover:text-blue-600 mb-4 flex items-center gap-2">
                                ${Utils.getIcon('arrowLeft', 'w-4 h-4')}
                                Back to Home
                            </button>
                            <div class="text-center">
                                <h1 class="text-3xl md:text-4xl font-bold mb-4">
                                    Start a <span class="lab-accent-blue">Partnership</span>
                                </h1>
                                <p class="text-xl text-gray-600 mb-8">
                                    Collaborate with us to drive innovation and create impact across Africa
                                </p>
                            </div>
                        </div>
                        ${this.renderPartnershipTypes()}
                        ${this.renderPartnershipForm()}
                    </div>
                </div>
            </div>
        `;
    },

    // Openings Page Template
    getOpeningsPageTemplate: function() {
        return `
            <div class="min-h-screen bg-gray-50 py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-6xl mx-auto">
                        <div class="mb-12">
                            <button data-navigate="home" class="text-gray-600 hover:text-blue-600 mb-4 flex items-center gap-2">
                                ${Utils.getIcon('arrowLeft', 'w-4 h-4')}
                                Back to Home
                            </button>
                            <div class="text-center">
                                <h1 class="text-3xl md:text-4xl font-bold mb-4">
                                    Career <span class="lab-accent-blue">Opportunities</span>
                                </h1>
                                <p class="text-xl text-gray-600 mb-8">
                                    Join our team and help shape the future of African innovation
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col lg:flex-row gap-8">
                            ${this.renderJobFilters()}
                            <div class="lg:w-3/4">
                                <div class="space-y-6" id="jobs-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderProgressSteps: function() {
        const steps = [
            { number: 1, title: "Personal Information", description: "Tell us about yourself" },
            { number: 2, title: "Startup Details", description: "Your business idea and vision" },
            { number: 3, title: "Team & Experience", description: "Your team and background" },
            { number: 4, title: "Business Model", description: "How you plan to succeed" }
        ];

        return `
            <div class="flex items-center justify-between">
                ${steps.map((step, index) => `
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium step-indicator ${this.currentStep >= step.number ? 'lab-bg-blue text-white' : 'bg-gray-200 text-gray-600'}" data-step="${step.number}">
                                ${this.currentStep > step.number ? Utils.getIcon('checkCircle', 'w-5 h-5') : step.number}
                            </div>
                            <div class="ml-3 hidden md:block">
                                <p class="text-sm font-medium">${step.title}</p>
                                <p class="text-xs text-gray-500">${step.description}</p>
                            </div>
                        </div>
                        ${index < steps.length - 1 ? `<div class="w-16 h-0.5 mx-4 step-line ${this.currentStep > step.number ? 'lab-bg-blue' : 'bg-gray-200'}" data-step="${step.number}"></div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderApplyFormSteps: function() {
        return `
            <div class="step-content ${this.currentStep === 1 ? 'active' : ''}" data-step="1">
                ${this.getPersonalInfoForm()}
            </div>
            <div class="step-content ${this.currentStep === 2 ? 'active' : ''}" data-step="2">
                ${this.getStartupDetailsForm()}
            </div>
            <div class="step-content ${this.currentStep === 3 ? 'active' : ''}" data-step="3">
                ${this.getTeamExperienceForm()}
            </div>
            <div class="step-content ${this.currentStep === 4 ? 'active' : ''}" data-step="4">
                ${this.getBusinessModelForm()}
            </div>
        `;
    },

    renderFormNavigation: function() {
        return `
            <div class="flex justify-between mt-8 pt-6 border-t">
                <button type="button" onclick="Forms.previousStep()" id="prev-btn" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" ${this.currentStep === 1 ? 'disabled' : ''}>
                    Previous
                </button>
                <button type="button" onclick="Forms.nextStep()" id="next-btn" class="px-6 py-2 lab-bg-blue hover:bg-blue-700 text-white rounded-lg ${this.currentStep === this.maxSteps ? 'hidden' : ''}">
                    Next Step
                </button>
                <button type="submit" id="submit-btn" class="px-6 py-2 lab-bg-blue hover:bg-blue-700 text-white rounded-lg ${this.currentStep === this.maxSteps ? '' : 'hidden'}">
                    Submit Application
                </button>
            </div>
        `;
    },

    renderPartnershipTypes: function() {
        return `
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6 text-center">Choose Your Partnership Type</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    ${DATA.partnershipTypes.map(type => `
                        <div class="cursor-pointer transition-all partnership-type" onclick="Forms.selectPartnership('${type.id}')" data-type="${type.id}">
                            <div class="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        ${Utils.getIcon(type.icon, 'w-8 h-8 text-blue-600')}
                                    </div>
                                    <h3 class="text-lg font-bold mb-2">${type.title}</h3>
                                    <p class="text-gray-600">${type.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderPartnershipForm: function() {
        return `
            <div id="partnership-form-container" class="hidden">
                <div class="bg-white rounded-lg shadow-lg">
                    <div class="p-6 border-b">
                        <h2 class="text-xl font-bold">Partnership Details</h2>
                        <p class="text-gray-600">Tell us more about your organization and partnership goals</p>
                    </div>
                    <form id="partnership-form" class="p-6 space-y-6">
                        <input type="hidden" name="partnershipType" id="selected-partnership-type">
                        ${this.getPartnershipFormFields()}
                        <div class="flex justify-end space-x-4">
                            <button type="button" data-navigate="home" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                            <button type="submit" class="btn-primary">Submit Partnership Request</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    renderJobFilters: function() {
        return `
            <div class="lg:w-1/4">
                <div class="bg-white rounded-lg shadow-md">
                    <div class="p-6 border-b">
                        <h3 class="text-lg font-bold">Filter by Department</h3>
                    </div>
                    <div class="p-6 space-y-2">
                        <button onclick="Forms.filterJobs('all')" class="job-filter active w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors lab-bg-blue text-white" data-dept="all">
                            ${Utils.getIcon('users', 'w-5 h-5')}
                            All Departments
                        </button>
                        <button onclick="Forms.filterJobs('tech')" class="job-filter w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors hover:bg-gray-100" data-dept="tech">
                            ${Utils.getIcon('code', 'w-5 h-5')}
                            Technology
                        </button>
                        <button onclick="Forms.filterJobs('design')" class="job-filter w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors hover:bg-gray-100" data-dept="design">
                            ${Utils.getIcon('palette', 'w-5 h-5')}
                            Design
                        </button>
                        <button onclick="Forms.filterJobs('business')" class="job-filter w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors hover:bg-gray-100" data-dept="business">
                            ${Utils.getIcon('briefcase', 'w-5 h-5')}
                            Business
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    filterJobs: function(dept) {
        const jobsContainer = document.getElementById('jobs-container');
        const filteredJobs = DataHelpers.getJobsByDepartment(dept);
        
        // Update filter button states
        document.querySelectorAll('.job-filter').forEach(btn => {
            btn.classList.remove('active', 'lab-bg-blue', 'text-white');
            btn.classList.add('hover:bg-gray-100');
        });
        
        const activeBtn = document.querySelector(`[data-dept="${dept}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active', 'lab-bg-blue', 'text-white');
            activeBtn.classList.remove('hover:bg-gray-100');
        }
        
        // Render jobs
        jobsContainer.innerHTML = filteredJobs.map(job => this.renderJobCard(job)).join('');
    },

    renderJobCard: function(job) {
        return `
            <div class="bg-white rounded-lg shadow-md lab-hover-lift">
                <div class="p-6">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                            <h3 class="text-xl font-bold mb-2">${job.title}</h3>
                            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <div class="flex items-center gap-1">
                                    ${Utils.getIcon('mapPin', 'w-4 h-4')}
                                    ${job.location}
                                </div>
                                <div class="flex items-center gap-1">
                                    ${Utils.getIcon('clock', 'w-4 h-4')}
                                    ${job.type}
                                </div>
                                <div class="flex items-center gap-1">
                                    ${Utils.getIcon('dollar', 'w-4 h-4')}
                                    ${job.salary}
                                </div>
                            </div>
                        </div>
                        <span class="px-3 py-1 rounded-full text-xs font-medium ${DataHelpers.getTypeColor(job.type)}">
                            ${job.type}
                        </span>
                    </div>
                    <p class="text-gray-600 mb-4">${job.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${job.tags.map(tag => `<span class="px-2 py-1 rounded-full border text-xs font-medium">${tag}</span>`).join('')}
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button onclick="Forms.showJobDetails(${job.id})" class="flex-1 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50">
                            View Details
                        </button>
                        <button onclick="Forms.showJobApplication(${job.id})" class="flex-1 lab-bg-blue hover:bg-blue-700 text-white rounded-lg py-2 px-4">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Navigation and interaction methods
    nextStep: function() {
        if (this.currentStep < this.maxSteps) {
            this.currentStep++;
            this.updateStepDisplay();
        }
    },

    previousStep: function() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStepDisplay();
        }
    },

    updateStepDisplay: function() {
        // This method handles step navigation UI updates
        document.querySelectorAll('.step-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`.step-content[data-step="${this.currentStep}"]`).classList.add('active');

        // Update progress indicators and buttons
        this.updateProgressIndicators();
        this.updateNavigationButtons();
        this.updateStepTitles();
    },

    updateProgressIndicators: function() {
        document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
            const stepNum = index + 1;
            if (this.currentStep >= stepNum) {
                indicator.classList.add('lab-bg-blue', 'text-white');
                indicator.classList.remove('bg-gray-200', 'text-gray-600');
                if (this.currentStep > stepNum) {
                    indicator.innerHTML = Utils.getIcon('checkCircle', 'w-5 h-5');
                } else {
                    indicator.innerHTML = stepNum;
                }
            } else {
                indicator.classList.remove('lab-bg-blue', 'text-white');
                indicator.classList.add('bg-gray-200', 'text-gray-600');
                indicator.innerHTML = stepNum;
            }
        });

        document.querySelectorAll('.step-line').forEach((line, index) => {
            const stepNum = index + 1;
            if (this.currentStep > stepNum) {
                line.classList.add('lab-bg-blue');
                line.classList.remove('bg-gray-200');
            } else {
                line.classList.remove('lab-bg-blue');
                line.classList.add('bg-gray-200');
            }
        });
    },

    updateNavigationButtons: function() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        if (prevBtn) prevBtn.disabled = this.currentStep === 1;

        if (this.currentStep === this.maxSteps) {
            if (nextBtn) nextBtn.classList.add('hidden');
            if (submitBtn) submitBtn.classList.remove('hidden');
        } else {
            if (nextBtn) nextBtn.classList.remove('hidden');
            if (submitBtn) submitBtn.classList.add('hidden');
        }
    },

    updateStepTitles: function() {
        const titles = [
            "Step 1: Personal Information",
            "Step 2: Startup Details", 
            "Step 3: Team & Experience",
            "Step 4: Business Model"
        ];
        const descriptions = [
            "Tell us about yourself",
            "Your business idea and vision",
            "Your team and background",
            "How you plan to succeed"
        ];

        const titleEl = document.getElementById('step-title');
        const descEl = document.getElementById('step-description');
        if (titleEl) titleEl.textContent = titles[this.currentStep - 1];
        if (descEl) descEl.textContent = descriptions[this.currentStep - 1];
    },

    selectPartnership: function(type) {
        document.querySelectorAll('.partnership-type').forEach(el => {
            el.classList.remove('selected');
        });
        document.querySelector(`[data-type="${type}"]`).classList.add('selected');
        
        document.getElementById('partnership-form-container').classList.remove('hidden');
        document.getElementById('selected-partnership-type').value = type;
        
        document.getElementById('partnership-form-container').scrollIntoView({ behavior: 'smooth' });
    },

    showJobDetails: function(jobId) {
        const job = DATA.jobs.find(j => j.id === jobId);
        if (!job) return;
        
        alert(`Job Details for ${job.title}\n\nLocation: ${job.location}\nType: ${job.type}\nSalary: ${job.salary}\n\n${job.description}`);
    },

    showJobApplication: function(jobId) {
        const job = DATA.jobs.find(j => j.id === jobId);
        if (!job) return;
        
        alert(`Application form for ${job.title} would open here. In a real application, this would show a detailed application modal.`);
    }
};