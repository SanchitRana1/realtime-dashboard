import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

// Count tasks based on their status
const taskStatusCounts = {
  "Not Started": testData.tasks.filter((task) => task.status === "Not Started").length,
  "In Progress": testData.tasks.filter((task) => task.status === "In Progress").length,
  Completed: testData.tasks.filter((task) => task.status === "Completed").length,
  Pending: testData.tasks.filter((task) => task.status === "Pending").length,
};

const Tasks = () => {
  // 🍩 Donut Chart: Task Status Breakdown
  const taskStatusOptions = {
    chart: { type: "pie" },
    title: { text: "Task Status Breakdown" },
    plotOptions: {
      pie: {
        innerSize: "60%", // Creates the donut effect
        dataLabels: { enabled: true },
      },
    },
    series: [
      {
        name: "Tasks",
        data: Object.entries(taskStatusCounts).map(([status, count]) => ({
          name: status,
          y: count,
        })),
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <HighchartsReact highcharts={Highcharts} options={taskStatusOptions} />
    </div>
  );
};

export default Tasks;
