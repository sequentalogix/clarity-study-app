import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  { name: "Basic", price: "$19", features: ["Full Quiz Bank Access", "Basic Analytics", "Email Support"] },
  { name: "Pro", price: "$39", popular: true, features: ["Full Quiz Bank Access", "Advanced Analytics", "Priority Support", "Performance Reports"] },
  { name: "Premium", price: "$79", features: ["Full Quiz Bank Access", "Advanced Analytics", "Live Tutoring Sessions", "Weekly Live Reviews", "Dedicated Support"] },
];

export const PricingPreview = () => (
  <section className="bg-muted/50 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
        <p className="text-lg text-muted-foreground">Choose the plan that fits your needs.</p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`hover-lift rounded-xl border p-8 ${plan.popular ? "border-primary bg-card premium-shadow-lg relative" : "bg-card premium-shadow"}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </div>
            )}
            <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
            <ul className="mb-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild className={`w-full ${plan.popular ? "gradient-primary text-primary-foreground hover:opacity-90" : ""}`} variant={plan.popular ? "default" : "outline"}>
              <Link to="/signup">Get Started</Link>
            </Button>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/pricing" className="text-primary font-medium hover:underline">
          Compare all features →
        </Link>
      </div>
    </div>
  </section>
);
