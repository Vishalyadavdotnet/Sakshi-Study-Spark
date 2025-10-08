import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface WeeklyTrendProps {
  weeklyTrend: { labels: string[]; lastWeek: number[]; thisWeek: number[] };
}

const WeeklyTrend = ({ weeklyTrend }: WeeklyTrendProps) => {
  // Calculate max hours to set proper Y-axis scale
  const maxHours = Math.max(
    ...weeklyTrend.thisWeek,
    ...weeklyTrend.lastWeek,
    1
  );

  const data = {
    labels: weeklyTrend.labels, // Full week: Mon → Sun
    datasets: [
      {
        label: "Last Week",
        data: weeklyTrend.lastWeek,
        borderColor: "hsl(210, 16%, 70%)", // soft gray-blue
        backgroundColor: "hsla(210, 16%, 70%, 0.1)", // transparent fill
        tension: 0.4,
        fill: true,
      },
      {
        label: "This Week",
        data: weeklyTrend.thisWeek,
        borderColor: "hsl(145, 63%, 45%)", // vibrant green
        backgroundColor: "hsla(145, 63%, 45%, 0.1)", // light transparent green fill
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { font: { family: "Poppins", size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${context.parsed.y.toFixed(1)}h`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: Math.ceil(maxHours),
        ticks: {
          stepSize: maxHours <= 7 ? 0.5 : 1,
          callback: (value: any) => `${value}h`,
        },
      },
      x: {
        title: { display: true, text: "Day of the Week" },
      },
    },
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span>📈</span> Weekly Trend Comparison
      </h2>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyTrend;
