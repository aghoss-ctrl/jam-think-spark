import { ReactNode } from "react";

interface ContentCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ContentCard({ icon, title, children, className }: ContentCardProps) {
  return (
    <div className={`rounded-3xl p-8 bg-white border-2 border-violet-100 shadow-lg ${className}`}>
      <div className="flex items-center gap-3 mb-4 text-purple-600">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}
