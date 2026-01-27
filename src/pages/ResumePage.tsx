import { motion } from "framer-motion";
import { FileDown, Eye, ExternalLink } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const ResumePage = () => {
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
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <GlassCard delay={0.2} hover={false} className="text-center py-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
          >
            <FileDown className="w-16 h-16 text-primary-foreground" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-display font-bold mb-4"
          >
            John Doe - Fresher | Aspiring Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Fresh graduate with foundational skills in web development, eager to learn and grow in the tech industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-button flex items-center gap-2 text-primary-foreground font-semibold"
            >
              <FileDown className="w-5 h-5" />
              Download PDF
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              View Online
            </motion.a>
          </motion.div>
        </GlassCard>

        {/* Experience Highlights */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <GlassCard delay={0.3}>
            <h3 className="text-lg font-display font-bold mb-4 gradient-text">Key Strengths</h3>
            <div className="space-y-4">
              {[
                { strength: "Eager to Learn", detail: "Always excited to explore new technologies" },
                { strength: "Problem Solver", detail: "Enjoy tackling challenges with creative solutions" },
                { strength: "Team Player", detail: "Collaborative and open to feedback" },
              ].map((item, index) => (
                <motion.div
                  key={item.strength}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-start"
                >
                  <div>
                    <div className="font-medium">{item.strength}</div>
                    <div className="text-sm text-muted-foreground">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <GlassCard delay={0.4}>
            <h3 className="text-lg font-display font-bold mb-4 gradient-text">Education</h3>
            <div className="space-y-4">
              {[
                { degree: "Bachelor's Degree", school: "College Name", year: "2020 - 2024" },
                { degree: "Higher Secondary (12th)", school: "School Name", year: "2018 - 2020" },
              ].map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-start"
                >
                  <div>
                    <div className="font-medium">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.school}</div>
                  </div>
                  <div className="text-sm text-primary">{edu.year}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
