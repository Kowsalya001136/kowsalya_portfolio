import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const projects = [
  {
    title: "Project 1",
    description: "A web application built during my learning journey. This project helped me understand frontend and backend integration.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Project 2",
    description: "Another project showcasing my understanding of web development fundamentals and database management.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    github: "https://github.com",
    live: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="page-section flex-col pt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projects I've built during my learning journey. Each project represents a step forward 
            in my growth as a developer.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={project.title} delay={index * 0.2} className="p-0 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glow-button flex items-center gap-2 text-sm text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <GlassCard delay={0.5}>
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                More Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm constantly working on new projects to expand my portfolio and enhance my skills. 
                Stay tuned for more exciting work as I continue my journey in software development!
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
