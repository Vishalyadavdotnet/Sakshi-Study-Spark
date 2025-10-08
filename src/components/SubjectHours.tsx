import { BookOpen } from "lucide-react";

interface SubjectHoursProps {
  subjectStats: Array<{ subject: string; totalHours: number; uniqueDays: number; avgDaily: number }>;
}

const SubjectHours = ({ subjectStats }: SubjectHoursProps) => {
  const emojis = ["📚", "🔬", "🎨", "💻", "📐", "🌍", "📖"];
  const colors = ["bg-primary", "bg-success", "bg-accent", "bg-info"];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        Subject-wise Hours
      </h2>
      <div className="space-y-3">
        {subjectStats.map((stat, index) => (
          <div
            key={stat.subject}
            className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{emojis[index % emojis.length]}</span>
              <span className="font-medium">{stat.subject}</span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">{stat.totalHours.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground">hours</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectHours;
