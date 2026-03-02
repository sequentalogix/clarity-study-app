import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const quizSets = [
  { id: 1, title: "Cardiology Essentials", topic: "Cardiology", difficulty: "Medium", questions: 50, type: "MCQ" },
  { id: 2, title: "Pharmacology Fundamentals", topic: "Pharmacology", difficulty: "Hard", questions: 75, type: "MCQ" },
  { id: 3, title: "Anatomy Review", topic: "Anatomy", difficulty: "Easy", questions: 40, type: "MCQ" },
  { id: 4, title: "Pathology Deep Dive", topic: "Pathology", difficulty: "Hard", questions: 60, type: "MCQ" },
  { id: 5, title: "Biochemistry Basics", topic: "Biochemistry", difficulty: "Medium", questions: 35, type: "MCQ" },
  { id: 6, title: "Neurology Comprehensive", topic: "Neurology", difficulty: "Hard", questions: 80, type: "MCQ" },
];

const diffColors: Record<string, string> = {
  Easy: "bg-success/10 text-success",
  Medium: "bg-warning/10 text-warning",
  Hard: "bg-destructive/10 text-destructive",
};

const QuizBank = () => {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const filtered = quizSets.filter((q) => {
    if (search && !q.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (topic !== "all" && q.topic !== topic) return false;
    if (difficulty !== "all" && q.difficulty !== difficulty) return false;
    return true;
  });

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">My Quiz Bank</h1>
            <p className="text-muted-foreground">Browse and start practice quizzes.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search quizzes..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Topic" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="Cardiology">Cardiology</SelectItem>
                <SelectItem value="Pharmacology">Pharmacology</SelectItem>
                <SelectItem value="Anatomy">Anatomy</SelectItem>
                <SelectItem value="Pathology">Pathology</SelectItem>
                <SelectItem value="Biochemistry">Biochemistry</SelectItem>
                <SelectItem value="Neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Difficulty" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover-lift rounded-xl border bg-card p-5 premium-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{q.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">{q.topic}</Badge>
                  <Badge className={`text-xs ${diffColors[q.difficulty]}`}>{q.difficulty}</Badge>
                  <Badge variant="outline" className="text-xs">{q.questions} Q's</Badge>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1 gradient-primary text-primary-foreground hover:opacity-90">
                    <Link to="/dashboard/quiz">
                      Start Quiz <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">No quizzes match your filters.</div>
          )}
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default QuizBank;
