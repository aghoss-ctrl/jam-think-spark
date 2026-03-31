import altImage from "../assets/alt.jpg";
import udlImage from "../assets/udl.jpg";
import participationImage from "../assets/participation.jpg";
import anthonyPhoto from "../assets/anthony-guide.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Zap, Shield, ArrowRight, MessageSquare, Globe, Laptop, Heart } from "lucide-react";
import ContentSection from "@/components/ContentSection";
import { Monitor, Smartphone, MapPin, User } from "lucide-react";
import ContentSection from "@/components/ContentSection";
const StartHere = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-hero">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now Live: Spring 2026 Cohort
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-hero-foreground mb-6 animate-slide-up">
              Think & Spark <br />
              <span className="text-primary">with FigJam</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              A professional learning network for educators to master visual collaboration, streamline lesson design, and spark student engagement.
            </p>
            <div className="flex justify-center mt-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm">
                <Link to="/curriculum">View Curriculum</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Introduction Section */}
      <section className="py-12 bg-violet-50 border-b-4 border-violet-100">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 md:p-12 shadow-xl border-2 border-violet-200">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-1.5 bg-violet-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Community Action
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-violet-900 leading-tight">
                  Meet the Network
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To help us grow as a professional learning community, please introduce yourself to the network! Use the Padlet below to share your name, your role, and one specific goal for visual collaboration.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <h4 className="font-bold text-violet-800">Social Presence</h4>
                      <p className="text-sm text-muted-foreground">See who else is in the "Jam" to share relevant templates.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-bold text-violet-800">Networking</h4>
                      <p className="text-sm text-muted-foreground">Connect with educators in similar grade levels or subjects.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <Button asChild className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white px-10 py-8 text-xl rounded-2xl shadow-lg hover:scale-105 transition-all group">
                  <a href="https://padlet.com/aghoss/figjam-plc-community-hub-txqg7d1gdvisb56m" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
                    <span>Introduce Yourself</span>
                    <span className="text-xs font-normal opacity-80 group-hover:opacity-100">Open Padlet Community Hub</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
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
                <p className="text-muted-foreground">Pinch to zoom in and out on the canvas, just like zooming into a map.</p>
              </div>
              <div className="bg-sticky-blue/30 rounded-lg p-6">
                <h3 className="font-display font-bold text-lg mb-2">🖐️ Pan</h3>
                <p className="text-muted-foreground">Two-finger swipe (or click and drag on the background) to move around the board.</p>
              </div>
             
            </div>
          </div>
         <div className="mt-[30px] p-5 border-2 border-purple-600 rounded-lg bg-[#fdfaff]">
  <h3 className="text-purple-600 font-bold mt-0">🚀 Practice Zooming and Panning</h3>
  <p>
    To begin practicing these maneuvers, you will need to open a <strong>FigJam account</strong>. 
    It is a simple sign-up process using your <strong>Google account</strong>.
  </p>
  <div className="flex flex-wrap gap-4 mt-4">
    <a 
      href="https://www.figma.com/figjam/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block px-5 py-2.5 bg-purple-600 text-white no-underline rounded-md font-bold"
    >
      Sign Up for FigJam
    </a>
    <a 
      href="https://www.figma.com/board/KCGaRyQlfgjajs0lN32kvS/FigJam-Basics?node-id=4-2693&t=clv8rC8tfk9EFbHE-1" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block px-5 py-2.5 bg-purple-600 text-white no-underline rounded-md font-bold"
    >
      Practice Panning and Zooming Here
    </a>
  </div>
</div>
        </ContentSection>

        {/* Tech Requirements */}
        <ContentSection title="Tech Requirements" icon={<Monitor className="w-5 h-5" />}>
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-lg mb-4 text-secondary">✅ Supported Devices</h3>
                <ul className="space-y-3">
                  {["Chromebooks", "Laptops / Desktops", "iPads & Tablets"].map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-4 text-destructive">⚠️ Not Supported</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Smartphone className="w-5 h-5" />
                  <span>Mobile phones are not supported for these activities</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* Guide Bio */}
        <ContentSection title="Rest Assured" icon={<User className="w-5 h-5" />}>
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed mb-6">
                I believe in a <strong className="marker-underline">phased approach</strong> to learning
                new tools — we'll start small with the basics and gradually work our way up to full
                whole-class collaboration by Week 4.
              </p>
              <p className="text-muted-foreground">
                Each week is designed to build confidence before adding complexity. No one gets
                left behind, and every educator moves at a pace that works for their classroom.
              </p>
            </div>
          </div>
        </ContentSection>
      </div>
    </div>
  );
};

export default StartHere;
