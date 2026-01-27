import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const certifications = [
  {
    title: "Certificate 1",
    issuer: "Issuing Organization",
    date: "2024",
    credentialId: "CERT-001",
    link: "#",
  },
  {
    title: "Certificate 2",
    issuer: "Issuing Organization",
    date: "2024",
    credentialId: "CERT-002",
    link: "#",
  },
  {
    title: "Certificate 3",
    issuer: "Issuing Organization",
    date: "2023",
    credentialId: "CERT-003",
    link: "#",
  },
  {
    title: "Certificate 4",
    issuer: "Issuing Organization",
    date: "2023",
    credentialId: "CERT-004",
    link: "#",
  },
];

const CertificationsPage = () => {
  return (
    <div className="page-section flex-col pt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <GlassCard key={cert.credentialId} delay={0.2 + index * 0.1}>
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0"
                >
                  <Award className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold mb-1 gradient-text">
                    {cert.title}
                  </h3>
                  <p className="text-foreground mb-2">{cert.issuer}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-muted">
                      ID: {cert.credentialId}
                    </div>
                  </div>
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                </motion.a>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Motivation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <GlassCard delay={0.6}>
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
                Always Growing
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm committed to expanding my knowledge through online courses, workshops, and 
                certifications. As a fresher stepping into the tech industry, I understand the 
                importance of staying updated with the latest technologies and industry standards.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsPage;
