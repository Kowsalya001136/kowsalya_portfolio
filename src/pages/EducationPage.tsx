import { motion } from "framer-motion";
import { GraduationCap, School, Calendar } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const education = [
  {
    degree: "Bachelor's Degree",
    institution: "College Name",
    period: "2020 - 2024",
    description: "Pursuing my passion for technology and software development.",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "School Name",
    period: "2018 - 2020",
    description: "Completed with focus on Science and Mathematics.",
    icon: School,
  },
];

const EducationPage = () => {
  return (
    <div className="page-section flex-col pt-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey that built the foundation for my career in technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <GlassCard key={edu.degree} delay={0.2 + index * 0.15}>
              <div className="flex items-start gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0"
                >
                  <edu.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-display font-bold gradient-text">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-lg text-foreground mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Learning Philosophy */}
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
                Continuous Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As a fresher, I believe in the power of continuous learning. I'm always eager to 
                explore new technologies, frameworks, and best practices to grow as a developer. 
                Every challenge is an opportunity to learn something new.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;
