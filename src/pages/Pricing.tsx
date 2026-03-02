import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Check, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/landing/Footer";
import { Switch } from "@/components/ui/switch";

const tiers = [
  {
    name: "Basic",
    desc: "Quiz Bank Only",
    monthly: 19,
    annual: 15,
    features: ["Full Question Bank", "Basic Progress Tracking", "Email Support", "Mobile Access"],
    cta: "Start Basic",
  },
  {
    name: "Pro",
    desc: "Quiz Bank + Analytics",
    monthly: 39,
    annual: 31,
    popular: true,
    features: ["Everything in Basic", "Advanced Analytics", "Performance Reports", "Priority Support", "Custom Practice Sets"],
    cta: "Start Pro",
  },
  {
    name: "Premium",
    desc: "Quiz Bank + Tutoring + Live Reviews",
    monthly: 79,
    annual: 63,
    features: ["Everything in Pro", "1-on-1 Live Tutoring", "Weekly Live Reviews", "Dedicated Study Plan", "Dedicated Support", "CSV Data Export"],
    cta: "Start Premium",
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <PageTransition>
      <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6 text-primary" />
            QuizBank
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Login</Link>
            <Button asChild size="sm" className="gradient-primary text-primary-foreground hover:opacity-90">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Choose Your Plan</h1>
            <p className="mb-8 text-lg text-muted-foreground">Start with a 7-day free trial on any plan. Cancel anytime.</p>
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
              <Switch checked={annual} onCheckedChange={setAnnual} />
              <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
                Annual <span className="text-success text-xs font-semibold">Save 20%</span>
              </span>
            </div>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`hover-lift rounded-xl border p-8 ${tier.popular ? "border-primary bg-card premium-shadow-lg relative" : "bg-card premium-shadow"}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{tier.desc}</p>
                <div className="mb-6">
                  <motion.span
                    key={annual ? "a" : "m"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-extrabold"
                  >
                    ${annual ? tier.annual : tier.monthly}
                  </motion.span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${tier.popular ? "gradient-primary text-primary-foreground hover:opacity-90" : ""}`} variant={tier.popular ? "default" : "outline"}>
                  <Link to="/signup">{tier.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageTransition>
  );
};

export default Pricing;
