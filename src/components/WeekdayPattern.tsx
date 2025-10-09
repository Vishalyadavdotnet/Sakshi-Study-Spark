import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface WeekdayPatternProps {
  weekdayPattern: number[];
  weekdayVsWeekend: { weekdays: number; weekend: number };
}

const WeekdayPattern = ({ weekdayPattern, weekdayVsWeekend }: WeekdayPatternProps) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Study Hours",
        data: weekdayPattern,
        backgroundColor: [
          "hsl(262 52% 86%)",
          "hsl(262 52% 76%)",
          "hsl(262 52% 66%)",
          "hsl(262 52% 76%)",
          "hsl(262 52% 86%)",
          "hsl(173 58% 85%)",
          "hsl(173 58% 85%)",
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y}h`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `${value}h`,
        },
      },
    },
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span>📅</span> Weekday Pattern
      </h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-primary/10 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-1">Weekdays</p>
          <p className="text-2xl font-bold text-primary">{weekdayVsWeekend.weekdays.toFixed(1)}h</p>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-1">Weekend</p>
          <p className="text-2xl font-bold text-secondary-foreground">{weekdayVsWeekend.weekend.toFixed(1)}h</p>
        </div>
      </div>
    </div>
  );
};

export default WeekdayPattern;
