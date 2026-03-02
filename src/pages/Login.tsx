import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    // Mock login — navigate to dashboard
    toast({ title: "Welcome back!" });
    navigate("/dashboard");
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-xl border bg-card p-8 premium-shadow-lg"
        >
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 font-bold text-xl mb-2">
              <BookOpen className="h-6 w-6 text-primary" />
              QuizBank
            </Link>
            <p className="text-muted-foreground">Welcome back. Sign in to continue.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="text-right">
              <span className="text-sm text-primary cursor-pointer hover:underline">Forgot Password?</span>
            </div>
            <Button type="submit" className="w-full gradient-primary text-primary-foreground hover:opacity-90">
              Log In
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">Sign Up</Link>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Login;
