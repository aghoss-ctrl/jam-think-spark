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
                <p className="text-muted-foreground">Pinch to zoom in and out on the canvas, just like zooming into a map.</p>
              </div>
              <div className="bg-sticky-blue/30 rounded-lg p-6">
                <h3 className="font-display font-bold text-lg mb-2">🖐️ Pan</h3>
                <p className="text-muted-foreground">Two-finger swipe (or click and drag on the background) to move around the board.</p>
              </div>
             
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
        <ContentSection title="Your Guide" icon={<User className="w-5 h-5" />}>
          <div className="bg-card rounded-xl p-8 shadow-sm border">
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed mb-6">
                Welcome! I believe in a <strong className="marker-underline">phased approach</strong> to learning
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
