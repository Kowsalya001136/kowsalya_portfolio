import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const GlassCard = ({ children, className, delay = 0, hover = true }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "glass-card animated-border p-6 md:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
