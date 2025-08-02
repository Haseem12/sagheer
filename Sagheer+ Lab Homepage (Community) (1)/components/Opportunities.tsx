import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Users, Building, Briefcase } from "lucide-react";

interface OpportunitiesProps {
  onNavigate: (page: string) => void;
}

export function Opportunities({ onNavigate }: OpportunitiesProps) {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Apply to Incubator",
      description: "Join our 12-week intensive program designed to transform your startup idea into a market-ready business.",
      features: [
        "Mentorship from industry experts",
        "Access to funding networks",
        "Technical resources and tools",
        "Go-to-market strategy support"
      ],
      cta: "Apply Now",
      color: "blue",
      page: "apply"
    },
    {
      icon: Building,
      title: "Partner With Us",
      description: "Collaborate with Sagheer+ Lab to drive innovation and create impact across Africa.",
      features: [
        "Strategic partnerships",
        "Corporate innovation programs",
        "R&D collaboration",
        "Community outreach initiatives"
      ],
      cta: "Start Partnership",
      color: "green",
      page: "partnership"
    },
    {
      icon: Users,
      title: "Join the Lab",
      description: "Become part of our diverse team of innovators, designers, developers, and strategists.",
      features: [
        "Full-time and contract roles",
        "Remote and hybrid opportunities",
        "Continuous learning environment",
        "Competitive compensation"
      ],
      cta: "View Openings",
      color: "purple",
      page: "openings"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        hover: "hover:bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-500",
        hover: "hover:bg-green-600",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-500",
        hover: "hover:bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="opportunities" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="lab-accent-blue">Opportunities</span> Await
          </h2>
          <p className="text-xl text-gray-600">
            Ready to be part of Africa's innovation ecosystem? Choose your path forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className={`h-full border-2 ${getColorClasses(opportunity.color).border} lab-hover-lift`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${getColorClasses(opportunity.color).bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {opportunity.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${getColorClasses(opportunity.color).bg} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${getColorClasses(opportunity.color).bg} ${getColorClasses(opportunity.color).hover} text-white group`}
                    onClick={() => onNavigate(opportunity.page)}
                  >
                    {opportunity.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Ideas into Impact?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of innovators who are already building the future with Sagheer+ Lab
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Download Our Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}