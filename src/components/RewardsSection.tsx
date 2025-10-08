import { Coins } from "lucide-react";

interface RewardsSectionProps {
  coins: { earned: number; target: number; remaining: number };
}

const RewardsSection = ({ coins }: RewardsSectionProps) => {
  const { earned, target, remaining } = coins;
  const progress = (earned / target) * 100;

  return (
    <div className="bg-gradient-accent rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white/80 p-3 rounded-full">
          <Coins className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Coin Rewards</h2>
          <p className="text-sm text-muted-foreground">1 hour = ₹5</p>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mb-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-3xl font-bold text-yellow-600">₹{earned}</span>
          <span className="text-muted-foreground">/ ₹{target}</span>
        </div>
        <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full transition-all duration-500 flex items-center justify-end pr-2"
            style={{ width: `${progress}%` }}
          >
            {progress > 5 && <Coins className="w-3 h-3 text-white" />}
          </div>
        </div>
      </div>
      
      <div className="bg-white/60 rounded-lg p-4">
        <p className="text-sm font-medium text-center">
          Keep going! Only <span className="font-bold text-primary">₹{remaining}</span> left to reach your goal! 💪
        </p>
      </div>
    </div>
  );
};

export default RewardsSection;
