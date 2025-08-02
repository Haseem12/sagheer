// Form template definitions
const FormTemplates = {
    // Personal Information Form
    getPersonalInfoForm: function() {
        return `
            <div class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">First Name *</label>
                        <input type="text" name="firstName" required class="form-input" placeholder="Enter your first name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Last Name *</label>
                        <input type="text" name="lastName" required class="form-input" placeholder="Enter your last name">
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Email Address *</label>
                        <input type="email" name="email" required class="form-input" placeholder="your.email@example.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Phone Number *</label>
                        <input type="tel" name="phone" required class="form-input" placeholder="+234 123 456 7890">
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Country *</label>
                        <select name="country" required class="form-select">
                            <option value="">Select your country</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="ghana">Ghana</option>
                            <option value="kenya">Kenya</option>
                            <option value="south-africa">South Africa</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">City *</label>
                        <input type="text" name="city" required class="form-input" placeholder="Enter your city">
                    </div>
                </div>
            </div>
        `;
    },

    // Startup Details Form
    getStartupDetailsForm: function() {
        return `
            <div class="space-y-6">
                <div>
                    <label class="block text-sm font-medium mb-2">Startup Name *</label>
                    <input type="text" name="startupName" required class="form-input" placeholder="What's your startup called?">
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Current Stage *</label>
                        <select name="stage" required class="form-select">
                            <option value="">Select startup stage</option>
                            <option value="idea">Idea Stage</option>
                            <option value="prototype">Prototype/MVP</option>
                            <option value="validation">Market Validation</option>
                            <option value="early-revenue">Early Revenue</option>
                            <option value="scaling">Scaling</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Industry *</label>
                        <select name="industry" required class="form-select">
                            <option value="">Select industry</option>
                            <option value="fintech">FinTech</option>
                            <option value="healthtech">HealthTech</option>
                            <option value="edtech">EdTech</option>
                            <option value="agritech">AgriTech</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Startup Description *</label>
                    <textarea name="description" required class="form-textarea" placeholder="Briefly describe what your startup does (2-3 sentences)"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Problem Statement *</label>
                    <textarea name="problem" required class="form-textarea" placeholder="What problem are you solving? Why is it important?"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Your Solution *</label>
                    <textarea name="solution" required class="form-textarea" placeholder="How does your product/service solve this problem?"></textarea>
                </div>
            </div>
        `;
    },

    // Team & Experience Form
    getTeamExperienceForm: function() {
        return `
            <div class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Team Size *</label>
                        <select name="teamSize" required class="form-select">
                            <option value="">Select team size</option>
                            <option value="1">Just me (Solo founder)</option>
                            <option value="2-3">2-3 people</option>
                            <option value="4-5">4-5 people</option>
                            <option value="6+">6+ people</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Co-founders</label>
                        <input type="text" name="coFounders" class="form-input" placeholder="Names and roles of co-founders">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Relevant Experience *</label>
                    <textarea name="experience" required class="form-textarea" placeholder="Tell us about your relevant experience, skills, and background"></textarea>
                </div>
            </div>
        `;
    },

    // Business Model Form
    getBusinessModelForm: function() {
        return `
            <div class="space-y-6">
                <div>
                    <label class="block text-sm font-medium mb-2">Business Model *</label>
                    <textarea name="businessModel" required class="form-textarea" placeholder="How do you plan to make money? What's your revenue model?"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Target Market *</label>
                    <textarea name="targetMarket" required class="form-textarea" placeholder="Who are your customers? What's your target market size?"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Why join Sagheer+ Lab? *</label>
                    <textarea name="whyJoin" required class="form-textarea" placeholder="What do you hope to achieve through our incubator program?"></textarea>
                </div>
                <div class="flex items-center space-x-2">
                    <input type="checkbox" id="commitment" name="commitment" required class="form-checkbox">
                    <label for="commitment" class="text-sm">
                        I commit to actively participating in the 12-week program and understand the time requirements *
                    </label>
                </div>
            </div>
        `;
    },

    // Partnership Form Fields
    getPartnershipFormFields: function() {
        return `
            <div class="space-y-6">
                <h3 class="text-lg font-semibold border-b pb-2">Organization Information</h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Organization Name *</label>
                        <input type="text" name="organizationName" required class="form-input" placeholder="Your organization name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Organization Type *</label>
                        <select name="organizationType" required class="form-select">
                            <option value="">Select type</option>
                            <option value="corporation">Corporation</option>
                            <option value="startup">Startup</option>
                            <option value="ngo">NGO/Non-profit</option>
                            <option value="government">Government</option>
                            <option value="academic">Academic Institution</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium mb-2">Contact Name *</label>
                        <input type="text" name="contactName" required class="form-input" placeholder="Your full name">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Email Address *</label>
                        <input type="email" name="email" required class="form-input" placeholder="your.email@company.com">
                    </div>
                </div>
            </div>
            <div class="space-y-6">
                <h3 class="text-lg font-semibold border-b pb-2">Partnership Details</h3>
                <div>
                    <label class="block text-sm font-medium mb-2">Partnership Description *</label>
                    <textarea name="description" required class="form-textarea" placeholder="Describe the partnership opportunity and what you'd like to collaborate on"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2">Partnership Objectives *</label>
                    <textarea name="objectives" required class="form-textarea" placeholder="What are your specific goals and expected outcomes?"></textarea>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <input type="checkbox" id="terms" name="terms" required class="form-checkbox">
                <label for="terms" class="text-sm">
                    I agree to the partnership terms and understand that this is an initial inquiry *
                </label>
            </div>
        `;
    },

    // Sign In Page Template
    getSignInPageTemplate: function() {
        return `
            <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-md mx-auto">
                        <button data-navigate="home" class="text-gray-600 hover:text-blue-600 mb-6 flex items-center gap-2">
                            ${Utils.getIcon('arrowLeft', 'w-4 h-4')}
                            Back to Home
                        </button>
                        ${this.getAuthHeader('Welcome Back', 'Sign in to your Sagheer+ Lab account')}
                        ${this.getSignInForm()}
                    </div>
                </div>
            </div>
        `;
    },

    // Sign Up Page Template
    getSignUpPageTemplate: function() {
        return `
            <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-lg mx-auto">
                        <button data-navigate="home" class="text-gray-600 hover:text-blue-600 mb-6 flex items-center gap-2">
                            ${Utils.getIcon('arrowLeft', 'w-4 h-4')}
                            Back to Home
                        </button>
                        ${this.getAuthHeader('Join the Innovation', 'Create your Sagheer+ Lab account')}
                        ${this.getSignUpForm()}
                    </div>
                </div>
            </div>
        `;
    },

    // Get Started Page Template
    getStartedPageTemplate: function() {
        return `
            <div class="min-h-screen bg-gray-50 py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto">
                        <button data-navigate="home" class="text-gray-600 hover:text-blue-600 mb-6 flex items-center gap-2">
                            ${Utils.getIcon('arrowLeft', 'w-4 h-4')}
                            Back to Home
                        </button>
                        ${this.getStartedContent()}
                    </div>
                </div>
            </div>
        `;
    },

    // Common Auth Header
    getAuthHeader: function(title, subtitle) {
        return `
            <div class="text-center mb-8">
                <div class="flex items-center justify-center space-x-2 mb-4">
                    <div class="w-10 h-10 lab-bg-blue rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold">S+</span>
                    </div>
                    <span class="text-2xl font-bold lab-accent-blue">
                        Sagheer<span class="lab-accent-yellow">+</span>
                    </span>
                </div>
                <h1 class="text-2xl font-bold mb-2">${title}</h1>
                <p class="text-gray-600">${subtitle}</p>
            </div>
        `;
    },

    // Sign In Form
    getSignInForm: function() {
        return `
            <div class="bg-white rounded-lg shadow-lg">
                <div class="p-6 border-b">
                    <h2 class="text-xl font-bold text-center">Sign In</h2>
                    <p class="text-gray-600 text-center">Enter your credentials to access your account</p>
                </div>
                <div class="p-6 space-y-6">
                    <form id="signin-form" class="space-y-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-medium">Email Address</label>
                            <input type="email" name="email" required class="form-input" placeholder="your.email@example.com">
                        </div>
                        <div class="space-y-2">
                            <label class="block text-sm font-medium">Password</label>
                            <input type="password" name="password" required class="form-input" placeholder="Enter your password">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <input type="checkbox" id="rememberMe" name="rememberMe" class="form-checkbox">
                                <label for="rememberMe" class="text-sm">Remember me</label>
                            </div>
                            <button type="button" class="text-sm text-blue-600 hover:text-blue-700">Forgot password?</button>
                        </div>
                        <button type="submit" class="w-full btn-primary">Sign In</button>
                    </form>
                    ${this.getSocialLogin()}
                    <div class="text-center text-sm text-gray-600">
                        Don't have an account? 
                        <button data-navigate="signup" class="text-blue-600 hover:text-blue-700">Sign up here</button>
                    </div>
                </div>
            </div>
        `;
    },

    // Sign Up Form
    getSignUpForm: function() {
        return `
            <div class="bg-white rounded-lg shadow-lg">
                <div class="p-6 border-b">
                    <h2 class="text-xl font-bold text-center">Create Account</h2>
                    <p class="text-gray-600 text-center">Fill in your details to get started</p>
                </div>
                <div class="p-6 space-y-6">
                    <form id="signup-form" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium">First Name</label>
                                <input type="text" name="firstName" required class="form-input" placeholder="John">
                            </div>
                            <div>
                                <label class="block text-sm font-medium">Last Name</label>
                                <input type="text" name="lastName" required class="form-input" placeholder="Doe">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium">Email Address</label>
                            <input type="email" name="email" required class="form-input" placeholder="john.doe@example.com">
                        </div>
                        <div>
                            <label class="block text-sm font-medium">Password</label>
                            <input type="password" name="password" required class="form-input" placeholder="Create a strong password">
                        </div>
                        <div>
                            <label class="block text-sm font-medium">Confirm Password</label>
                            <input type="password" name="confirmPassword" required class="form-input" placeholder="Confirm your password">
                        </div>
                        <div>
                            <label class="block text-sm font-medium">Country</label>
                            <select name="country" class="form-select">
                                <option value="">Select your country</option>
                                <option value="nigeria">Nigeria</option>
                                <option value="ghana">Ghana</option>
                                <option value="kenya">Kenya</option>
                                <option value="south-africa">South Africa</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input type="checkbox" id="agreeToTerms" name="agreeToTerms" required class="form-checkbox">
                            <label for="agreeToTerms" class="text-sm">
                                I agree to the Terms of Service and Privacy Policy *
                            </label>
                        </div>
                        <button type="submit" class="w-full btn-primary">Create Account</button>
                    </form>
                    ${this.getSocialLogin()}
                    <div class="text-center text-sm text-gray-600">
                        Already have an account? 
                        <button data-navigate="signin" class="text-blue-600 hover:text-blue-700">Sign in here</button>
                    </div>
                </div>
            </div>
        `;
    },

    // Social Login Buttons
    getSocialLogin: function() {
        return `
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                    <span class="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <button onclick="handleSocialLogin('Google')" class="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                    Google
                </button>
                <button onclick="handleSocialLogin('GitHub')" class="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                    GitHub
                </button>
            </div>
        `;
    },

    // Get Started Content
    getStartedContent: function() {
        return `
            <div class="text-center mb-16">
                <h1 class="text-3xl md:text-4xl font-bold mb-4">
                    Get <span class="lab-accent-blue">Started</span>
                </h1>
                <p class="text-xl text-gray-600">
                    Choose your path to innovation and impact
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center p-8 bg-white rounded-xl shadow-lg lab-hover-lift cursor-pointer" onclick="Navigation.showPage('apply')">
                    <div class="w-16 h-16 lab-bg-blue rounded-full flex items-center justify-center mx-auto mb-6">
                        ${Utils.getIcon('rocket', 'w-8 h-8 text-white')}
                    </div>
                    <h3 class="text-xl font-bold mb-4">I'm an Entrepreneur</h3>
                    <p class="text-gray-600 mb-6">I have a startup idea or existing business</p>
                    <button class="btn-primary w-full">Apply to Incubator</button>
                </div>
                <div class="text-center p-8 bg-white rounded-xl shadow-lg lab-hover-lift cursor-pointer" onclick="Navigation.showPage('openings')">
                    <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        ${Utils.getIcon('briefcase', 'w-8 h-8 text-white')}
                    </div>
                    <h3 class="text-xl font-bold mb-4">I'm a Professional</h3>
                    <p class="text-gray-600 mb-6">I want to join the lab team</p>
                    <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-full">View Openings</button>
                </div>
                <div class="text-center p-8 bg-white rounded-xl shadow-lg lab-hover-lift cursor-pointer" onclick="Navigation.showPage('partnership')">
                    <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        ${Utils.getIcon('users', 'w-8 h-8 text-white')}
                    </div>
                    <h3 class="text-xl font-bold mb-4">I'm an Organization</h3>
                    <p class="text-gray-600 mb-6">I want to partner with the lab</p>
                    <button class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg w-full">Start Partnership</button>
                </div>
                <div class="text-center p-8 bg-white rounded-xl shadow-lg lab-hover-lift cursor-pointer" onclick="Navigation.showPage('home')">
                    <div class="w-16 h-16 lab-bg-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                        ${Utils.getIcon('lightbulb', 'w-8 h-8 text-white')}
                    </div>
                    <h3 class="text-xl font-bold mb-4">I'm Exploring</h3>
                    <p class="text-gray-600 mb-6">I want to learn more about innovation</p>
                    <button class="lab-bg-yellow hover:bg-yellow-600 text-white px-6 py-3 rounded-lg w-full">Explore Homepage</button>
                </div>
            </div>
        `;
    }
};

// Extend Forms object with template methods
Object.assign(Forms, FormTemplates);

// Global helper functions
function handleSocialLogin(provider) {
    alert(`${provider} login would be handled here`);
}