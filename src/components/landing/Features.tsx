import { motion } from "framer-motion";
import { Brain, BarChart3, Clock, Shield, BookOpen, Users } from "lucide-react";

const features = [
  { icon: Brain, title: "Smart Question Bank", desc: "Thousands of curated questions organized by topic and difficulty." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Track your progress with detailed insights and trend analysis." },
  { icon: Clock, title: "Timed Practice", desc: "Simulate real exam conditions with customizable timers." },
  { icon: Shield, title: "Expert Verified", desc: "All questions reviewed by subject matter experts." },
  { icon: BookOpen, title: "Detailed Explanations", desc: "Understand every answer with comprehensive explanations." },
  { icon: Users, title: "Live Tutoring", desc: "Book 1-on-1 sessions with expert tutors." },
];

export const Features = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Everything You Need to Succeed</h2>
        <p className="text-lg text-muted-foreground">
          Our comprehensive platform gives you the tools to master any exam.
        </p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="hover-lift rounded-xl border bg-card p-6 premium-shadow"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
