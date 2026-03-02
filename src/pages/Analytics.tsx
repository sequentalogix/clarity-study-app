import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const topicData = [
  { topic: "Cardiology", accuracy: 85 },
  { topic: "Pharmacology", accuracy: 92 },
  { topic: "Pathology", accuracy: 58 },
  { topic: "Anatomy", accuracy: 74 },
  { topic: "Biochemistry", accuracy: 68 },
  { topic: "Neurology", accuracy: 61 },
];

const trendData = [
  { week: "W1", score: 62 },
  { week: "W2", score: 68 },
  { week: "W3", score: 71 },
  { week: "W4", score: 73 },
  { week: "W5", score: 78 },
  { week: "W6", score: 76 },
];

const pieData = [
  { name: "Strong", value: 3 },
  { name: "Moderate", value: 1 },
  { name: "Weak", value: 2 },
];
const pieColors = ["hsl(142,71%,45%)", "hsl(38,92%,50%)", "hsl(0,84%,60%)"];

const Analytics = () => (
  <DashboardLayout>
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Performance Analytics</h1>
            <p className="text-muted-foreground">Track your progress and identify areas for improvement.</p>
          </div>
          <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download Report</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <h2 className="mb-4 text-lg font-semibold">Accuracy by Topic</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={topicData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
                <XAxis dataKey="topic" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="accuracy" fill="hsl(221,83%,53%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <h2 className="mb-4 text-lg font-semibold">Performance Over Time</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="hsl(221,83%,53%)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <h2 className="mb-4 text-lg font-semibold">Weak Areas Breakdown</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {pieData.map((_, i) => <Cell key={i} fill={pieColors[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <h2 className="mb-4 text-lg font-semibold">Study Recommendations</h2>
            <div className="space-y-3">
              {[
                { area: "Pathology", tip: "Focus on inflammatory diseases — your accuracy is 58%." },
                { area: "Neurology", tip: "Review cranial nerve pathways — commonly missed." },
                { area: "Biochemistry", tip: "Practice enzyme kinetics problems regularly." },
              ].map((r) => (
                <div key={r.area} className="rounded-lg bg-muted/50 p-3">
                  <p className="font-medium text-sm">{r.area}</p>
                  <p className="text-xs text-muted-foreground">{r.tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  </DashboardLayout>
);

export default Analytics;
