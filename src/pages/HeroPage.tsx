import { motion } from "framer-motion";
import { ArrowDown, Code, Rocket, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Scene3D from "@/components/Scene3D";
import SocialLinks from "@/components/SocialLinks";
import GlassCard from "@/components/GlassCard";

const highlights = [
  { icon: GraduationCap, label: "Final Year Student", value: "Student" },
  { icon: Code, label: "Projects Built", value: "2+" },
  { icon: Rocket, label: "Ready to", value: "Learn & Grow" },
];

const HeroPage = () => {
  return (
    <div className="page-section flex-col">
      {/* 3D Background */}
      <Scene3D />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-16 md:pt-0">
          {/* Hero Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">John Doe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl"
            >
              Aspiring Web Developer | Final year student eager to learn new technologies and explore the world of software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="glow-button text-primary-foreground font-semibold">
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 font-semibold rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <GlassCard delay={0.3}>
              <h2 className="text-2xl font-display font-bold mb-4 gradient-text">About Me</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate final year student with a strong foundation in web development technologies. 
                As I prepare to begin my professional journey, I'm excited to contribute 
                to meaningful projects while continuously learning and growing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm eager to explore new technologies, embrace challenges, and collaborate with 
                experienced professionals to develop my skills. Every line of code is an opportunity 
                to learn something new.
              </p>
            </GlassCard>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <GlassCard key={item.label} delay={0.4 + index * 0.1} className="text-center p-4">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-bold">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
