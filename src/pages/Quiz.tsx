import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Flag, Clock, ChevronDown, ArrowRight, RotateCcw, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

const questions = [
  {
    q: "Which of the following is the most common cause of aortic stenosis in patients over 70?",
    options: ["Rheumatic heart disease", "Bicuspid aortic valve", "Degenerative calcification", "Infective endocarditis"],
    correct: 2,
    explanation: "Degenerative calcification (senile aortic stenosis) is the most common cause of aortic stenosis in elderly patients over 70 years of age.",
  },
  {
    q: "What is the primary mechanism of action of ACE inhibitors?",
    options: ["Block calcium channels", "Inhibit angiotensin-converting enzyme", "Block beta-adrenergic receptors", "Increase potassium excretion"],
    correct: 1,
    explanation: "ACE inhibitors work by inhibiting angiotensin-converting enzyme, preventing the conversion of angiotensin I to angiotensin II.",
  },
  {
    q: "Which cardiac arrhythmia is characterized by irregularly irregular rhythm?",
    options: ["Atrial flutter", "Atrial fibrillation", "Ventricular tachycardia", "First-degree AV block"],
    correct: 1,
    explanation: "Atrial fibrillation characteristically presents with an irregularly irregular rhythm, both in terms of rate and ECG pattern.",
  },
];

type Phase = "quiz" | "results";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timerOn, setTimerOn] = useState(false);
  const [phase, setPhase] = useState<Phase>("quiz");

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    setAnswers((prev) => [...prev, selected]);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((p) => p + 1);
      setSelected(null);
      setSubmitted(false);
      setShowExplanation(false);
    } else {
      setPhase("results");
    }
  };

  const toggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(current)) next.delete(current);
      else next.add(current);
      return next;
    });
  };

  const correctCount = answers.filter((a, i) => a === questions[i].correct).length;

  if (phase === "results") {
    return (
      <PageTransition>
        <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-xl border bg-card p-8 premium-shadow-lg text-center"
          >
            <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <h1 className="mb-2 text-3xl font-bold">Quiz Complete!</h1>
            <p className="mb-6 text-muted-foreground">Here's how you did.</p>
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-3xl font-bold text-primary">{Math.round((correctCount / questions.length) * 100)}%</p>
                <p className="text-sm text-muted-foreground">Score</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-3xl font-bold">{correctCount}/{questions.length}</p>
                <p className="text-sm text-muted-foreground">Correct</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => { setPhase("quiz"); setCurrent(0); setSelected(null); setSubmitted(false); setAnswers([]); setShowExplanation(false); }}>
                <RotateCcw className="mr-2 h-4 w-4" /> Retry
              </Button>
              <Button asChild className="flex-1 gradient-primary text-primary-foreground hover:opacity-90">
                <Link to="/dashboard/quiz-bank">Back to Quiz Bank</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col bg-muted/30">
        <div className="border-b bg-card px-4 py-3">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Button asChild variant="ghost" size="sm">
              <Link to="/dashboard/quiz-bank">← Exit</Link>
            </Button>
            <span className="text-sm font-medium">Question {current + 1} of {questions.length}</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <Switch checked={timerOn} onCheckedChange={setTimerOn} />
              </div>
              <Button variant="ghost" size="icon" onClick={toggleFlag} className={flagged.has(current) ? "text-warning" : ""}>
                <Flag className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-2 max-w-3xl">
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>

        <div className="flex-1 flex items-start justify-center px-4 py-8">
          <div className="w-full max-w-3xl space-y-6">
            <motion.h2
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-semibold md:text-2xl"
            >
              {question.q}
            </motion.h2>

            <div className="space-y-3">
              {question.options.map((opt, i) => {
                let classes = "rounded-xl border bg-card p-4 cursor-pointer transition-all hover-lift premium-shadow";
                if (submitted) {
                  if (i === question.correct) classes += " border-success bg-success/5";
                  else if (i === selected && i !== question.correct) classes += " border-destructive bg-destructive/5";
                } else if (i === selected) {
                  classes += " border-primary bg-primary/5";
                }
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={classes}
                    onClick={() => !submitted && setSelected(i)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-medium ${
                        submitted && i === question.correct ? "bg-success text-success-foreground border-success" :
                        submitted && i === selected ? "bg-destructive text-destructive-foreground border-destructive" :
                        i === selected ? "bg-primary text-primary-foreground border-primary" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="font-medium">{opt}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {submitted && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="flex w-full items-center justify-between rounded-lg bg-muted/50 p-3 text-sm font-medium"
                >
                  <span>Explanation</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showExplanation ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-3 text-sm text-muted-foreground">{question.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            <div className="flex gap-3">
              {!submitted ? (
                <Button onClick={handleSubmit} disabled={selected === null} className="gradient-primary text-primary-foreground hover:opacity-90">
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext} className="gradient-primary text-primary-foreground hover:opacity-90">
                  {current < questions.length - 1 ? (
                    <>Next Question <ArrowRight className="ml-2 h-4 w-4" /></>
                  ) : (
                    "View Results"
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Quiz;
