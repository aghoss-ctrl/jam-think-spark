import { MessageCircle, Camera, Mic, ThumbsUp } from "lucide-react";
import WeekLayout from "@/components/WeekLayout";
import ContentSection from "@/components/ContentSection";
import ActivityCard from "@/components/ActivityCard";
import { Button } from "@/components/ui/button"; // Added this missing line

const Week2 = () => {
  return (
    <WeekLayout
      weekNumber={2}
      title="The Power of Student Voice"
      focus="Using Stamps, Emotes, and Stickies to capture real-time feedback and affirm student ideas."
      Week 2 is a live session in FigJam. We will all be editing the FigJam simultaneously. 
      accentClass="bg-week-2"
    >
      {/* Voice Tools */}
      <ContentSection title="Making Thinking Visible" icon={<MessageCircle className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <ThumbsUp className="w-6 h-6" />,
              name: "Stamps & Emotes",
              desc: "Quick reactions that let every student participate — vote, agree, question, or celebrate.",
              color: "bg-sticky-pink/20",
            },
            {
              icon: <Camera className="w-6 h-6" />,
              name: "Photo Booth Widget",
              desc: "Capture and share images directly on the board to make student work visible.",
              color: "bg-sticky-green/20",
            },
            {
              icon: <Mic className="w-6 h-6" />,
              name: "Voice Memo Widget",
              desc: "Record short audio clips so students can explain their thinking in their own words.",
              color: "bg-sticky-blue/20",
            },
            {
              icon: <MessageCircle className="w-6 h-6" />,
              name: "Sticky Notes",
              desc: "The classic tool for capturing individual thoughts, brainstorming, and sharing ideas.",
              color: "bg-sticky-yellow/20",
            },
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
            Learn how to use the Photo Booth and Voice Memo widgets to go beyond text — giving students multiple 
            ways to express their thinking and share their perspectives with the class.
          </p>
        </div>
      </ContentSection>

      {/* Must Know Tools Practice Section - Purple Branding */}
      <ContentSection title="Must Know Tools">
        <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-violet-900 mb-4 flex items-center justify-center md:justify-start gap-2">
                <span className="text-3xl">🗣️</span> Practice Student Voice Tools
              </h3>
              <p className="text-violet-800 text-lg mb-6">
                Ready to try out Stamps, Emotes, and Widgets? Use the button to the right to enter your Week 2 practice sandbox. 
                Remember to duplicate the board to your own account to start editing!
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Button 
                variant="default" 
                asChild 
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-xl rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <a 
                  href="https://www.figma.com/board/xJsqUtvXVycY5GUmnU7bTS/Week-2--FigJam---Making-Thinking-Visible?node-id=0-1&t=tULvRsnex52DlvwL-1" 
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

     
    </WeekLayout>
  );
};

export default Week2;
