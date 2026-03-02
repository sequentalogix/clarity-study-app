import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("John Doe");
  const [email] = useState("john@example.com");

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="mx-auto max-w-2xl space-y-6">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 premium-shadow space-y-4">
            <h2 className="text-lg font-semibold">Profile</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Full Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={email} disabled />
              </div>
            </div>
            <Button onClick={() => toast({ title: "Profile updated!" })} className="gradient-primary text-primary-foreground hover:opacity-90">
              Save Changes
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border bg-card p-6 premium-shadow space-y-4">
            <h2 className="text-lg font-semibold">Change Password</h2>
            <div className="space-y-3">
              <div><Label>Current Password</Label><Input type="password" /></div>
              <div><Label>New Password</Label><Input type="password" /></div>
              <div><Label>Confirm New Password</Label><Input type="password" /></div>
            </div>
            <Button onClick={() => toast({ title: "Password updated!" })} variant="outline">Update Password</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border bg-card p-6 premium-shadow space-y-4">
            <h2 className="text-lg font-semibold">Notification Preferences</h2>
            <div className="space-y-3">
              {["Email notifications", "Quiz reminders", "Study streak alerts", "Marketing emails"].map((label) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm">{label}</span>
                  <Switch defaultChecked={label !== "Marketing emails"} />
                </div>
              ))}
            </div>
          </motion.div>

          <Separator />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-destructive/20 bg-card p-6 premium-shadow">
            <h2 className="text-lg font-semibold text-destructive">Danger Zone</h2>
            <p className="text-sm text-muted-foreground mb-4">Once you delete your account, there is no going back.</p>
            <Button variant="destructive">Delete Account</Button>
          </motion.div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
};

export default SettingsPage;
