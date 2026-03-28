interface ActivityCardProps {
  title: string;
  description: string;
  stickyColor?: "yellow" | "pink" | "green" | "blue";
}

const colorMap = {
  yellow: "bg-sticky-yellow",
  pink: "bg-sticky-pink",
  green: "bg-sticky-green",
  blue: "bg-sticky-blue",
};

export default function ActivityCard({ title, description, stickyColor = "yellow" }: ActivityCardProps) {
  return (
    <div className={`${colorMap[stickyColor]} sticky-card text-foreground`}>
      <h3 className="font-display font-bold text-lg mb-2">🎯 {title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
