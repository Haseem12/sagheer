import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const isHomePage = currentPage === "home";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              <div className="w-8 h-8 lab-bg-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S+</span>
              </div>
              <span className="text-xl font-bold lab-accent-blue">
                Sagheer<span className="lab-accent-yellow">+</span>
              </span>
              <span className="text-gray-600 text-sm font-mono">Lab</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="#pillars" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pillars
                </a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Projects
                </a>
                <a href="#journal" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Journal
                </a>
                <a href="#opportunities" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Opportunities
                </a>
              </>
            ) : (
              <>
                <button onClick={() => handleNavClick("home")} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </button>
                <button onClick={() => handleNavClick("apply")} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Apply
                </button>
                <button onClick={() => handleNavClick("partnership")} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Partnership
                </button>
                <button onClick={() => handleNavClick("openings")} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Careers
                </button>
              </>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600" onClick={() => handleNavClick("signin")}>
              Sign In
            </Button>
            <Button className="lab-bg-blue hover:bg-blue-700 text-white" onClick={() => handleNavClick("get-started")}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    About
                  </a>
                  <a href="#pillars" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Pillars
                  </a>
                  <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Projects
                  </a>
                  <a href="#journal" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Journal
                  </a>
                  <a href="#opportunities" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Opportunities
                  </a>
                </>
              ) : (
                <>
                  <button onClick={() => handleNavClick("home")} className="text-gray-600 hover:text-blue-600 transition-colors text-left">
                    Home
                  </button>
                  <button onClick={() => handleNavClick("apply")} className="text-gray-600 hover:text-blue-600 transition-colors text-left">
                    Apply
                  </button>
                  <button onClick={() => handleNavClick("partnership")} className="text-gray-600 hover:text-blue-600 transition-colors text-left">
                    Partnership
                  </button>
                  <button onClick={() => handleNavClick("openings")} className="text-gray-600 hover:text-blue-600 transition-colors text-left">
                    Careers
                  </button>
                </>
              )}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600 justify-start" onClick={() => handleNavClick("signin")}>
                  Sign In
                </Button>
                <Button className="lab-bg-blue hover:bg-blue-700 text-white justify-start" onClick={() => handleNavClick("get-started")}>
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}