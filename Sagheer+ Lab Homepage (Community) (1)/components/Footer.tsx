import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 lab-bg-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S+</span>
              </div>
              <span className="text-xl font-bold">
                Sagheer<span className="lab-accent-yellow">+</span>
              </span>
              <span className="text-gray-400 text-sm font-mono">Lab</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming Africa's future through innovation, one idea at a time. 
              Join our community of creators, builders, and visionaries.
            </p>
            
            {/* Newsletter signup */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="lab-bg-blue hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#pillars" className="text-gray-400 hover:text-white transition-colors">Our Pillars</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#journal" className="text-gray-400 hover:text-white transition-colors">Journal</a></li>
              <li><a href="#opportunities" className="text-gray-400 hover:text-white transition-colors">Opportunities</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-400">hello@sagheerlab.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-400">+234 (0) 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Innovation Hub, Victoria Island<br />
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Sagheer+ Lab. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}