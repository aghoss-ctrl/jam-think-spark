import altImage from "../assets/alt.jpg";
import udlImage from "../assets/udl.jpg";
import participationImage from "../assets/participation.jpg";
import anthonyPhoto from "../assets/anthony-guide.png";
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
     <div className="relative container pb-24 pt-0 md:pb-36 md:pt-10">
  <div className="max-w-3xl space-y-6">
    {/* Moved this block here for vertical alignment */}
    <div className="font-bold text-purple-600">
      <p className="text-xl md:text-2xl text-hero-foreground/80">
        View this page to know what and why you need to register for this unique community. 
        Click the Start Here tab above for how to navigate.
      </p>
    </div>

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
                <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSeVYVEbAXZddDqf6at3CLOqBghWTOCtB_jD7VFI7Ru3vK8sow/viewform?usp=dialog" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block"
>
  Register Here
</a>
              </Button>
              <Button variant="outline" size="lg" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 font-display" asChild>
                <a href="https://www.figma.com/signup" target="_blank" rel="noopener noreferrer">
                  <Sparkles className="mr-2 w-5 h-5" /> Explore FigJam Now
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

      {/* PLN Framework Section */}
      <section className="py-20 bg-card/50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display">The Framework of our PLN</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* ALT Card */}
            <div className="flex flex-col bg-background rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={altImage} alt="Adult Learning Theory" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">Adult Learning Theory (ALT)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This PLN utilizes the <strong>Self-Concept</strong> principle. Adult learners benefit from having control over their learning process, so we provide autonomous "Sandbox" zones (Knowles, 1980).
                </p>
              </div>
            </div>

            {/* UDL Card */}
            <div className="flex flex-col bg-background rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={udlImage} alt="Universal Design for Learning" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">Universal Design for Learning (UDL)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We provide <strong>Multiple Means of Representation</strong>. Information is provided through video tutorials, written guides, and interactive board examples (CAST, 2018).
                </p>
              </div>
            </div>

            {/* Participation Card */}
            <div className="flex flex-col bg-background rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={participationImage} alt="Participation Expectations" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">Participation Expectations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To get the most out of this network, participants are expected to engage with at least one peer post per week and complete the hands-on activity.
                </p>
              </div>
            </div>

          </div>
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
      {/* Meet the Guide & Expectations Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            
            {/* Bio Column */}
            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <img 
  src={anthonyPhoto} 
  alt="Anthony Hossack - Technology Integration Coach" 
  className="w-40 h-40 rounded-full shadow-lg object-cover border-4 border-violet-100 shrink-0"
/>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Meet Me — Your Guide</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hi, amazing educators! I am <strong className="text-foreground">Anthony Hossack</strong>. I am so excited to share a visual collaboration tool with you that is truly engaging to students. The tool also allows students to be creative, express themselves, and visualize their thinking.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My background is in computer science and coaching educators on technology integration with over 12 years of experience. I created <strong className="text-violet-600">Jam Think Spark</strong> to bridge the gap between "having a tool" and "using it effectively" without the usual tech-induced headache.
                  </p>
                </div>
              </div>
            </div>

            {/* Expectations Column */}
            <div className="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-500 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span> Expectations
              </h3>
              <p className="text-sm text-blue-800 mb-6 font-medium">
                In order for us to be a network that sparks, I ask for two things:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-blue-900">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold">1</div>
                  <span><strong>Weekly Check-in:</strong> Jump into the "Play Zone" once a week to try out a new strategy.</span>
                </li>
                <li className="flex gap-3 text-sm text-blue-900">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 font-bold">2</div>
                  <span><strong>Peer Connection:</strong> Leave a "heart" or quick comment on a colleague's Padlet post.</span>
                </li>
              </ul>
              <p className="mt-6 text-xs italic text-blue-700 leading-relaxed">
                A PLN only works if we’re actually networking—your voice makes this space valuable!
              </p>
            </div>

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
