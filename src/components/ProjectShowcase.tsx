import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "Design", "Community", "Startup"];

  const projects = [
    {
      id: 1,
      title: "AgriTech AI Platform",
      description: "AI-powered crop monitoring and yield prediction system for Nigerian farmers",
      tags: ["AI", "Community"],
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      github: "#",
      demo: "#",
      status: "Live"
    },
    {
      id: 2,
      title: "Lagos Design System",
      description: "Comprehensive design system for Lagos State government digital services",
      tags: ["Design", "Community"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "FinTech Startup Accelerator",
      description: "12-week intensive program for African fintech startups",
      tags: ["Startup", "Community"],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop",
      github: "#",
      demo: "#",
      status: "Live"
    },
    {
      id: 4,
      title: "Healthcare AI Assistant",
      description: "AI chatbot for preliminary medical diagnosis in local languages",
      tags: ["AI", "Community"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      github: "#",
      demo: "#",
      status: "Beta"
    },
    {
      id: 5,
      title: "Creative Commons Hub",
      description: "Platform connecting African creatives with global opportunities",
      tags: ["Design", "Community"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      github: "#",
      demo: "#",
      status: "Live"
    },
    {
      id: 6,
      title: "EdTech Innovation Lab",
      description: "Digital learning platform for African students and educators",
      tags: ["AI", "Startup"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      github: "#",
      demo: "#",
      status: "In Progress"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800";
      case "Beta": return "bg-yellow-100 text-yellow-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Project <span className="lab-accent-blue">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the innovative solutions we've built and launched
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "lab-bg-blue text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden lab-hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border-none`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 lab-bg-blue hover:bg-blue-700">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}