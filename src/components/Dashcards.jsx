import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const DashboardCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 px-1 mb-6">
      {/* Real-Time Attendance Pie Chart */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md items-center w-1/3 ">
      <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: { type: "pie", height: 250 },
            title: { text: testData.realTimeAttendance.title, style: { fontSize: "14px" } },
            series: testData.realTimeAttendance.series,
            legend: { layout: "horizontal", align: "center", verticalAlign: "bottom" },
          }}
        />
      </div>

      {/* Punched-In Employees Column Chart */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md items-center w-1/3">
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: { type: "column", height: 250 },
            title: { text: testData.punchedInEmployees.title, style: { fontSize: "14px" } },
            xAxis: { categories: testData.punchedInEmployees.xAxisCategories },
            yAxis: { title: { text: "Employees" } },
            series: testData.punchedInEmployees.series,
            legend: { layout: "horizontal", align: "center", verticalAlign: "bottom" },
          }}
        />
      </div>

      {/* Staffing Strength Doughnut Chart */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md  w-1/3">
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: { type: "pie", height: 250 },
            title: { text: testData.staffingStrength.title, style: { fontSize: "14px" } },
            plotOptions: { pie: { innerSize: "50%" } },
            series: testData.staffingStrength.series,
            legend: { layout: "horizontal", align: "center", verticalAlign: "bottom" },
          }}
        />
      </div>

      {/* Weekly Attendance Line Chart */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-1/3">
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: { type: "line", height: 250 },
            title: { text: testData.teamwiseAttendance.title, style: { fontSize: "14px" } },
            xAxis: { categories: testData.teamwiseAttendance.xAxisCategories },
            yAxis: { title: { text: "Employees Present" } },
            series: testData.teamwiseAttendance.series,
            legend: { layout: "horizontal", align: "center", verticalAlign: "bottom" },
          }}
        />
      </div>
    </div>
  );
};

export default DashboardCards;
