import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import testData from "../utils/testData";

const Expenses = () => {
  // 📊 Pie Chart: Expense Breakdown
  const expenseOptions = {
    chart: { type: "pie" },
    title: { text: "Expense Breakdown" },
    series: [
      {
        name: "Expenses",
        data: testData.expenses.categories.map((expense) => ({
          name: expense.name,
          y: parseFloat(expense.amount.replace("₹", "").replace(",", "")), // Convert string to number
        })),
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Total Expenses: {testData.expenses.total}</h3>
      <HighchartsReact highcharts={Highcharts} options={expenseOptions} />
    </div>
  );
};

export default Expenses;
