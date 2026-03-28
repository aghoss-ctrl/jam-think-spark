import { PartyPopper, Share2, Copy, ExternalLink } from "lucide-react";
import WeekLayout from "@/components/WeekLayout";
import ContentSection from "@/components/ContentSection";
import ActivityCard from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";

const Week4 = () => {
  return (
    <WeekLayout
      weekNumber={4}
      title="The Celebration & Resource Swap"
      focus="Sharing work, reflecting on the journey, and exchanging templates with fellow educators."
      accentClass="bg-week-4 text-foreground"
    >
      {/* Sharing Tips */}
      <ContentSection title="Sharing Your Work" icon={<Share2 className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="text-2xl mb-3">🏫</div>
            <h3 className="font-display font-bold text-lg">Share to Google Classroom</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Learn how to share your FigJam files directly to Google Classroom so students
              can access them with one click.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-2 text-2xl mb-3">
              <Copy className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-lg">Make Copies for Students</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Create individual copies of your FigJam template for every student — giving each
              learner their own workspace to explore.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Reflection */}
      <ContentSection title="Reflect & Celebrate" icon={<PartyPopper className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-8 shadow-sm border">
          <p className="text-lg leading-relaxed mb-4">
            🎉 You've completed 4 weeks of FigJam professional development! Take a moment to
            reflect on how far you've come — from learning the basics to building structured,
            collaborative lessons.
          </p>
          <p className="text-muted-foreground">
            Think about: What tool surprised you the most? How will you use FigJam in your
            classroom this semester? What would you share with a colleague?
          </p>
        </div>
      </ContentSection>

      {/* Activity */}
      <ContentSection title="Final Activity">
        <ActivityCard
          title="The Template Exchange"
          description="Post links to your final created FigJam lessons on our shared Padlet! Browse what other educators have built, grab ideas, and leave encouraging feedback. This is your community — let's build it together."
          stickyColor="blue"
        />
        <div className="mt-6">
          <Button variant="hero" size="lg" asChild>
            <a href="https://padlet.com/aghoss/post-your-figjam-here-txqg7d1gdvisb56m" target="_blank" rel="noopener noreferrer">
              Open Shared Padlet <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </ContentSection>
    </WeekLayout>
  );
};

export default Week4;
