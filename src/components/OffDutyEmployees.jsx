import testData from "../utils/testData";

const OffDutyEmployees = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Off Duty Employees ({testData.offDuty.length})</h3>
      <ul className="space-y-3">
        {testData.offDuty.map((employee, index) => (
          <li key={index} className="flex justify-between p-3 border-b">
            <div>
              <span className="font-medium">{employee.name}</span> <br />
              <span className="text-sm text-gray-500">{employee.team}</span>
            </div>
            <div className="text-sm text-gray-500">{employee.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffDutyEmployees;
