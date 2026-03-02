import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { PricingPreview } from "@/components/landing/PricingPreview";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link to="/" className="flex items-center gap-2 font-bold text-xl">
        <BookOpen className="h-6 w-6 text-primary" />
        QuizBank
      </Link>
      <div className="hidden items-center gap-6 md:flex">
        <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
        <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Login</Link>
        <Button asChild size="sm" className="gradient-primary text-primary-foreground hover:opacity-90">
          <Link to="/signup">Get Started</Link>
        </Button>
      </div>
      <Button asChild variant="outline" size="sm" className="md:hidden">
        <Link to="/login">Login</Link>
      </Button>
    </div>
  </nav>
);

const Index = () => (
  <PageTransition>
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <PricingPreview />
    <Footer />
  </PageTransition>
);

export default Index;
