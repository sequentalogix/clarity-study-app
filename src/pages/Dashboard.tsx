import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Questions Completed", value: 847, icon: BookOpen, color: "text-primary" },
  { label: "Accuracy", value: 76, suffix: "%", icon: Target, color: "text-success" },
  { label: "Strongest Topic", value: "Pharmacology", icon: TrendingUp, color: "text-success" },
  { label: "Weakest Topic", value: "Pathology", icon: TrendingDown, color: "text-warning" },
];

const recentActivity = [
  { title: "Cardiology Quiz", score: "82%", date: "2 hours ago" },
  { title: "Anatomy Practice Set", score: "71%", date: "Yesterday" },
  { title: "Biochemistry Review", score: "89%", date: "2 days ago" },
  { title: "Neurology Quiz", score: "65%", date: "3 days ago" },
];

const Dashboard = () => (
  <DashboardLayout>
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">Here's your study progress at a glance.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border bg-card p-5 premium-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div className="text-2xl font-bold">
                {typeof s.value === "number" ? (
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border bg-card p-6 premium-shadow"
          >
            <h2 className="mb-4 text-lg font-semibold">Overall Progress</h2>
            <div className="space-y-4">
              {[
                { topic: "Cardiology", pct: 85 },
                { topic: "Pharmacology", pct: 92 },
                { topic: "Pathology", pct: 58 },
                { topic: "Anatomy", pct: 74 },
              ].map((t) => (
                <div key={t.topic}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{t.topic}</span>
                    <span className="text-muted-foreground">{t.pct}%</span>
                  </div>
                  <Progress value={t.pct} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border bg-card p-6 premium-shadow"
          >
            <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((a) => (
                <div key={a.title} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                  <div>
                    <p className="font-medium text-sm">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.date}</p>
                  </div>
                  <span className="text-sm font-semibold">{a.score}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Button asChild className="gradient-primary text-primary-foreground hover:opacity-90">
            <Link to="/dashboard/quiz-bank">
              Continue Last Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </PageTransition>
  </DashboardLayout>
);

export default Dashboard;
