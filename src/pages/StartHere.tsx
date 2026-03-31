import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Zap, Shield, ArrowRight, MessageSquare, Globe, Laptop, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
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
              A professional learning network for educators to master visual collaboration, 
              streamline lesson design, and spark student engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-center mt-8">
  <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm">
    <Link to="/curriculum">View Curriculum</Link>
  </Button>
</div>
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
                <Button 
                  asChild 
                  className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white px-10 py-8 text-xl rounded-2xl shadow-lg hover:scale-105 transition-all group"
                >
                  <a 
                    href="https://padlet.com/aghoss/figjam-plc-community-hub-txqg7d1gdvisb56m" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1"
                  >
                    <span>Introduce Yourself</span>
                    <span className="text-xs font-normal opacity-80 group-hover:opacity-100">Open Padlet Community Hub</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLN Framework Section */}
      <section className="py-20 bg-card/50 border-y">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Framework of our PLN</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-8 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-sticky-yellow/20 rounded-2xl flex items-center justify-center text-3xl">🧠</div>
              <h3 className="text-xl font-bold text-foreground">Adult Learning Theory (ALT)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This PLN utilizes the <strong>Self-Concept</strong> principle. Adult learners benefit from having control over their learning process, so we provide autonomous "Sandbox" zones for self-paced exploration (Knowles, 1980).
              </p>
            </div>

            <div className="space-y-4 p-8 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-sticky-green/20 rounded-2xl flex items-center justify-center text-3xl">🎨</div>
              <h3 className="text-xl font-bold text-foreground">Universal Design for Learning (UDL)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We provide <strong>Multiple Means of Representation</strong>. Information is provided through video tutorials, written guides, and interactive board examples to meet diverse learner needs (CAST, 2018).
              </p>
            </div>

            <div className="space-y-4 p-8 bg-background rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-sticky-blue/20 rounded-2xl flex items-center justify-center text-3xl">🤝</div>
              <h3 className="text-xl font-bold text-foreground">Participation Expectations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To get the most out of this network, participants are expected to engage with at least one peer post per week and complete the hands-on activity in the FigJam board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Collaboration, Instant Engagement</h2>
            <p className="text-muted-foreground text-lg">
              Move beyond static presentations. Create active, collaborative learning experiences 
              where every student has a seat at the table.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Inclusive Participation", description: "Tools like stamps and emotes give every student a voice, regardless of confidence level." },
              { icon: <Zap className="w-6 h-6" />, title: "Real-time Feedback", description: "See student thinking as it happens and provide instant support and redirection." },
              { icon: <Shield className="w-6 h-6" />, title: "Classroom Ready", description: "Designed for education with features that keep the board organized and students on track." },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week Navigation */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Your 4-Week Journey</h2>
            <p className="text-muted-foreground">Master FigJam step-by-step through our structured curriculum.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, title: "Foundations", desc: "Master the basic toolset", color: "bg-week-1" },
              { num: 2, title: "Student Voice", desc: "Capture real-time feedback", color: "bg-week-2" },
              { num: 3, title: "Facilitation", desc: "Manage the digital classroom", color: "bg-week-3" },
              { num: 4, title: "Lesson Design", desc: "Build your first major board", color: "bg-week-4" },
            ].map((week) => (
              <Link 
                key={week.num} 
                to={`/week/${week.num}`}
                className="group relative p-8 rounded-2xl bg-background border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-10 transition-transform group-hover:scale-110 ${week.color}`}></div>
                <span className="text-sm font-bold text-primary mb-2 block">Week {week.num}</span>
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <p className="text-sm text-muted-foreground">{week.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="py-16 bg-hero text-hero-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Spark Engagement?</h2>
          <Button size="lg" className="rounded-full px-12 h-14 text-lg bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
            <Link to="/week/1">Enter the Hub</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
