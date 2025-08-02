import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, ArrowRight, CheckCircle, Rocket, Users, Lightbulb, Building } from "lucide-react";

interface GetStartedPageProps {
  onNavigate: (page: string) => void;
}

export function GetStartedPage({ onNavigate }: GetStartedPageProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Sagheer+ Lab",
      description: "Let's help you get started on your innovation journey",
      content: (
        <div className="text-center space-y-6">
          <div className="mx-auto w-24 h-24 lab-bg-blue rounded-full flex items-center justify-center">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Ideas into Impact?</h2>
            <p className="text-gray-600 text-lg">
              Join Africa's leading innovation ecosystem and turn your vision into reality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Join Community</h3>
              <p className="text-sm text-gray-600">Connect with 1000+ innovators</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Access Resources</h3>
              <p className="text-sm text-gray-600">Tools, mentorship & funding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Build Impact</h3>
              <p className="text-sm text-gray-600">Launch solutions that matter</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Choose Your Path",
      description: "Select what best describes your current situation",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "I'm an Entrepreneur",
              description: "I have a startup idea or existing business",
              icon: Rocket,
              color: "blue",
              action: () => onNavigate("apply")
            },
            {
              title: "I'm a Professional",
              description: "I want to join the lab team",
              icon: Building,
              color: "green",
              action: () => onNavigate("openings")
            },
            {
              title: "I'm an Organization",
              description: "I want to partner with the lab",
              icon: Users,
              color: "purple",
              action: () => onNavigate("partnership")
            },
            {
              title: "I'm Exploring",
              description: "I want to learn more about innovation",
              icon: Lightbulb,
              color: "yellow",
              action: () => setCurrentStep(2)
            }
          ].map((path, index) => (
            <Card key={index} className="cursor-pointer lab-hover-lift" onClick={path.action}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${
                  path.color === 'blue' ? 'bg-blue-100' :
                  path.color === 'green' ? 'bg-green-100' :
                  path.color === 'purple' ? 'bg-purple-100' :
                  'bg-yellow-100'
                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <path.icon className={`w-8 h-8 ${
                    path.color === 'blue' ? 'text-blue-600' :
                    path.color === 'green' ? 'text-green-600' :
                    path.color === 'purple' ? 'text-purple-600' :
                    'text-yellow-600'
                  }`} />
                </div>
                <CardTitle className="text-lg">{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )
    },
    {
      title: "Start Learning",
      description: "Explore our resources and community",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Perfect! Let's get you started</h2>
            <p className="text-gray-600">
              Here are some ways to begin your innovation journey with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Join Our Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with fellow innovators, share ideas, and learn from experts in our active community.
                </p>
                <Button className="w-full" onClick={() => onNavigate("signup")}>
                  Create Account
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Explore Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discover innovative projects and solutions built by our community members.
                </p>
                <Button variant="outline" className="w-full" onClick={() => onNavigate("home")}>
                  View Projects
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  Read Our Journal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest insights, research, and stories from the innovation world.
                </p>
                <Button variant="outline" className="w-full" onClick={() => onNavigate("home")}>
                  Read Articles
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                  Attend Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join workshops, seminars, and networking events to expand your knowledge and network.
                </p>
                <Button variant="outline" className="w-full">
                  View Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate("home")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= index 
                      ? 'lab-bg-blue text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > index ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-2 ${
                      currentStep > index ? 'lab-bg-blue' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
                <CardDescription className="text-lg">
                  {steps[currentStep].description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="py-8">
                {steps[currentStep].content}
              </CardContent>
              
              {currentStep === 0 && (
                <CardContent className="pt-0">
                  <div className="flex justify-center">
                    <Button 
                      onClick={() => setCurrentStep(1)}
                      className="lab-bg-blue hover:bg-blue-700 px-8"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              )}
              
              {currentStep === 2 && (
                <CardContent className="pt-0">
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={() => onNavigate("home")}
                      className="lab-bg-blue hover:bg-blue-700"
                    >
                      Explore Homepage
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}