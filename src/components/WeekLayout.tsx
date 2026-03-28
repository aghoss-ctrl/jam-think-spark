import { ReactNode } from "react";

interface WeekLayoutProps {
  weekNumber: number;
  title: string;
  focus: string;
  accentClass: string;
  children: ReactNode;
}

export default function WeekLayout({ weekNumber, title, focus, accentClass, children }: WeekLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Week Header */}
      <section className={`${accentClass} py-20`}>
        <div className="container">
          <span className="inline-block px-4 py-1 rounded-full bg-card/20 text-primary-foreground font-display text-sm font-semibold mb-4">
            Week {weekNumber}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">{title}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">{focus}</p>
        </div>
      </section>

      {/* Content */}
      <div className="container py-16 space-y-16">
        {children}
      </div>
    </div>
  );
}
