import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Lightbulb, Palette } from "lucide-react";
import heroImage from "@/assets/hero-whiteboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-hero text-hero-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Collaborative FigJam whiteboard"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
       <div className="font-bold text-purple-600 mt-[100px]">
  <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-2xl">
     View this page to know what and why you need to register for this unique community. 
    Click the Start Here tab above for how to navigate. 
  </p>
</div>
    </div>
        
        <div className="relative container py-24 md:py-36">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ditch the Slide Deck.{" "}
              <span className="marker-underline">Amplify Student Voice.</span>
            </h1>
            <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-2xl">
              A free online whiteboard space designed to foster deeper collaboration
              and build creative thinking skills.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVYVEbAXZddDqf6at3CLOqBghWTOCtB_jD7VFI7Ru3vK8sow/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Register Here <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-display" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVYVEbAXZddDqf6at3CLOqBghWTOCtB_jD7VFI7Ru3vK8sow/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  <Sparkles className="mr-2 w-5 h-5" /> Try FigJam Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating sticky notes */}
        <div className="absolute top-16 right-8 md:right-24 w-32 h-28 bg-sticky-yellow rounded-sm shadow-lg animate-float hidden lg:flex items-center justify-center p-4 text-foreground font-display text-sm font-semibold text-center">
          Collaborate!
        </div>
        <div className="absolute bottom-20 right-12 md:right-48 w-28 h-24 bg-sticky-pink rounded-sm shadow-lg animate-float-delayed hidden lg:flex items-center justify-center p-3 text-foreground font-display text-sm font-semibold text-center">
          Create!
        </div>
      </section>

      {/* Quick value props */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Real Collaboration",
                desc: "Students work together on a shared canvas in real-time — not just side by side.",
                color: "bg-sticky-yellow",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Visible Thinking",
                desc: "Stamps, stickies, and voice memos make every student's ideas heard and seen.",
                color: "bg-sticky-green",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Creative Expression",
                desc: "From diagrams to debates, FigJam turns any lesson into an engaging experience.",
                color: "bg-sticky-blue",
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.color} text-foreground`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week Overview */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            4 Weeks to FigJam Mastery
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Each week builds on the last. Start small, finish big.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { week: 1, title: "Foundations", desc: "Master the must-know tools", color: "bg-week-1", to: "/week-1" },
              { week: 2, title: "Student Voice", desc: "Stamps, emotes & feedback", color: "bg-week-2", to: "/week-2" },
              { week: 3, title: "Structure", desc: "Sections & lesson flow", color: "bg-week-3", to: "/week-3" },
              { week: 4, title: "Celebration", desc: "Share & exchange templates", color: "bg-week-4", to: "/week-4" },
            ].map((w) => (
              <Link
                key={w.week}
                to={w.to}
                className={`${w.color} rounded-xl p-6 text-primary-foreground hover:scale-105 transition-transform duration-200 shadow-lg group`}
              >
                <span className="text-sm font-display font-semibold opacity-80">Week {w.week}</span>
                <h3 className="text-2xl font-bold mt-1">{w.title}</h3>
                <p className="text-sm mt-2 opacity-80">{w.desc}</p>
                <ArrowRight className="w-5 h-5 mt-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-16 bg-hero text-hero-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-hero-foreground/80 max-w-lg mx-auto">
            Create a blank FigJam file right now and start exploring while you wait for Week 1.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="hero" size="lg" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVYVEbAXZddDqf6at3CLOqBghWTOCtB_jD7VFI7Ru3vK8sow/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Register Here
              </a>
            </Button>
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-display font-semibold" asChild>
              <a href="https://figjam.new" target="_blank" rel="noopener noreferrer">
                Open FigJam →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
