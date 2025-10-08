import { BookOpen, Trophy } from "lucide-react";
import { StudySession } from "@/data/studyData";
import { calculateSubjectStreak } from "@/utils/studyCalculations";

interface SubjectPerformanceProps {
  subjectStats: Array<{ subject: string; totalHours: number; uniqueDays: number; avgDaily: number }>;
  studyData: StudySession[];
}

const SubjectPerformance = ({ subjectStats, studyData }: SubjectPerformanceProps) => {
  const colors = ["bg-primary", "bg-success", "bg-accent", "bg-info"];
  
  const topSubject = subjectStats[0];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        Subject-wise Performance
      </h2>
      <div className="space-y-4">
        {subjectStats.map((stat, index) => {
          const streak = calculateSubjectStreak(studyData, stat.subject);
          return (
            <div key={stat.subject} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{stat.subject}</span>
                <span className="text-sm text-muted-foreground">{stat.avgDaily.toFixed(2)}h/day</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className={`${colors[index % colors.length]} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${Math.min((stat.avgDaily / 2) * 100, 100)}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="w-4 h-4" />
                <span>Longest Streak: {streak} days</span>
              </div>
            </div>
          );
        })}
      </div>
      {topSubject && (
        <div className="mt-6 p-4 bg-success/20 rounded-xl">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Top Subject
          </h3>
          <p className="text-2xl font-bold text-success-foreground">
            {topSubject.subject}: {topSubject.totalHours.toFixed(1)}h
          </p>
        </div>
      )}
    </div>
  );
};

export default SubjectPerformance;
