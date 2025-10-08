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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyTrendProps {
  monthlyTrend: {
    lastMonth: { day: number; hours: number }[];
    thisMonth: { day: number; hours: number }[];
  };
}

const MonthlyTrend = ({ monthlyTrend }: MonthlyTrendProps) => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const lastMonthData = daysInMonth.map((day) => {
    const session = monthlyTrend.lastMonth.find((s) => s.day === parseInt(day));
    return session ? session.hours : 0;
  });

  const thisMonthData = daysInMonth.map((day) => {
    const session = monthlyTrend.thisMonth.find((s) => s.day === parseInt(day));
    return session ? session.hours : 0;
  });

  const data = {
    labels: daysInMonth,
    datasets: [
      {
        label: "Last Month",
        data: lastMonthData,
        borderColor: "hsl(240 10% 60%)",
        backgroundColor: "hsl(240 10% 60%)",
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: "This Month",
        data: thisMonthData,
        borderColor: "hsl(152 57% 70%)",
        backgroundColor: "hsl(152 57% 70%)",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${context.parsed.y}h`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value: any) => `${value}h` },
      },
      x: { title: { display: true, text: "Day of Month" } },
    },
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card card-hover animate-slide-up">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span>🗓️</span> Monthly Trend Comparison
      </h2>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyTrend;
