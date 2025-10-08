import { Award, Lock, Trophy } from "lucide-react";

interface BadgesSectionProps {
  badges: string[];
}

const BadgesSection = ({ badges }: BadgesSectionProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Award className="w-5 h-5 text-primary" />
        Badges & Achievements
      </h2>
      
      {badges.length === 0 ? (
        <div className="bg-muted/50 rounded-xl p-6 text-center">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground mb-2">No badge unlocked yet!</p>
          <p className="text-sm font-medium">Keep going! Every hour counts. 🌟</p>
        </div>
      ) : (
        <div className="space-y-3">
          {badges.map((badge) => (
            <div key={badge} className="bg-primary/10 rounded-xl p-4 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              <span className="font-semibold text-primary">{badge}</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 p-4 bg-info/30 rounded-xl border border-info/30">
        <p className="text-center italic text-sm">
          "Focus today, shine tomorrow."
        </p>
      </div>
    </div>
  );
};

export default BadgesSection;
