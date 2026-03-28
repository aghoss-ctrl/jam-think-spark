import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function ContentSection({ title, icon, children }: ContentSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
