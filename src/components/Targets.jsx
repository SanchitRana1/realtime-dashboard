import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Targets = () => {
  // 📊 Column Chart: Targets vs. Achievements
  const targetOptions = {
    chart: { type: "column" },
    title: { text: "Team Targets vs Achievements" },
    xAxis: { categories: testData.targets.map((target) => target.team) },
    yAxis: { title: { text: "Target Completion (%)" }, max: 100 },
    series: [
      {
        name: "Target",
        data: testData.targets.map((target) => target.target),
        color: "#6366F1",
      },
      {
        name: "Achieved",
        data: testData.targets.map((target) => target.achieved),
        color: "#10B981",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <HighchartsReact highcharts={Highcharts} options={targetOptions} />
    </div>
  );
};

export default Targets;
