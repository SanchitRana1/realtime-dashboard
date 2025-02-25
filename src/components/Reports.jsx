import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Reports = () => {
  // 📊 Timeline Chart: Reports Generated Over Time
  const reportOptions = {
    chart: { type: "scatter" },
    title: { text: "Generated Reports Over Time" },
    xAxis: {
      categories: testData.reports.map((report) => report.date), // Dates as X-axis categories
      title: { text: "Report Date" },
    },
    yAxis: {
      categories: testData.reports.map((report) => report.generatedBy), // Who generated the report
      title: { text: "Generated By" },
    },
    series: [
      {
        name: "Reports",
        data: testData.reports.map((report, index) => [index, index]), // Maps each report to its index
        color: "#F59E0B",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <HighchartsReact highcharts={Highcharts} options={reportOptions} />
    </div>
  );
};

export default Reports;
