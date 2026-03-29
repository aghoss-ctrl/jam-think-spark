import { GitBranch, Eye, Timer, LayoutList, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitBranch, Eye, Timer, LayoutList, ExternalLink } from "lucide-react";
import { GitBranch, Eye, Timer, LayoutList, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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
         <div className="bg-card rounded-xl p-6 shadow-sm border flex flex-col justify-between">
  <div>
    <span className="text-2xl">🔗</span>
    <h3 className="font-display font-bold text-lg mt-2">Connectors</h3>
    <p className="text-sm text-muted-foreground mt-2 mb-4">
      Map out flows and show relationships between ideas. Use lines and arrows to create clear, easy-to-follow diagrams and processes.
    </p>
  </div>
  <Button variant="outline" size="sm" asChild className="w-full mt-auto">
    <a 
      href="https://help.figma.com/hc/en-us/articles/1500004414542-Create-diagrams-and-flows-with-connectors-in-FigJam" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2"
    >
      Learn More <ExternalLink className="w-4 h-4" />
    </a>
  </Button>
</div>
         
        </div>
      </ContentSection>

      {/* Classroom Management */}
      <ContentSection title="Classroom Management Features" icon={<Eye className="w-5 h-5" />}>
    
        <div className="grid sm:grid-cols-3 gap-4">
  {/* Spotlight Card */}
  <div className="bg-accent/10 rounded-xl p-5 text-center flex flex-col justify-between border border-transparent hover:border-accent/20 transition-all">
    <div>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-3">
        <Eye className="w-6 h-6" />
      </div>
      <h3 className="font-display font-bold text-lg">Spotlight Mode</h3>
      <p className="text-xs text-muted-foreground mt-2 mb-4">
        Focus everyone's view on what you want them to see. When you spotlight yourself, everyone follows your view.
      </p>
    </div>
    <Button variant="outline" size="xs" asChild className="w-full mt-auto text-[10px] h-8">
      <a 
        href="https://help.figma.com/hc/en-us/articles/5025214483351-Facilitate-meetings-with-spotlight" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1"
      >
        Learn More <ExternalLink className="w-3 h-3" />
      </a>
    </Button>
  </div>

  {/* Follow Mode Card */}
  <div className="bg-accent/10 rounded-xl p-5 text-center flex flex-col justify-between border border-transparent hover:border-accent/20 transition-all">
    <div>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-3">
        <GitBranch className="w-6 h-6" />
      </div>
      <h3 className="font-display font-bold text-lg">Follow Mode</h3>
      <p className="text-xs text-muted-foreground mt-2 mb-4">
        Have students follow your cursor as you navigate through different parts of the board.
      </p>
    </div>
  </div>

  {/* Timer Card */}
  <div className="bg-accent/10 rounded-xl p-5 text-center flex flex-col justify-between border border-transparent hover:border-accent/20 transition-all">
    <div>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-3">
        <Timer className="w-6 h-6" />
      </div>
      <h3 className="font-display font-bold text-lg">Timer</h3>
      <p className="text-xs text-muted-foreground mt-2 mb-4">
        Set visible countdowns for activities and transitions to keep the lesson on track.
      </p>
    </div>
  </div>
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
