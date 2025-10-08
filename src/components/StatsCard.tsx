import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: "primary" | "secondary" | "success" | "accent" | "info";
  subtitle?: string;
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/50 text-secondary-foreground",
  success: "bg-success/50 text-success-foreground",
  accent: "bg-accent/50 text-accent-foreground",
  info: "bg-info/50 text-info-foreground",
};

const StatsCard = ({ title, value, icon: Icon, color, subtitle }: StatsCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-sm text-muted-foreground mb-1">{title}</h3>
      <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default StatsCard;
