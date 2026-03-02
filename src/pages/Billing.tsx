import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, ArrowUpRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const invoices = [
  { id: "INV-001", date: "Feb 1, 2026", amount: "$39.00", status: "Paid" },
  { id: "INV-002", date: "Jan 1, 2026", amount: "$39.00", status: "Paid" },
  { id: "INV-003", date: "Dec 1, 2025", amount: "$39.00", status: "Paid" },
];

const Billing = () => (
  <DashboardLayout>
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Billing</h1>
          <p className="text-muted-foreground">Manage your subscription and payment methods.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <h2 className="mb-4 text-lg font-semibold">Current Plan</h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold">Pro Plan</p>
                <p className="text-muted-foreground">$39/month · Renews Mar 1, 2026</p>
              </div>
              <Badge className="bg-success/10 text-success">Active</Badge>
            </div>
            <div className="flex gap-3">
              <Button className="gradient-primary text-primary-foreground hover:opacity-90">
                Upgrade <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline">Downgrade</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <h2 className="mb-4 text-lg font-semibold">Payment Method</h2>
            <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-4 mb-4">
              <CreditCard className="h-8 w-8 text-muted-foreground" />
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/27</p>
              </div>
            </div>
            <Button variant="outline">Update Payment Method</Button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card p-6 premium-shadow">
          <h2 className="mb-4 text-lg font-semibold">Invoice History</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell>{inv.amount}</TableCell>
                  <TableCell><Badge variant="secondary" className="bg-success/10 text-success">{inv.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </PageTransition>
  </DashboardLayout>
);

export default Billing;
