import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "#ffffff" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0077b5" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1da1f2" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#e4405f" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "#ff0000" },
];

const SocialLinks = ({ vertical = false }: { vertical?: boolean }) => {
  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} gap-3`}>
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ 
            scale: 1.2,
            boxShadow: `0 0 30px ${social.color}40`,
          }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
