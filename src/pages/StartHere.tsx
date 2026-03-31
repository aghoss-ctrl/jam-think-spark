import { Monitor, Smartphone, MapPin, User } from "lucide-react";
import ContentSection from "@/components/ContentSection";

const StartHere = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container">
          <span className="inline-block px-4 py-1 rounded-full bg-card/20 text-secondary-foreground font-display text-sm font-semibold mb-4">
            Start Here
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
            The Navigator
          </h1>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl">
            Everything you need to know before diving into FigJam.
          </p>
        </div>
      </section>

      <div className="container py-16 space-y-16">
        {/* Navigation Guide */}
        <ContentSection title="Navigating FigJam" icon={<MapPin className="w-5 h-5" />}>
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <p className="text-lg leading-relaxed mb-6">
              FigJam navigation works just like <strong>Google Maps</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sticky-yellow/30 rounded-lg p-6">
                <h3 className="font-display font-bold text-lg mb-2">🔍 Zoom</h3>
                <p className="text-muted-foreground">
                  Pinch to zoom in and out on the canvas, just like zooming into a map.
                </p>
              </div>
              <div className="bg-sticky-blue/30 rounded-lg p-6">
                <h3 className="font-display font-bold text-lg mb-2">🖐️ Pan</h3>
                <p className="text-muted-foreground">
                  Two-finger swipe (or click and drag on the background) to move around the board.
                </p>
              </div>
            </div>

            {/* Practice Section */}
            <div className="mt-[30px] p-5 border-2 border-purple-600 rounded-lg bg-[#fdfaff]">
              <h3 className="text-purple-600 font-bold mt-0">🚀 Practice Zooming and Panning</h3>
              <p>
                To begin practicing these maneuvers, you will need to open a <strong>FigJam account</strong>. 
                It is a simple sign-up process using your <strong>Google account</strong>.
              </p>
              <a 
                href="https://www.figma.com/figjam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-purple-600 text-white no-underline rounded-md font-bold mt-4"
              >
                Sign Up for FigJam
              </a>
            </div>
          </div>
        </ContentSection>
      </div>
    </div>
  );
};

export default StartHere;
