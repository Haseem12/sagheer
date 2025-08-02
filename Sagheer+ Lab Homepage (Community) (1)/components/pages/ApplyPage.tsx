import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";

interface ApplyPageProps {
  onNavigate: (page: string) => void;
}

export function ApplyPage({ onNavigate }: ApplyPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    
    // Startup Info
    startupName: '',
    stage: '',
    industry: '',
    description: '',
    problem: '',
    solution: '',
    
    // Team Info
    teamSize: '',
    coFounders: '',
    experience: '',
    
    // Business Model
    businessModel: '',
    targetMarket: '',
    revenue: '',
    funding: '',
    
    // Additional
    whyJoin: '',
    expectations: '',
    commitment: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will review your application and get back to you within 5-7 business days.');
  };

  const steps = [
    { number: 1, title: "Personal Information", description: "Tell us about yourself" },
    { number: 2, title: "Startup Details", description: "Your business idea and vision" },
    { number: 3, title: "Team & Experience", description: "Your team and background" },
    { number: 4, title: "Business Model", description: "How you plan to succeed" }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+234 123 456 7890"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="country">Country *</Label>
                <Select onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                    <SelectItem value="ghana">Ghana</SelectItem>
                    <SelectItem value="kenya">Kenya</SelectItem>
                    <SelectItem value="south-africa">South Africa</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Enter your city"
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="startupName">Startup Name *</Label>
              <Input
                id="startupName"
                value={formData.startupName}
                onChange={(e) => handleInputChange('startupName', e.target.value)}
                placeholder="What's your startup called?"
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="stage">Current Stage *</Label>
                <Select onValueChange={(value) => handleInputChange('stage', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select startup stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea Stage</SelectItem>
                    <SelectItem value="prototype">Prototype/MVP</SelectItem>
                    <SelectItem value="validation">Market Validation</SelectItem>
                    <SelectItem value="early-revenue">Early Revenue</SelectItem>
                    <SelectItem value="scaling">Scaling</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="agritech">AgriTech</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Startup Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Briefly describe what your startup does (2-3 sentences)"
                className="h-24"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="problem">Problem Statement *</Label>
              <Textarea
                id="problem"
                value={formData.problem}
                onChange={(e) => handleInputChange('problem', e.target.value)}
                placeholder="What problem are you solving? Why is it important?"
                className="h-32"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="solution">Your Solution *</Label>
              <Textarea
                id="solution"
                value={formData.solution}
                onChange={(e) => handleInputChange('solution', e.target.value)}
                placeholder="How does your product/service solve this problem?"
                className="h-32"
                required
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="teamSize">Team Size *</Label>
                <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Just me (Solo founder)</SelectItem>
                    <SelectItem value="2-3">2-3 people</SelectItem>
                    <SelectItem value="4-5">4-5 people</SelectItem>
                    <SelectItem value="6+">6+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="coFounders">Co-founders</Label>
                <Input
                  id="coFounders"
                  value={formData.coFounders}
                  onChange={(e) => handleInputChange('coFounders', e.target.value)}
                  placeholder="Names and roles of co-founders"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="experience">Relevant Experience *</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                placeholder="Tell us about your relevant experience, skills, and background"
                className="h-32"
                required
              />
            </div>
            
            <div>
              <Label>Upload Resume/CV</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500">Drag and drop your file here, or click to browse</p>
                <Button variant="outline" className="mt-2">Choose File</Button>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="businessModel">Business Model *</Label>
              <Textarea
                id="businessModel"
                value={formData.businessModel}
                onChange={(e) => handleInputChange('businessModel', e.target.value)}
                placeholder="How do you plan to make money? What's your revenue model?"
                className="h-24"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="targetMarket">Target Market *</Label>
              <Textarea
                id="targetMarket"
                value={formData.targetMarket}
                onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                placeholder="Who are your customers? What's your target market size?"
                className="h-24"
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="revenue">Current Revenue Status</Label>
                <Select onValueChange={(value) => handleInputChange('revenue', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select revenue status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-revenue">No revenue yet</SelectItem>
                    <SelectItem value="under-10k">Under $10k</SelectItem>
                    <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="over-100k">Over $100k</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="funding">Funding Status</Label>
                <Select onValueChange={(value) => handleInputChange('funding', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select funding status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bootstrapped">Bootstrapped</SelectItem>
                    <SelectItem value="friends-family">Friends & Family</SelectItem>
                    <SelectItem value="seed">Seed Funding</SelectItem>
                    <SelectItem value="series-a">Series A</SelectItem>
                    <SelectItem value="seeking">Seeking Funding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="whyJoin">Why join Sagheer+ Lab? *</Label>
              <Textarea
                id="whyJoin"
                value={formData.whyJoin}
                onChange={(e) => handleInputChange('whyJoin', e.target.value)}
                placeholder="What do you hope to achieve through our incubator program?"
                className="h-32"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="expectations">Program Expectations *</Label>
              <Textarea
                id="expectations"
                value={formData.expectations}
                onChange={(e) => handleInputChange('expectations', e.target.value)}
                placeholder="What specific support, mentorship, or resources are you looking for?"
                className="h-32"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="commitment"
                checked={formData.commitment}
                onCheckedChange={(checked) => handleInputChange('commitment', checked as boolean)}
              />
              <Label htmlFor="commitment" className="text-sm">
                I commit to actively participating in the 12-week program and understand the time requirements *
              </Label>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate("home")}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Apply to <span className="lab-accent-blue">Incubator</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our 12-week intensive program and transform your startup idea into reality
              </p>
            </motion.div>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number 
                        ? 'lab-bg-blue text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? 'lab-bg-blue' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < steps.length ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                      className="lab-bg-blue hover:bg-blue-700"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="lab-bg-blue hover:bg-blue-700"
                      disabled={!formData.commitment}
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}