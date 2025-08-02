import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Building, Users, Lightbulb, Target } from "lucide-react";

interface PartnershipPageProps {
  onNavigate: (page: string) => void;
}

export function PartnershipPage({ onNavigate }: PartnershipPageProps) {
  const [selectedPartnership, setSelectedPartnership] = useState("");
  const [formData, setFormData] = useState({
    // Organization Info
    organizationName: '',
    organizationType: '',
    industry: '',
    size: '',
    website: '',
    
    // Contact Info
    contactName: '',
    position: '',
    email: '',
    phone: '',
    
    // Partnership Details
    partnershipType: '',
    description: '',
    objectives: '',
    timeline: '',
    budget: '',
    resources: [],
    
    // Additional
    experience: '',
    expectations: '',
    terms: false
  });

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData);
    alert('Partnership request submitted successfully! Our team will review your proposal and get back to you within 3-5 business days.');
  };

  const partnershipTypes = [
    {
      id: "corporate",
      title: "Corporate Innovation",
      description: "Large organizations looking to innovate through our ecosystem",
      icon: Building
    },
    {
      id: "strategic",
      title: "Strategic Partnership",
      description: "Long-term collaboration on specific initiatives or markets",
      icon: Target
    },
    {
      id: "research",
      title: "Research Collaboration",
      description: "Joint research projects and knowledge sharing",
      icon: Lightbulb
    },
    {
      id: "community",
      title: "Community Partnership",
      description: "Supporting communities and driving social impact",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
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
                Start a <span className="lab-accent-blue">Partnership</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Collaborate with us to drive innovation and create impact across Africa
              </p>
            </motion.div>
          </div>

          {/* Partnership Types */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Partnership Type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partnershipTypes.map((type) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer transition-all ${
                    selectedPartnership === type.id 
                      ? 'ring-2 ring-blue-500' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => {
                    setSelectedPartnership(type.id);
                    handleInputChange('partnershipType', type.id);
                  }}
                >
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <type.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partnership Form */}
          {selectedPartnership && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Partnership Details</CardTitle>
                  <CardDescription>
                    Tell us more about your organization and partnership goals
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Organization Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Organization Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="organizationName">Organization Name *</Label>
                          <Input
                            id="organizationName"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange('organizationName', e.target.value)}
                            placeholder="Your organization name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="organizationType">Organization Type *</Label>
                          <Select onValueChange={(value) => handleInputChange('organizationType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="corporation">Corporation</SelectItem>
                              <SelectItem value="startup">Startup</SelectItem>
                              <SelectItem value="ngo">NGO/Non-profit</SelectItem>
                              <SelectItem value="government">Government</SelectItem>
                              <SelectItem value="academic">Academic Institution</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="industry">Industry</Label>
                          <Input
                            id="industry"
                            value={formData.industry}
                            onChange={(e) => handleInputChange('industry', e.target.value)}
                            placeholder="e.g., Technology, Healthcare"
                          />
                        </div>
                        <div>
                          <Label htmlFor="size">Organization Size</Label>
                          <Select onValueChange={(value) => handleInputChange('size', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">Startup (1-10)</SelectItem>
                              <SelectItem value="small">Small (11-50)</SelectItem>
                              <SelectItem value="medium">Medium (51-200)</SelectItem>
                              <SelectItem value="large">Large (201-1000)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(e) => handleInputChange('website', e.target.value)}
                            placeholder="https://yourwebsite.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Contact Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="contactName">Contact Name *</Label>
                          <Input
                            id="contactName"
                            value={formData.contactName}
                            onChange={(e) => handleInputChange('contactName', e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="position">Position/Title *</Label>
                          <Input
                            id="position"
                            value={formData.position}
                            onChange={(e) => handleInputChange('position', e.target.value)}
                            placeholder="Your role in the organization"
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
                            placeholder="your.email@company.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+234 123 456 7890"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Partnership Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Partnership Details</h3>
                      
                      <div>
                        <Label htmlFor="description">Partnership Description *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Describe the partnership opportunity and what you'd like to collaborate on"
                          className="h-32"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="objectives">Partnership Objectives *</Label>
                        <Textarea
                          id="objectives"
                          value={formData.objectives}
                          onChange={(e) => handleInputChange('objectives', e.target.value)}
                          placeholder="What are your specific goals and expected outcomes?"
                          className="h-24"
                          required
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-12-months">6-12 months</SelectItem>
                              <SelectItem value="1-year-plus">1+ years</SelectItem>
                              <SelectItem value="ongoing">Ongoing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10k</SelectItem>
                              <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                              <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                              <SelectItem value="500k-plus">$500k+</SelectItem>
                              <SelectItem value="to-discuss">To be discussed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="experience">Relevant Experience</Label>
                        <Textarea
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          placeholder="Tell us about your organization's relevant experience and past partnerships"
                          className="h-24"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="expectations">What do you expect from us?</Label>
                        <Textarea
                          id="expectations"
                          value={formData.expectations}
                          onChange={(e) => handleInputChange('expectations', e.target.value)}
                          placeholder="What specific support, resources, or collaboration are you looking for?"
                          className="h-24"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the partnership terms and understand that this is an initial inquiry *
                      </Label>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => onNavigate("home")}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="lab-bg-blue hover:bg-blue-700"
                        disabled={!formData.terms}
                      >
                        Submit Partnership Request
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}