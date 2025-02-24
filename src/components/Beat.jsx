import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Beat = () => {
  // 📈 Bar Chart: Employees Per Region
  const regionOptions = {
    chart: { type: "bar" },
    title: { text: "Employees Per Region" },
    xAxis: { categories: testData.beat.locations.map((loc) => loc.region) },
    yAxis: { title: { text: "Number of Employees" } },
    series: [
      {
        name: "Total Employees",
        data: testData.beat.locations.map((loc) => loc.employees),
        color: "#3B82F6",
      },
      {
        name: "Active Employees",
        data: testData.beat.locations.map((loc) => loc.active),
        color: "#10B981",
      },
    ],
  };

  // 📊 Pie Chart: Active vs. Inactive Beats
  const beatStatusOptions = {
    chart: { type: "pie" },
    title: { text: "Beat Activity Status" },
    series: [
      {
        name: "Beats",
        data: [
          { name: "Active Beats", y: testData.beat.status.activeBeats, color: "#4CAF50" },
          { name: "Inactive Beats", y: testData.beat.status.inactiveBeats, color: "#F44336" },
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
      {/* Beat Status Pie Chart */}
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={beatStatusOptions} />
      </div>

      {/* Employees Per Region Bar Chart */}
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={regionOptions} />
      </div>
    </div>
  );
};

export default Beat;
