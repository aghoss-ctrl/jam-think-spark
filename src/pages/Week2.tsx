import { MessageCircle, Camera, Mic, ThumbsUp } from "lucide-react";
import WeekLayout from "@/components/WeekLayout";
import ContentSection from "@/components/ContentSection";
import ActivityCard from "@/components/ActivityCard";

const Week2 = () => {
  return (
    <WeekLayout
      weekNumber={2}
      title="The Power of Student Voice"
      focus="Using Stamps, Emotes, and Stickies to capture real-time feedback and affirm student ideas."
      accentClass="bg-week-2"
    >
      {/* Voice Tools */}
      <ContentSection title="Making Thinking Visible" icon={<MessageCircle className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: <ThumbsUp className="w-6 h-6" />, name: "Stamps & Emotes", desc: "Quick reactions that let every student participate — vote, agree, question, or celebrate.", color: "bg-sticky-pink/20" },
            { icon: <Camera className="w-6 h-6" />, name: "Photo Booth Widget", desc: "Capture and share images directly on the board to make student work visible.", color: "bg-sticky-green/20" },
            { icon: <Mic className="w-6 h-6" />, name: "Voice Memo Widget", desc: "Record short audio clips so students can explain their thinking in their own words.", color: "bg-sticky-blue/20" },
            { icon: <MessageCircle className="w-6 h-6" />, name: "Sticky Notes", desc: "The classic tool for capturing individual thoughts, brainstorming, and sharing ideas.", color: "bg-sticky-yellow/20" },
          ].map((tool) => (
            <div key={tool.name} className={`${tool.color} rounded-xl p-6 border`}>
              <div className="text-secondary mb-3">{tool.icon}</div>
              <h3 className="font-display font-bold text-lg">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{tool.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Instructional Content */}
      <ContentSection title="Instructional Focus">
        <div className="bg-card rounded-xl p-8 shadow-sm border">
          <p className="text-lg leading-relaxed">
            This week is all about making <strong className="marker-underline">every student's voice heard</strong>.
            Learn how to use the Photo Booth and Voice Memo widgets to go beyond text — giving students
            multiple ways to express their thinking and share their perspectives with the class.
          </p>
        </div>
      </ContentSection>

      {/* Activity */}
      <ContentSection title="This Week's Activity">
        <ActivityCard
          title="The Great Sandwich Debate"
          description="Use stamps to vote on favorite classroom lunch options! This low-stakes, fun activity lets participants practice using stamps and emotes for real-time interaction. Everyone votes, everyone's voice counts."
          stickyColor="pink"
        />
      </ContentSection>
    </WeekLayout>
  );
};

export default Week2;
