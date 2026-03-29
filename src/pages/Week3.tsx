import { GitBranch, Eye, Timer, LayoutList, ExternalLink } from "lucide-react";
// ... other imports
import { Button } from "@/components/ui/button";
import { GitBranch, Eye, Timer, LayoutList } from "lucide-react";
import WeekLayout from "@/components/WeekLayout";
import ContentSection from "@/components/ContentSection";
import ActivityCard from "@/components/ActivityCard";

const Week3 = () => {
  return (
    <WeekLayout
      weekNumber={3}
      title="Lessons with Structure"
      focus="Using Sections and Connectors to build lesson flow and organize individual/group workspaces."
      accentClass="bg-week-3"
    >
      {/* Structure Tools */}
      <ContentSection title="Organization Tools" icon={<LayoutList className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-sm border flex flex-col justify-between">
  <div>
    <span className="text-2xl">📦</span>
    <h3 className="font-display font-bold text-lg mt-2">Sections</h3>
    <p className="text-sm text-muted-foreground mt-2 mb-4">
      Create dedicated workspaces for individuals or groups. Keep the board organized and give students clear boundaries for their work.
    </p>
  </div>
  <Button variant="outline" size="sm" asChild className="w-full mt-auto">
    <a 
      href="https://help.figma.com/hc/en-us/articles/9771500257687-Organize-your-canvas-with-sections" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2"
    >
      Learn More <ExternalLink className="w-4 h-4" />
    </a>
  </Button>
</div>
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <span className="text-2xl">📦</span>
            <h3 className="font-display font-bold text-lg mt-2">Sections</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Create dedicated workspaces for individuals or groups. Keep the board organized
              and give students clear boundaries for their work.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <span className="text-2xl">🔗</span>
            <h3 className="font-display font-bold text-lg mt-2">Connectors</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Draw arrows and lines between elements to show relationships, flow, and
              sequence in diagrams and lesson plans.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Classroom Management */}
      <ContentSection title="Classroom Management Features" icon={<Eye className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Eye className="w-6 h-6" />, name: "Spotlight Mode", desc: "Focus everyone's view on what you want them to see" },
            { icon: <GitBranch className="w-6 h-6" />, name: "Follow Mode", desc: "Have students follow your cursor as you navigate" },
            { icon: <Timer className="w-6 h-6" />, name: "Timer", desc: "Set visible countdowns for activities and transitions" },
          ].map((feature) => (
            <div key={feature.name} className="bg-accent/10 rounded-xl p-5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-3">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold">{feature.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Activity */}
      <ContentSection title="This Week's Activity">
        <ActivityCard
          title="The Lesson Flowchart"
          description="Use shapes and connectors to map out a 4-phase instructional lesson: Hook → Instruction → Practice → Assessment. This hands-on activity teaches you to build structured, visual lesson plans in FigJam."
          stickyColor="green"
        />
        <div className="mt-6 bg-card rounded-xl p-6 shadow-sm border">
          <h3 className="font-display font-bold mb-3">📐 The 4 Phases</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["🎣 Hook", "📖 Instruction", "🏋️ Practice", "📊 Assessment"].map((phase) => (
              <div key={phase} className="bg-accent/10 rounded-lg p-3 text-center font-display text-sm font-semibold">
                {phase}
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </WeekLayout>
  );
};

export default Week3;
