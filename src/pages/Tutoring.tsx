import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const times = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

const Tutoring = () => {
  const [selected, setSelected] = useState<{ day: string; time: string } | null>(null);
  const [confirm, setConfirm] = useState(false);
  const { toast } = useToast();

  const handleBook = () => {
    setConfirm(false);
    toast({ title: "Session booked!", description: `${selected?.day} at ${selected?.time}` });
    setSelected(null);
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Book Tutoring</h1>
            <p className="text-muted-foreground">Schedule a 1-on-1 session with an expert tutor.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border bg-card p-6 premium-shadow">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Available This Week</h2>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-5 gap-3 min-w-[500px]">
                {days.map((day) => (
                  <div key={day}>
                    <div className="mb-3 text-center font-semibold text-sm">{day}</div>
                    <div className="space-y-2">
                      {times.map((time) => {
                        const isSelected = selected?.day === day && selected?.time === time;
                        const available = Math.random() > 0.3;
                        return (
                          <button
                            key={`${day}-${time}`}
                            disabled={!available}
                            onClick={() => setSelected({ day, time })}
                            className={`w-full rounded-lg border p-2 text-xs font-medium transition-all ${
                              isSelected
                                ? "border-primary bg-primary/10 text-primary"
                                : available
                                ? "hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
                                : "opacity-40 cursor-not-allowed bg-muted/50"
                            }`}
                          >
                            <Clock className="h-3 w-3 mx-auto mb-1" />
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                disabled={!selected}
                onClick={() => setConfirm(true)}
                className="gradient-primary text-primary-foreground hover:opacity-90"
              >
                Book Session
              </Button>
            </div>
          </motion.div>
        </div>

        <Dialog open={confirm} onOpenChange={setConfirm}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Booking</DialogTitle>
              <DialogDescription>
                Book a tutoring session on <strong>{selected?.day}</strong> at <strong>{selected?.time}</strong>?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setConfirm(false)}>Cancel</Button>
              <Button onClick={handleBook} className="gradient-primary text-primary-foreground hover:opacity-90">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PageTransition>
    </DashboardLayout>
  );
};

export default Tutoring;
