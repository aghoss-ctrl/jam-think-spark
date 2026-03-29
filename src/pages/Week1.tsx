import { Pen, LayoutGrid, Play, ExternalLink } from "lucide-react";
import WeekLayout from "@/components/WeekLayout";
import ContentSection from "@/components/ContentSection";
import ActivityCard from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";

const Week1 = () => {
  return (
    <WeekLayout
      weekNumber={1}
      title="FigJam Foundations"
      focus="Mastering the 'Must-Knows' — Marker, Highlighter, Eraser, Stickies, Shapes, and Text."
      accentClass="bg-week-1"
    >
      {/* Tools Overview */}
      <ContentSection title="The Must-Know Tools" icon={<Pen className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { emoji: "✏️", name: "Marker", desc: "Draw, annotate, and sketch freely on the canvas" },
            { emoji: "🖍️", name: "Highlighter", desc: "Emphasize key ideas with semi-transparent strokes" },
            { emoji: "🧽", name: "Eraser", desc: "Clean up mistakes or clear space on the board" },
            { emoji: "📝", name: "Stickies", desc: "Add colorful sticky notes for ideas and responses" },
            { emoji: "🔷", name: "Shapes", desc: "Create diagrams with circles, rectangles, and more" },
            { emoji: "🔤", name: "Text", desc: "Add typed text anywhere on the canvas" },
          ].map((tool) => (
            <div key={tool.name} className="bg-card rounded-xl p-5 shadow-sm border hover:shadow-md transition-shadow">
              <span className="text-2xl">{tool.emoji}</span>
              <h3 className="font-display font-bold mt-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>  {/* ✅ Fix 1: removed duplicate closing tag */}

      {/* Activity */}
      <ContentSection title="This Week's Activity">
        <ActivityCard
          title="The Sandbox"
          description="Use the Marker tool to mark up an image and create a basic diagram. This is your chance to get comfortable with the core tools in a low-pressure environment. Experiment freely!"
          stickyColor="yellow"
        />
      </ContentSection>

      {/* Must Know Tools Practice Section */}
      <ContentSection title="Must Know Tools">
        <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-violet-900 mb-4 flex items-center justify-center md:justify-start gap-2">
                <span className="text-3xl">🔍</span> Practice The Must Know Tools
              </h3>
              <p className="text-violet-800 text-lg mb-6">
                To begin practicing these maneuvers, use the button to the right to enter your practice sandbox. You will have to duplicate the FigJam. Instructions are given on the FigJam Sandbox.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Button
                variant="default"
                asChild
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-xl rounded-full shadow-lg hover:scale-105 transition-all"
              >
                
                  href="https://www.figma.com/board/64SRA0wbOiMNfWEPByZsL7/Week-1-FigJam-Foundations?node-id=7-1140&t=G5kf5PHjys262GHh-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Practice the Must Know Tools
                </a>
              </Button>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Video */}
      <ContentSection title="Watch & Learn" icon={<Play className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-8 shadow-sm border">
          <h3 className="font-display font-bold text-lg mb-2">📹 Designing Your First Lesson in FigJam</h3>
          <p className="text-muted-foreground mb-4">
            A walkthrough video covering all the foundation tools and how to set up your first FigJam lesson.
          </p>
          <Button variant="outline" asChild>
            <a href="https://www.youtube.com/results?search_query=designing+first+lesson+figjam" target="_blank" rel="noopener noreferrer">
              Watch Video <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </ContentSection>

      {/* Template Gallery */}
      <ContentSection title="Template Gallery" icon={<LayoutGrid className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-8 shadow-sm border">
          <p className="text-lg leading-relaxed mb-4">
            Browse ready-to-go graphic organizers and templates from Figma's{" "}
            <strong>@K12education</strong> community.
          </p>
          <Button variant="week" asChild>
            <a href="https://www.figma.com/community/tag/k12education/files" target="_blank" rel="noopener noreferrer">
              Browse Templates <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </ContentSection>  {/* ✅ Fix 2: added missing closing tag */}

    </WeekLayout>  {/* ✅ Fix 3: added missing closing tag */}
  );
};

export default Week1;
