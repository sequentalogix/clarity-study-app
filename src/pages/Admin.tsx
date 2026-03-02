import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Upload, Users, CreditCard, BarChart3, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const mockUsers = [
  { id: 1, name: "Sarah Miller", email: "sarah@example.com", plan: "Pro", status: "Active" },
  { id: 2, name: "James Taylor", email: "james@example.com", plan: "Basic", status: "Active" },
  { id: 3, name: "Priya Kumar", email: "priya@example.com", plan: "Premium", status: "Active" },
  { id: 4, name: "David Lee", email: "david@example.com", plan: "Pro", status: "Inactive" },
];

const mockQuestions = [
  { id: 1, question: "Which artery supplies the SA node?", topic: "Cardiology", difficulty: "Medium" },
  { id: 2, question: "What is the MOA of Metformin?", topic: "Pharmacology", difficulty: "Hard" },
  { id: 3, question: "Name the layers of the epidermis.", topic: "Anatomy", difficulty: "Easy" },
];

const Admin = () => {
  const { toast } = useToast();
  const [newQ, setNewQ] = useState({ question: "", topic: "", difficulty: "", options: "", answer: "", explanation: "" });

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Admin Panel</h1>
            <p className="text-muted-foreground">Manage questions, users, and plans.</p>
          </div>

          {/* Sales Stats */}
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { label: "Total Users", value: 1247, icon: Users },
              { label: "Active Subscriptions", value: 983, icon: CreditCard },
              { label: "Monthly Revenue", value: 38340, prefix: "$", icon: BarChart3 },
              { label: "Total Questions", value: 2450, icon: Plus },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border bg-card p-5 premium-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                  <s.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="text-2xl font-bold">{s.prefix}<AnimatedCounter value={s.value} /></p>
              </motion.div>
            ))}
          </div>

          <Tabs defaultValue="questions">
            <TabsList>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="add">Add Question</TabsTrigger>
              <TabsTrigger value="upload">Upload CSV</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="plans">Plans</TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="mt-4">
              <div className="rounded-xl border bg-card premium-shadow overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Question</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead className="w-20"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockQuestions.map((q) => (
                      <TableRow key={q.id}>
                        <TableCell className="font-medium max-w-xs truncate">{q.question}</TableCell>
                        <TableCell><Badge variant="secondary">{q.topic}</Badge></TableCell>
                        <TableCell>{q.difficulty}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="add" className="mt-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 premium-shadow space-y-4 max-w-2xl">
                <div><Label>Question</Label><Textarea value={newQ.question} onChange={(e) => setNewQ({ ...newQ, question: e.target.value })} placeholder="Enter question text..." /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Topic</Label>
                    <Select value={newQ.topic} onValueChange={(v) => setNewQ({ ...newQ, topic: v })}>
                      <SelectTrigger><SelectValue placeholder="Select topic" /></SelectTrigger>
                      <SelectContent>
                        {["Cardiology", "Pharmacology", "Anatomy", "Pathology", "Biochemistry", "Neurology"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Difficulty</Label>
                    <Select value={newQ.difficulty} onValueChange={(v) => setNewQ({ ...newQ, difficulty: v })}>
                      <SelectTrigger><SelectValue placeholder="Select difficulty" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Easy">Easy</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label>Options (comma-separated)</Label><Input value={newQ.options} onChange={(e) => setNewQ({ ...newQ, options: e.target.value })} placeholder="Option A, Option B, Option C, Option D" /></div>
                <div><Label>Correct Answer</Label><Input value={newQ.answer} onChange={(e) => setNewQ({ ...newQ, answer: e.target.value })} placeholder="Enter correct answer" /></div>
                <div><Label>Explanation</Label><Textarea value={newQ.explanation} onChange={(e) => setNewQ({ ...newQ, explanation: e.target.value })} placeholder="Enter explanation..." /></div>
                <Button onClick={() => { toast({ title: "Question added!" }); setNewQ({ question: "", topic: "", difficulty: "", options: "", answer: "", explanation: "" }); }} className="gradient-primary text-primary-foreground hover:opacity-90">
                  <Plus className="mr-2 h-4 w-4" /> Add Question
                </Button>
              </motion.div>
            </TabsContent>

            <TabsContent value="upload" className="mt-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-8 premium-shadow text-center max-w-lg">
                <Upload className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 font-semibold">Upload CSV File</h3>
                <p className="mb-4 text-sm text-muted-foreground">Upload a CSV file with columns: question, options, answer, topic, difficulty, explanation</p>
                <Button variant="outline" onClick={() => toast({ title: "CSV upload coming soon!" })}>
                  <Upload className="mr-2 h-4 w-4" /> Choose File
                </Button>
              </motion.div>
            </TabsContent>

            <TabsContent value="users" className="mt-4">
              <div className="rounded-xl border bg-card premium-shadow overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((u) => (
                      <TableRow key={u.id}>
                        <TableCell className="font-medium">{u.name}</TableCell>
                        <TableCell>{u.email}</TableCell>
                        <TableCell><Badge variant="secondary">{u.plan}</Badge></TableCell>
                        <TableCell>
                          <Badge className={u.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}>
                            {u.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="plans" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
                {[
                  { name: "Basic", price: "$19/mo", users: 412 },
                  { name: "Pro", price: "$39/mo", users: 489 },
                  { name: "Premium", price: "$79/mo", users: 82 },
                ].map((plan) => (
                  <div key={plan.name} className="rounded-xl border bg-card p-5 premium-shadow">
                    <h3 className="font-semibold mb-1">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-1">{plan.price}</p>
                    <p className="text-sm text-muted-foreground mb-3">{plan.users} active users</p>
                    <Button variant="outline" size="sm" className="w-full">Edit Plan</Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default Admin;
