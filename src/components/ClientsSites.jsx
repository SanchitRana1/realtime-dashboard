import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

// Count the number of clients per manager
const managerClientCount = {};
testData.clientsSites.forEach((client) => {
  if (managerClientCount[client.manager]) {
    managerClientCount[client.manager] += 1;
  } else {
    managerClientCount[client.manager] = 1;
  }
});

const ClientsSites = () => {
  // 📈 Bar Chart: Clients Managed per Manager
  const clientsPerManagerOptions = {
    chart: { type: "bar" },
    title: { text: "Clients Managed Per Manager" },
    xAxis: { categories: Object.keys(managerClientCount) },
    yAxis: { title: { text: "Number of Clients" } },
    series: [
      {
        name: "Clients",
        data: Object.values(managerClientCount),
        color: "#6366F1",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <HighchartsReact highcharts={Highcharts} options={clientsPerManagerOptions} />
    </div>
  );
};

export default ClientsSites;
