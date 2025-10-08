import { Clock, User } from "lucide-react";

interface StudentInfoProps {
  todayHours: number;
}

const StudentInfo = ({ todayHours }: StudentInfoProps) => {
  return (
    <div className="bg-gradient-primary text-white rounded-3xl p-8 shadow-card animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">Sakshi Yadav</h1>
            <p className="text-white/80 text-sm">Keep up the great work! 🌟</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3">
          <Clock className="w-6 h-6" />
          <div>
            <p className="text-sm text-white/80">Today's Study Time</p>
            <p className="text-2xl font-bold">{todayHours.toFixed(1)} hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
