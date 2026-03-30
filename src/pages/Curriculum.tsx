import { BookOpen, Target, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const weeks = [
    {
      title: "Week 1: FigJam Foundations & The Play Zone",
      goal: "Master the UI and basic tactile tools to reduce technical anxiety.",
      concepts: ["Panning/Zooming", "The Toolbar", "Google SSO"],
      activity: "The Play Zone: Marker, Stickies, and UI exploration.",
      connection: "ALT: Encourages Self-Concept through autonomous exploration.",
      accent: "border-week-1"
    },
    {
      title: "Week 2: Amplifying Student Voice",
      goal: "Use interactive widgets to make thinking visible and capture real-time data.",
      concepts: ["Stamps & Emotes", "Photo Booth", "Voice Memos"],
      activity: "The Great Debate: Responding via Voice Memos and Voting.",
      connection: "UDL: Multiple Means of Action and Expression.",
      accent: "border-week-2"
    },
    {
      title: "Week 3: Designing for Flow & Structure",
      goal: "Move from a 'messy board' to an organized lesson using Sections and Connectors.",
      concepts: ["Sections", "Connectors", "Spotlight Mode"],
      activity: "Experimental Zone: Creating a 3-part lesson flow.",
      connection: "ALT: Scaffolding complex design into manageable sections.",
      accent: "border-week-3"
    },
    {
      title: "Week 4: Deployment & The Template Swap",
      goal: "Successfully share files and build a reusable resource library.",
      concepts: ["Permissions", "LMS Integration", "K-12 Community"],
      activity: "Meet the Network: Template sharing on the Padlet.",
      connection: "Social Presence: Sustaining community through resource sharing.",
      accent: "border-week-4"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="py-16 bg-violet-600 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Network Curriculum</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A structured 4-week journey from FigJam beginner to classroom facilitator.
          </p>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-12 -mt-8">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border-2 border-violet-100 shadow-sm">
              <div className="flex gap-4">
                <Target className="w-8 h-8 text-violet-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Objective 1: Structure</h3>
                  <p className="text-muted-foreground text-sm">
                    Given a blank FigJam board, utilize the toolbar to create a visually organized lesson plan using sections and connectors.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-2xl border-2 border-violet-100 shadow-sm">
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-violet-600 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Objective 2: Engagement</h3>
                  <p className="text-muted-foreground text-sm">
                    Implement interactive widgets (voting, timers, and stamps) to facilitate real-time student engagement and feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
                  <p className="text-sm font-semibold text-violet-700 mb-3">{week.goal}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Key Concepts</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {week.concepts.map(c => (
                          <span key={c} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs">{c}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Activity:</strong> {week.activity}
                    </p>
                    <p className="text-xs italic text-violet-600/80 bg-violet-50 p-2 rounded">
                      {week.connection}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 w-full group" asChild>
                    <Link to={`/week/${index + 1}`}>
                      Go to Week {index + 1} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
