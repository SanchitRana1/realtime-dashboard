import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Leaves = () => {
  // 📈 Bar Chart for Leave Requests by Employee
  const leaveOptions = {
    chart: { type: "bar" },
    title: { text: "Leave Requests Overview" },
    xAxis: { categories: testData.leaves.map((leave) => leave.name) },
    yAxis: { title: { text: "Leave Status" } },
    series: [
      {
        name: "Approved",
        data: testData.leaves.map((leave) => (leave.status === "Approved" ? 1 : 0)),
        color: "#4CAF50",
      },
      {
        name: "Pending",
        data: testData.leaves.map((leave) => (leave.status === "Pending" ? 1 : 0)),
        color: "#FFC107",
      },
      {
        name: "Rejected",
        data: testData.leaves.map((leave) => (leave.status === "Rejected" ? 1 : 0)),
        color: "#F44336",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <HighchartsReact highcharts={Highcharts} options={leaveOptions} />
    </div>
  );
};

export default Leaves;
