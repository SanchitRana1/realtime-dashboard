import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Attendance = () => {
  // 📊 Pie Chart for Overall Attendance Summary
  const summaryOptions = {
    chart: { type: "pie" },
    title: { text: testData.realTimeAttendance.title },
    series: testData.realTimeAttendance.series,
  };

  // 📈 Column Chart for Team-Wise Attendance
  const teamOptions = {
    chart: { type: "column" },
    title: { text: testData.teamwiseAttendance.title },
    xAxis: { categories: testData.teamwiseAttendance.xAxisCategories },
    yAxis: { title: { text: "Number of Employees" } },
    series: testData.teamwiseAttendance.series,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
      {/* Attendance Overview Pie Chart */}
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={summaryOptions} />
      </div>

      {/* Team-Wise Attendance Column Chart */}
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={teamOptions} />
      </div>
    </div>
  );
};

export default Attendance;
