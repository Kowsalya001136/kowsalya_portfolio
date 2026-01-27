import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const articles = [
  {
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt: "Learn how to structure your React applications for scalability and maintainability using modern patterns and best practices.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the emerging technologies and trends that will shape the future of web development in the coming years.",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    tags: ["Web Dev", "Trends", "Future"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  },
  {
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt: "Deep dive into advanced TypeScript features that will make your code more type-safe and maintainable.",
    date: "Jan 5, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "Advanced", "Patterns"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
  },
  {
    title: "Building Real-time Applications with WebSockets",
    excerpt: "A comprehensive guide to implementing real-time features in your web applications using WebSocket technology.",
    date: "Dec 28, 2023",
    readTime: "12 min read",
    tags: ["WebSocket", "Real-time", "Node.js"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "Understanding the differences between CSS Grid and Flexbox and knowing when to use each layout system.",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    tags: ["CSS", "Layout", "Frontend"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
  },
  {
    title: "Authentication Best Practices for Modern Web Apps",
    excerpt: "Secure your applications with industry-standard authentication patterns and implementation strategies.",
    date: "Dec 15, 2023",
    readTime: "9 min read",
    tags: ["Security", "Auth", "Backend"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
  },
];

const ArticlesPage = () => {
  return (
    <div className="page-section flex-col pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development and technology.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard className="p-0 overflow-hidden" hover={false}>
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <motion.img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {articles[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-medium"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <GlassCard key={article.title} delay={0.3 + index * 0.1} className="p-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-display font-bold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
