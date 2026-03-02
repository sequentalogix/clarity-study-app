import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "Sarah M.", role: "Medical Student", text: "This platform helped me pass my board exams on the first try. The analytics showed me exactly where to focus.", rating: 5 },
  { name: "James T.", role: "CPA Candidate", text: "The question explanations are incredibly detailed. I finally understand concepts that used to confuse me.", rating: 5 },
  { name: "Priya K.", role: "Law Student", text: "The timed practice mode prepared me perfectly for the real exam pressure. Highly recommend!", rating: 5 },
  { name: "David L.", role: "Engineering Student", text: "The tutoring sessions were a game-changer. My tutor helped me tackle my weakest areas.", rating: 5 },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Students Say</h2>
        </motion.div>
        <div className="mx-auto max-w-2xl">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="rounded-xl border bg-card p-8 premium-shadow-lg text-center"
          >
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            <p className="mb-6 text-lg italic text-foreground">"{testimonials[active].text}"</p>
            <p className="font-semibold">{testimonials[active].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
          </motion.div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
