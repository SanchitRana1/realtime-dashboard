import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Organization = () => {
  // 📊 Pie Chart: Employee Distribution by Department
  const departmentPieChart = {
    chart: { type: "pie" },
    title: { text: "Department-wise Employee Distribution" },
    series: [
      {
        name: "Employees",
        data: testData.organization.departments.map((dept) => ({
          name: dept.name,
          y: dept.employees,
        })),
      },
    ],
  };

  // 📈 Bar Chart: Employee Count by Department
  const departmentBarChart = {
    chart: { type: "bar" },
    title: { text: "Employee Count by Department" },
    xAxis: { categories: testData.organization.departments.map((dept) => dept.name) },
    yAxis: { title: { text: "Number of Employees" } },
    series: [
      {
        name: "Employees",
        data: testData.organization.departments.map((dept) => dept.employees),
        color: "#4F46E5",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
      {/* Pie Chart - Employee Distribution */}
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={departmentPieChart} />
      </div>

      {/* Bar Chart - Employees per Department */}
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={departmentBarChart} />
      </div>
    </div>
  );
};

export default Organization;
