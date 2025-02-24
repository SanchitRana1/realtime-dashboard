import { useState } from "react";
import { Home, ClipboardList, Users, Briefcase, Target, FormInput, Truck, Wallet, Globe, FileText, Menu, ChevronLeft } from "lucide-react";

const Sidebar = ({ onSelect }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleSelect = (id) => {
    setSelected(id);
    onSelect(id); // Pass selection to parent component
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#1e1e64] to-[#643ba5] text-white transition-all duration-300 ${collapsed ? "w-16" : "w-52"}`}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-xl font-semibold">Unolo</h2>}
        <button onClick={toggleSidebar} className="text-white">
          {collapsed ? <Menu className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
        </button>
      </div>

      <nav className="mt-4">
        <ul className="space-y-3">
          <NavItem icon={<Home />} label="Dashboard" id="dashboard" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<ClipboardList />} label="Attendance" id="attendance" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<Users />} label="Leaves" id="leaves" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<Briefcase />} label="Organization" id="organization" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<Target />} label="Tasks" id="tasks" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<FormInput />} label="Beat" id="beat" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<Truck />} label="Targets" id="targets" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<Wallet />} label="Expenses" id="expenses" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<Globe />} label="Clients & Sites" id="clients" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
          <NavItem icon={<FileText />} label="Reports" id="reports" collapsed={collapsed} selected={selected} onSelect={handleSelect} />
        </ul>
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, id, collapsed, selected, onSelect }) => (
  <li
    className={`flex items-center px-4 py-2 cursor-pointer rounded ${
      selected === id ? "bg-blue-500" : "hover:bg-gray-700"
    }`}
    onClick={() => onSelect(id)}
  >
    {icon}
    {!collapsed && <span className="ml-3">{label}</span>}
  </li>
);

export default Sidebar;
