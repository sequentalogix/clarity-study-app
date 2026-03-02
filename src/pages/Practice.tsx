import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const exams = [
  { id: 1, title: "Full Length Practice Exam 1", questions: 100, duration: "120 min", attempted: true, score: "78%" },
  { id: 2, title: "Full Length Practice Exam 2", questions: 100, duration: "120 min", attempted: true, score: "82%" },
  { id: 3, title: "Full Length Practice Exam 3", questions: 100, duration: "120 min", attempted: false },
  { id: 4, title: "Mini Practice Test", questions: 25, duration: "30 min", attempted: false },
];

const Practice = () => (
  <DashboardLayout>
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Practice Exams</h1>
          <p className="text-muted-foreground">Simulate real exam conditions with timed practice tests.</p>
        </div>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search practice exams..." className="pl-9" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {exams.map((exam, i) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="hover-lift rounded-xl border bg-card p-5 premium-shadow"
            >
              <div className="flex items-start gap-3 mb-3">
                <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold">{exam.title}</h3>
                  <p className="text-sm text-muted-foreground">{exam.questions} questions · {exam.duration}</p>
                </div>
                {exam.attempted && <Badge className="bg-success/10 text-success">{exam.score}</Badge>}
              </div>
              <Button asChild size="sm" className="w-full gradient-primary text-primary-foreground hover:opacity-90">
                <Link to="/dashboard/quiz">
                  {exam.attempted ? "Retake" : "Start"} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  </DashboardLayout>
);

export default Practice;
