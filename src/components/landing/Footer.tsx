import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6 text-primary" />
            QuizBank
          </div>
          <p className="text-sm text-muted-foreground">
            The smarter way to prepare for your professional exams.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/signup" className="hover:text-foreground transition-colors">Sign Up</Link></li>
            <li><Link to="/login" className="hover:text-foreground transition-colors">Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground transition-colors cursor-pointer">Help Center</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-pointer">Contact Us</span></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        © 2026 QuizBank. All rights reserved.
      </div>
    </div>
  </footer>
);
