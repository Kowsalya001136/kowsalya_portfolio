import { motion } from "framer-motion";
import { ExternalLink, Trophy, Code, Target, Award } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const profiles = [
  {
    name: "GitHub",
    username: "@johndoe",
    description: "Open source contributions and personal projects",
    stats: [
      { label: "Repositories", value: "120+" },
      { label: "Stars", value: "1.2K" },
      { label: "Contributions", value: "2.5K" },
    ],
    url: "https://github.com",
    icon: "🐙",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "LeetCode",
    username: "@johndoe",
    description: "Competitive programming and DSA practice",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Contest Rating", value: "1850" },
      { label: "Ranking", value: "Top 5%" },
    ],
    url: "https://leetcode.com",
    icon: "⚡",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "SkillRack",
    username: "@johndoe",
    description: "Programming practice and skill assessment",
    stats: [
      { label: "Problems", value: "800+" },
      { label: "Badges", value: "25" },
      { label: "Score", value: "9500" },
    ],
    url: "https://skillrack.com",
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "HackerRank",
    username: "@johndoe",
    description: "Coding challenges and certifications",
    stats: [
      { label: "Badges", value: "15" },
      { label: "Certifications", value: "8" },
      { label: "Stars", value: "Gold" },
    ],
    url: "https://hackerrank.com",
    icon: "💻",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "CodeChef",
    username: "@johndoe",
    description: "Competitive programming contests",
    stats: [
      { label: "Rating", value: "1900" },
      { label: "Stars", value: "4★" },
      { label: "Problems", value: "300+" },
    ],
    url: "https://codechef.com",
    icon: "👨‍🍳",
    color: "from-amber-600 to-orange-600",
  },
  {
    name: "Stack Overflow",
    username: "@johndoe",
    description: "Community contributions and Q&A",
    stats: [
      { label: "Reputation", value: "5K+" },
      { label: "Answers", value: "200+" },
      { label: "Badges", value: "50" },
    ],
    url: "https://stackoverflow.com",
    icon: "📚",
    color: "from-orange-400 to-orange-600",
  },
];

const ProfilesPage = () => {
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
            Coding <span className="gradient-text">Profiles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My presence across various coding platforms and communities.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: Code, label: "Problems Solved", value: "2000+" },
            { icon: Trophy, label: "Contests Won", value: "15" },
            { icon: Target, label: "Accuracy", value: "92%" },
            { icon: Award, label: "Certifications", value: "12" },
          ].map((stat, index) => (
            <GlassCard key={stat.label} delay={0.3 + index * 0.1} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-display font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${profile.color}`}>
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold">{profile.name}</h3>
                      <span className="text-sm text-muted-foreground">{profile.username}</span>
                    </div>
                  </div>
                  <motion.a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                <p className="text-sm text-muted-foreground mb-6">{profile.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors text-sm font-medium"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
