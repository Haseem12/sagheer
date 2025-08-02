import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Code, Palette, Briefcase, Upload } from "lucide-react";

interface ViewOpeningsPageProps {
  onNavigate: (page: string) => void;
}

export function ViewOpeningsPage({ onNavigate }: ViewOpeningsPageProps) {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    experience: '',
    motivation: '',
    availability: '',
    salary: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job application submitted:', applicationData);
    alert('Application submitted successfully! We will review your application and get back to you within 1-2 weeks.');
  };

  const departments = [
    { id: "all", name: "All Departments", icon: Users },
    { id: "tech", name: "Technology", icon: Code },
    { id: "design", name: "Design", icon: Palette },
    { id: "business", name: "Business", icon: Briefcase }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "tech",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "$40k - $60k",
      description: "We're looking for a senior full stack developer to join our tech team and help build innovative solutions for African startups.",
      requirements: [
        "5+ years of experience with React, Node.js, and databases",
        "Experience with cloud platforms (AWS/GCP)",
        "Strong problem-solving skills",
        "Experience mentoring junior developers"
      ],
      responsibilities: [
        "Develop and maintain web applications",
        "Mentor junior developers",
        "Participate in architecture decisions",
        "Collaborate with design and product teams"
      ],
      tags: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "Remote",
      type: "Full-time",
      salary: "$35k - $50k",
      description: "Join our design team to create beautiful and functional experiences for our incubator startups and lab projects.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and testing"
      ],
      responsibilities: [
        "Design user interfaces and experiences",
        "Conduct user research and usability testing",
        "Create design systems and guidelines",
        "Collaborate with development teams"
      ],
      tags: ["Figma", "User Research", "Design Systems", "Prototyping"]
    },
    {
      id: 3,
      title: "Machine Learning Engineer",
      department: "tech",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "$50k - $70k",
      description: "Help us build AI-powered solutions that address real-world problems across Africa.",
      requirements: [
        "3+ years of ML/AI experience",
        "Strong background in Python and ML frameworks",
        "Experience with cloud ML services",
        "PhD or Masters in CS/ML preferred"
      ],
      responsibilities: [
        "Develop ML models and algorithms",
        "Deploy and maintain ML pipelines",
        "Research new ML techniques",
        "Collaborate on AI strategy"
      ],
      tags: ["Python", "TensorFlow", "PyTorch", "Cloud ML"]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "business",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "$30k - $45k",
      description: "Drive partnerships and business growth for our lab and incubator programs.",
      requirements: [
        "3+ years of business development experience",
        "Strong network in African startup ecosystem",
        "Excellent communication and negotiation skills",
        "Experience in tech or startup environment"
      ],
      responsibilities: [
        "Identify and develop strategic partnerships",
        "Support startups with business development",
        "Manage relationships with stakeholders",
        "Drive revenue growth initiatives"
      ],
      tags: ["Partnerships", "Sales", "Strategy", "Startups"]
    },
    {
      id: 5,
      title: "Frontend Developer (Intern)",
      department: "tech",
      location: "Remote",
      type: "Internship",
      salary: "$500 - $1000/month",
      description: "A great opportunity for a student or recent graduate to gain hands-on experience in a fast-paced innovation environment.",
      requirements: [
        "Basic knowledge of HTML, CSS, JavaScript",
        "Familiarity with React or Vue.js",
        "Strong willingness to learn",
        "Available for 3-6 month commitment"
      ],
      responsibilities: [
        "Assist in frontend development projects",
        "Learn from senior developers",
        "Participate in code reviews",
        "Contribute to open source projects"
      ],
      tags: ["React", "JavaScript", "Learning", "Mentorship"]
    },
    {
      id: 6,
      title: "Product Designer",
      department: "design",
      location: "Lagos, Nigeria",
      type: "Contract",
      salary: "$25k - $40k",
      description: "Work on product design for our portfolio of innovative African startups.",
      requirements: [
        "2+ years of product design experience",
        "Strong understanding of user-centered design",
        "Experience with mobile and web design",
        "Portfolio showcasing product design work"
      ],
      responsibilities: [
        "Design product interfaces and flows",
        "Work closely with startup founders",
        "Create wireframes and prototypes",
        "Conduct design workshops"
      ],
      tags: ["Product Design", "Mobile", "Prototyping", "Workshops"]
    }
  ];

  const filteredJobs = selectedDepartment === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-green-100 text-green-800";
      case "Contract": return "bg-blue-100 text-blue-800";
      case "Internship": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
                Career <span className="lab-accent-blue">Opportunities</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our team and help shape the future of African innovation
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Filter by Department</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        selectedDepartment === dept.id
                          ? 'lab-bg-blue text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <dept.icon size={20} />
                      {dept.name}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="lab-hover-lift">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock size={16} />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign size={16} />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                          <Badge className={getTypeColor(job.type)}>
                            {job.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="mb-4">
                          {job.description}
                        </CardDescription>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="flex-1">
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>{job.title}</DialogTitle>
                                <DialogDescription>
                                  {job.location} • {job.type} • {job.salary}
                                </DialogDescription>
                              </DialogHeader>
                              
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-semibold mb-2">Description</h4>
                                  <p className="text-gray-600">{job.description}</p>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold mb-2">Requirements</h4>
                                  <ul className="space-y-1">
                                    {job.requirements.map((req, index) => (
                                      <li key={index} className="flex items-start gap-2 text-gray-600">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold mb-2">Responsibilities</h4>
                                  <ul className="space-y-1">
                                    {job.responsibilities.map((resp, index) => (
                                      <li key={index} className="flex items-start gap-2 text-gray-600">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="flex-1 lab-bg-blue hover:bg-blue-700">
                                Apply Now
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Apply for {job.title}</DialogTitle>
                                <DialogDescription>
                                  Fill out the form below to submit your application
                                </DialogDescription>
                              </DialogHeader>
                              
                              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="fullName">Full Name *</Label>
                                    <Input
                                      id="fullName"
                                      value={applicationData.fullName}
                                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                                      placeholder="Your full name"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                      id="email"
                                      type="email"
                                      value={applicationData.email}
                                      onChange={(e) => handleInputChange('email', e.target.value)}
                                      placeholder="your.email@example.com"
                                      required
                                    />
                                  </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                      id="phone"
                                      value={applicationData.phone}
                                      onChange={(e) => handleInputChange('phone', e.target.value)}
                                      placeholder="+234 123 456 7890"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                                    <Input
                                      id="linkedIn"
                                      value={applicationData.linkedIn}
                                      onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                                      placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <Label htmlFor="portfolio">Portfolio/Website</Label>
                                  <Input
                                    id="portfolio"
                                    value={applicationData.portfolio}
                                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                                    placeholder="https://yourportfolio.com"
                                  />
                                </div>
                                
                                <div>
                                  <Label htmlFor="experience">Relevant Experience *</Label>
                                  <Textarea
                                    id="experience"
                                    value={applicationData.experience}
                                    onChange={(e) => handleInputChange('experience', e.target.value)}
                                    placeholder="Tell us about your relevant experience and skills"
                                    className="h-24"
                                    required
                                  />
                                </div>
                                
                                <div>
                                  <Label htmlFor="motivation">Why do you want to join us? *</Label>
                                  <Textarea
                                    id="motivation"
                                    value={applicationData.motivation}
                                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                                    placeholder="What motivates you to work at Sagheer+ Lab?"
                                    className="h-24"
                                    required
                                  />
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="availability">Availability</Label>
                                    <Select onValueChange={(value) => handleInputChange('availability', value)}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="When can you start?" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="immediately">Immediately</SelectItem>
                                        <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                                        <SelectItem value="1-month">1 month notice</SelectItem>
                                        <SelectItem value="flexible">Flexible</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <Label htmlFor="salary">Salary Expectation</Label>
                                    <Input
                                      id="salary"
                                      value={applicationData.salary}
                                      onChange={(e) => handleInputChange('salary', e.target.value)}
                                      placeholder="e.g., $50,000"
                                    />
                                  </div>
                                </div>
                                
                                <div>
                                  <Label>Upload Resume/CV *</Label>
                                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-500">Drag and drop your file here, or click to browse</p>
                                    <Button variant="outline" size="sm" className="mt-2">Choose File</Button>
                                  </div>
                                </div>
                                
                                <div className="flex justify-end space-x-4">
                                  <DialogTrigger asChild>
                                    <Button type="button" variant="outline">
                                      Cancel
                                    </Button>
                                  </DialogTrigger>
                                  <Button type="submit" className="lab-bg-blue hover:bg-blue-700">
                                    Submit Application
                                  </Button>
                                </div>
                              </form>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}