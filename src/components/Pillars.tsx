import { motion } from "motion/react";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { useState } from "react";

export function Pillars() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      icon: Code,
      title: "Tech R&D",
      description: "Cutting-edge research and development in AI, blockchain, and emerging technologies",
      color: "blue",
      features: ["AI/ML Research", "Blockchain Development", "IoT Solutions", "Mobile Apps"]
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Human-centered design thinking and creative solutions for complex problems",
      color: "purple",
      features: ["UX/UI Design", "Brand Identity", "Digital Art", "Design Systems"]
    },
    {
      icon: Rocket,
      title: "Startup Incubation",
      description: "End-to-end support for entrepreneurs from ideation to market launch",
      color: "green",
      features: ["Mentorship", "Funding Support", "Market Research", "Business Development"]
    },
    {
      icon: Users,
      title: "Community Innovation",
      description: "Building networks and fostering collaboration within the innovation ecosystem",
      color: "yellow",
      features: ["Events & Workshops", "Networking", "Knowledge Sharing", "Partnerships"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600"
    };
    return colorMap[color as keyof typeof colorMap] || "from-blue-500 to-blue-600";
  };

  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="lab-accent-blue">Four Pillars</span>
          </h2>
          <p className="text-xl text-gray-600">
            The foundation of our multidisciplinary approach to innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredPillar(index)}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full lab-hover-lift relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(pillar.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(pillar.color)} rounded-xl flex items-center justify-center mb-6`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  
                  <div className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredPillar === index ? 1 : 0 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}