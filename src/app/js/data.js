  // Static data for the application
  const DATA = {
      projects: [
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
      ],
  
      jobs: [
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
      ],
  
      articles: [
          {
              id: 1,
              title: "The Future of AI in African Agriculture",
              excerpt: "Exploring how artificial intelligence is revolutionizing farming practices across the continent and creating sustainable food systems.",
              category: "AI Research",
              date: "Jan 15, 2025",
              readTime: "8 min read",
              author: "Dr. Amina Hassan",
              image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop",
              featured: true
          },
          {
              id: 2,
              title: "Building Inclusive Design Systems",
              excerpt: "How we approached creating accessible design systems that work for diverse African communities and languages.",
              category: "Design",
              date: "Jan 10, 2025",
              readTime: "6 min read",
              author: "Kemi Adebayo",
              image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
              featured: false
          },
          {
              id: 3,
              title: "Startup Success Stories: From Idea to IPO",
              excerpt: "Case studies of three startups that graduated from our incubator program and achieved significant market success.",
              category: "Startup",
              date: "Jan 8, 2025",
              readTime: "12 min read",
              author: "Chidi Okwu",
              image: "https://images.unsplash.com/photo-1664447972779-316251bd8bd7?w=400&h=250&fit=crop",
              featured: false
          },
          {
              id: 4,
              title: "Community-Driven Innovation Models",
              excerpt: "Examining how grassroots communities are driving technological innovation and creating sustainable solutions.",
              category: "Community",
              date: "Jan 5, 2025",
              readTime: "10 min read",
              author: "Fatima Musa",
              image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
              featured: false
          }
      ],
  
      partnershipTypes: [
          {
              id: "corporate",
              title: "Corporate Innovation",
              description: "Large organizations looking to innovate through our ecosystem",
              icon: "building"
          },
          {
              id: "strategic",
              title: "Strategic Partnership", 
              description: "Long-term collaboration on specific initiatives or markets",
              icon: "target"
          },
          {
              id: "research",
              title: "Research Collaboration",
              description: "Joint research projects and knowledge sharing",
              icon: "lightbulb"
          },
          {
              id: "community",
              title: "Community Partnership",
              description: "Supporting communities and driving social impact",
              icon: "users"
          }
      ],
  
      getStartedSteps: [
          {
              title: "Welcome to Sagheer+ Lab",
              description: "Let's help you get started on your innovation journey"
          },
          {
              title: "Choose Your Path",
              description: "Select what best describes your current situation"
          },
          {
              title: "Start Learning", 
              description: "Explore our resources and community"
          }
      ]
  };
  
  // Helper functions for data
  const DataHelpers = {
      getProjectsByTag: (tag) => {
          if (tag === 'all') return DATA.projects;
          return DATA.projects.filter(project => project.tags.includes(tag));
      },
  
      getJobsByDepartment: (dept) => {
          if (dept === 'all') return DATA.jobs;
          return DATA.jobs.filter(job => job.department === dept);
      },
  
      getStatusColor: (status) => {
          const colorMap = {
              "Live": "bg-green-100 text-green-800",
              "Beta": "bg-yellow-100 text-yellow-800", 
              "In Progress": "bg-blue-100 text-blue-800"
          };
          return colorMap[status] || "bg-gray-100 text-gray-800";
      },
  
      getTypeColor: (type) => {
          const colorMap = {
              "Full-time": "bg-green-100 text-green-800",
              "Contract": "bg-blue-100 text-blue-800",
              "Internship": "bg-purple-100 text-purple-800"
          };
          return colorMap[type] || "bg-gray-100 text-gray-800";
      },
  
      getCategoryColor: (category) => {
          const colorMap = {
              "AI Research": "bg-blue-100 text-blue-800",
              "Design": "bg-purple-100 text-purple-800",
              "Startup": "bg-green-100 text-green-800",
              "Community": "bg-yellow-100 text-yellow-800"
          };
          return colorMap[category] || "bg-gray-100 text-gray-800";
      }
  };