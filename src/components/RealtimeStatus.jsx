import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Card } from "@/components/ui/card";

const RealTimeStatus = () => {
  const chartOptions = {
    chart: { type: "line" },
    title: { text: "Attendance Analytics" },
    series: [{ name: "Punched In", data: [3, 5, 6, 7] }],
  };

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-2">Real-Time Status</h2>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Card>
  );
};

export default RealTimeStatus;
