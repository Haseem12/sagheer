import { motion } from "motion/react";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="lab-accent-blue">Sagheer+</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're building the future of innovation in Africa, one idea at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg mb-6">
              To create a thriving ecosystem where young African innovators can transform 
              their ideas into impactful solutions that address real-world challenges. 
              We bridge the gap between creativity and execution, providing the tools, 
              resources, and community needed to turn vision into reality.
            </p>
            <p className="text-gray-600 text-lg">
              Through our multidisciplinary approach, we're not just building startups – 
              we're cultivating the next generation of African leaders who will shape 
              the continent's future through technology and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-xl font-semibold">Innovation Lab</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
            <div className="w-16 h-16 lab-bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Purpose-Driven</h4>
            <p className="text-gray-600">
              Every project we undertake is designed to create meaningful impact 
              in our communities and beyond.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
            <div className="w-16 h-16 lab-bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Innovation First</h4>
            <p className="text-gray-600">
              We embrace experimentation and encourage bold thinking to push 
              the boundaries of what's possible.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
            <div className="w-16 h-16 lab-bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Community-Centered</h4>
            <p className="text-gray-600">
              We believe in the power of collaboration and building strong networks 
              that uplift everyone involved.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm lab-hover-lift">
            <div className="w-16 h-16 lab-bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Authentic Impact</h4>
            <p className="text-gray-600">
              We measure success not just by metrics, but by the real positive 
              change we create in people's lives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}