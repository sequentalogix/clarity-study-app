import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    <div className="absolute inset-0 gradient-hero opacity-5" />
    <div className="container relative mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <BookOpen className="h-4 w-4" />
          Trusted by 10,000+ students
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Pass Your Exam{" "}
          <span className="text-gradient">With Confidence</span>
        </h1>
        <p className="mb-10 text-lg text-muted-foreground md:text-xl">
          Practice with thousands of exam-style questions, detailed explanations, 
          and performance analytics designed to help you succeed.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-base font-semibold gradient-primary hover:opacity-90 transition-opacity text-primary-foreground">
            <Link to="/signup">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold">
            <Link to="/pricing">View Plans</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
