import testData from "../utils/testData";

const EmployeeList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Employees ({testData.employees.length})</h3>
      <ul className="space-y-3">
        {testData.employees.map((employee, index) => (
          <li key={index} className="flex justify-between p-3 border-b">
            <div>
              <span className="font-medium">{employee.name}</span> <br />
              <span className="text-sm text-gray-500">{employee.attendance}</span>
            </div>
            <div className="text-sm text-gray-500">{employee.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
