import { BookOpen, Target, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const weeks = [
    {
      title: "Week 1: Individual Exploration (Foundations)",
      goal: "Focus: Mastering the \"Must-Know\" toolbar and canvas gestures.",
      action: "Action: Enter the Play Zone. Use the Marker to sign your name and a Sticky Note to share your \"Teaching Superpower.\"",
      objective: "Objective: Given a blank FigJam board, the educator will utilize the marker and sticky note tools to create a labeled introduction with 100% accuracy.",
      accent: "border-week-1"
    },
    {
      title: "Week 2: Small Group Collaboration (Student Voice)",
      goal: "Focus: Using interactive widgets (Stamps, Emotes, and Voice Memos) for feedback.",
      action: "Action: Join \"The Great Debate\" in the Experimental Zone. Vote with stamps and record a 30-second audio defense of your choice.",
      objective: "Objective: Participants will implement at least two interactive widgets to facilitate peer feedback within the virtual workspace.",
      accent: "border-week-2"
    },
    {
      title: "Week 3: Whole Class Structure (Lesson Flow)",
      goal: "Focus: Organizing the infinite whiteboard using Sections and Connectors.",
      action: "Action: Design a 3-part lesson skeleton (Hook, Activity, Exit Ticket) using Sections to \"chunk\" the information.",
      objective: "Objective: Using sections and connectors, the educator will design a structured lesson flow that guides a student through a complete instructional cycle.",
      accent: "border-week-3"
    },
    {
      title: "Week 4: Implementation & Deployment",
      goal: "Focus: Sharing files with students and the @K12education template community.",
      action: "Action: Post a link to a template you’ve created or modified on our community Padlet for final peer review.",
      objective: "Objective: Educators will successfully export or share a collaborative file to a learning management system (Google Classroom/Canvas) for student use.",
      accent: "border-week-4"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="py-16 bg-violet-600 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">The Jam Think Spark Curriculum</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A research-based professional learning journey designed to spark visual collaboration in the K-12 classroom.
          </p>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {weeks.map((week, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-violet-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Calendar className="w-5 h-5" />
                </div>
                
                {/* Content Card */}
                <div className={`w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border-l-4 bg-card shadow-sm hover:shadow-md transition-shadow ${week.accent}`}>
                  <h3 className="font-bold text-xl mb-2">{week.title}</h3>
                  <p className="text-sm font-semibold text-violet-700 mb-2">{week.goal}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {week.action}
                  </p>
                  
                  <div className="bg-violet-50 p-4 rounded-xl border border-violet-100">
                    <p className="text-xs leading-relaxed text-violet-900">
                      <strong>{week.objective.split(':')[0]}:</strong>{week.objective.split(':')[1]}
                    </p>
                  </div>

                  <Button variant="ghost" size="sm" className="mt-4 w-full group hover:bg-violet-100" asChild>
                    <Link to={`/week-${index + 1}`}>
                      View Week {index + 1} Resources <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
