import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import GlassCard from "@/components/GlassCard";

const skills = [
  { name: "HTML", level: 70, color: "from-orange-400 to-red-500" },
  { name: "CSS", level: 65, color: "from-blue-400 to-indigo-500" },
  { name: "JavaScript", level: 60, color: "from-yellow-400 to-orange-500" },
  { name: "PHP", level: 55, color: "from-indigo-400 to-purple-500" },
  { name: "MySQL", level: 60, color: "from-cyan-400 to-blue-500" },
  { name: "Java", level: 50, color: "from-red-400 to-orange-500" },
  { name: "Python", level: 55, color: "from-green-400 to-emerald-500" },
];

const technologies = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"] },
  { category: "Backend", items: ["PHP", "Java", "Python"] },
  { category: "Database", items: ["MySQL", "SQL Queries", "Database Design"] },
  { category: "Tools", items: ["Git", "VS Code", "XAMPP"] },
];

const AnimatedCounter = ({ value, inView }: { value: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return <span>{count}</span>;
};

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-primary font-bold">
          <AnimatedCounter value={skill.level} inView={isInView} />%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );
};

const SkillsPage = () => {
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
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I've learned during my academic journey and personal projects. 
            I'm constantly expanding my knowledge and improving my skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <GlassCard delay={0.2} hover={false}>
            <h2 className="text-2xl font-display font-bold mb-8 gradient-text">Proficiency</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </GlassCard>

          {/* Technology Stack */}
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <GlassCard key={tech.category} delay={0.3 + index * 0.1}>
                <h3 className="text-lg font-display font-bold mb-4 text-primary">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
                      className="px-4 py-2 rounded-lg bg-muted text-sm font-medium transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Learning Mindset Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <GlassCard delay={0.4}>
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                Eager to Learn & Grow
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As a fresher, I understand that learning never stops. I'm passionate about 
                exploring new technologies, frameworks, and best practices. Every project is 
                an opportunity to expand my skill set and become a better developer.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
