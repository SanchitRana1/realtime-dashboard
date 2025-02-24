const testData = {
  cards: [
    { label: "Real Time Status", value: "9 All Employees" },
    { label: "Punched In (Inactive) Employees", value: "3" },
    { label: "Staffing Strength", value: "80 / 100" },
    { label: "Teamwise Attendance", value: "Various Counts" }
  ],

  employees: [
    { name: "Kumar Viswas", attendance: "Never Marked Attendance", location: "NA" },
    { name: "Mayur Tyagi", attendance: "Punched In Today at 5:14 PM", location: "Sector 54, Gurgaon" },
    { name: "Mohan Bishnoi", attendance: "Punched Out 19-12-2024", location: "Sector 49, Gurgaon" },
    { name: "OM BHAGWAN", attendance: "Punched In Today at 4:27 PM", location: "Sector 62, Noida" },
    { name: "Rahul Singh", attendance: "Never Marked Attendance", location: "Sector 35, Noida" }
  ],

  offDuty: [
    { name: "Rahul Singh", team: "default", status: "Weekly Off" }
  ],

  attendance: {
    summary: {
      totalEmployees: 9,
      punchedIn: 3,
      punchedOut: 6
    },
    breakdown: [
      { team: "Team A", present: 2, absent: 3 },
      { team: "Team B", present: 4, absent: 2 },
      { team: "Team C", present: 1, absent: 4 }
    ]
  },

  leaves: [
    { name: "Amit Sharma", type: "Sick Leave", date: "2024-02-23", status: "Approved" },
    { name: "Neha Gupta", type: "Casual Leave", date: "2024-02-22", status: "Pending" },
    { name: "Rahul Kumar", type: "Annual Leave", date: "2024-02-20", status: "Rejected" }
  ],
  
  leaveStatusCounts: {
    approved: 1,
    pending: 1,
    rejected: 1
  },

  organization: {
    departments: [
      { name: "HR", employees: 5 },
      { name: "Tech", employees: 20 },
      { name: "Sales", employees: 15 },
      { name: "Operations", employees: 10 }
    ],
    hierarchy: [
      { name: "CEO", reportsTo: null },
      { name: "VP Sales", reportsTo: "CEO" },
      { name: "VP Tech", reportsTo: "CEO" },
      { name: "HR Head", reportsTo: "CEO" }
    ]
  },

  tasks: [
    { title: "Client Meeting", assignedTo: "Neha Gupta", dueDate: "2024-02-24", status: "Pending" },
    { title: "Project Review", assignedTo: "Mayur Tyagi", dueDate: "2024-02-25", status: "In Progress" },
    { title: "HR Training", assignedTo: "Rahul Singh", dueDate: "2024-02-26", status: "Completed" }
  ],
  
  taskStatusCounts: {
    notStarted: 0,
    inProgress: 1,
    completed: 1,
    pending: 1
  },

  tasksPerEmployee: {
    "Neha Gupta": 1,
    "Mayur Tyagi": 1,
    "Rahul Singh": 1
  },

  beat: {
    locations: [
      { region: "Delhi", employees: 5, active: 3 },
      { region: "Gurgaon", employees: 4, active: 2 },
      { region: "Noida", employees: 3, active: 1 }
    ],
    status: {
      activeBeats: 4,
      inactiveBeats: 2
    }
  },

  targets: [
    { team: "Sales", target: 100, achieved: 75 },
    { team: "Tech", target: 50, achieved: 40 },
    { team: "HR", target: 30, achieved: 25 }
  ],

  expenses: {
    total: "₹5,00,000",
    categories: [
      { name: "Travel", amount: "₹1,50,000" },
      { name: "Salaries", amount: "₹3,00,000" },
      { name: "Office Supplies", amount: "₹50,000" }
    ]
  },

  clientsSites: [
    { client: "ABC Corp", site: "Gurgaon", manager: "Neha Gupta" },
    { client: "XYZ Ltd", site: "Noida", manager: "Rahul Singh" },
    { client: "LMN Pvt Ltd", site: "Delhi", manager: "Mayur Tyagi" }
  ],

  reports: [
    { title: "Monthly Attendance Report", date: "2024-02-20", generatedBy: "Admin" },
    { title: "Expense Summary", date: "2024-02-18", generatedBy: "Finance" },
    { title: "Performance Review", date: "2024-02-15", generatedBy: "HR" }
  ],

  realTimeAttendance: {
    title: "Real Time Attendance",
    type: "pie",
    series: [
      {
        name: "Employees",
        data: [
          { name: "Punched In", y: 3, color: "#4CAF50" },
          { name: "Punched Out", y: 6, color: "#F44336" }
        ]
      }
    ]
  },

  punchedInEmployees: {
    title: "Punched-In Employees by Team",
    type: "column",
    xAxisCategories: ["Team A", "Team B", "Team C", "Team D"],
    series: [
      {
        name: "Punched In",
        data: [2, 4, 1, 3],
        color: "#1E88E5"
      }
    ]
  },

  staffingStrength: {
    title: "Staffing Strength",
    type: "pie",
    plotOptions: {
      pie: { innerSize: "60%" }
    },
    series: [
      {
        name: "Strength",
        data: [
          { name: "Filled", y: 80, color: "#00897B" },
          { name: "Vacant", y: 20, color: "#FF9800" }
        ]
      }
    ]
  },

  teamwiseAttendance: {
    title: "Weekly Attendance Trends",
    type: "line",
    xAxisCategories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Attendance",
        data: [5, 6, 7, 8, 9],
        color: "#5E35B1"
      }
    ]
  }
};

export default testData;
