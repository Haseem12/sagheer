import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Journal() {
  const articles = [
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
  ];

  const getCategoryColor = (category: string) => {
    const colorMap = {
      "AI Research": "bg-blue-100 text-blue-800",
      "Design": "bg-purple-100 text-purple-800",
      "Startup": "bg-green-100 text-green-800",
      "Community": "bg-yellow-100 text-yellow-800"
    };
    return colorMap[category as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="journal" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lab <span className="lab-accent-blue">Journal</span>
          </h2>
          <p className="text-xl text-gray-600">
            Insights, research, and stories from our innovation journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden lab-hover-lift">
              <div className="relative h-64 lg:h-80">
                <ImageWithFallback
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(articles[0].category)} border-none`}>
                    {articles[0].category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{articles[0].title}</h3>
                <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {articles[0].readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Article list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {articles.slice(1).map((article, index) => (
              <article key={article.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <Badge className={`${getCategoryColor(article.category)} border-none text-xs mb-2`}>
                      {article.category}
                    </Badge>
                    <h4 className="font-semibold mb-2 text-sm leading-tight">{article.title}</h4>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Articles
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}