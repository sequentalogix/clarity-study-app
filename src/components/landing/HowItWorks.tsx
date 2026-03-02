import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Choose Your Exam", desc: "Select from our library of exam-specific question banks." },
  { num: "02", title: "Practice & Learn", desc: "Work through questions at your own pace with instant feedback." },
  { num: "03", title: "Track & Improve", desc: "Review analytics to focus on weak areas and build confidence." },
];

export const HowItWorks = () => (
  <section className="bg-muted/50 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
        <p className="text-lg text-muted-foreground">Get started in three simple steps.</p>
      </motion.div>
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary text-2xl font-bold text-primary-foreground">
              {s.num}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
