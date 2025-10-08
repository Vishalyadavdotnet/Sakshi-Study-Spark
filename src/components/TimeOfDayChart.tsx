import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface TimeOfDayChartProps {
  timeOfDay: { morning: number; afternoon: number; evening: number; night: number };
}

const TimeOfDayChart = ({ timeOfDay }: TimeOfDayChartProps) => {
  const data = {
    labels: ["Morning 🌅", "Afternoon ☀️", "Evening 🌇", "Night 🌙"],
    datasets: [
      {
        label: "Hours",
        data: [timeOfDay.morning, timeOfDay.afternoon, timeOfDay.evening, timeOfDay.night],
        backgroundColor: [
          "hsl(24 95% 85%)",
          "hsl(44 95% 90%)",
          "hsl(262 52% 76%)",
          "hsl(240 10% 60%)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 15,
          font: {
            family: "Poppins",
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.parsed}h`,
        },
      },
    },
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span>🕓</span> Time of Day Analysis
      </h2>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default TimeOfDayChart;
