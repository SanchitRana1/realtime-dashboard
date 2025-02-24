import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardCards from "./Dashcards";
import EmployeeList from "./EmployeesList";
import OffDutyEmployees from "./OffDutyEmployees";
import Attendance from "./Attendance";
import Leaves from "./Leaves";
import Organization from "./Organization";
import Tasks from "./Tasks";
import Beat from "./Beat";
import Targets from "./Targets";
import Expenses from "./Expenses";
import ClientsSites from "./ClientsSites";
import Reports from "./Reports";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { auth, signInWithPopup, signOut, provider } from "@/utils/firebase";
import { login, logout } from "@/utils/authSlice";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      sessionStorage.setItem("user", JSON.stringify(userData)); // Store in session
      dispatch(login(userData)); // Update Redux state
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout()); // Clear Redux state
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      {/* 🔹 Fixed Sidebar */}
      <div className="fixed left-0 top-0 bg-gray-900 text-gray-100 shadow-xl z-50">
        <Sidebar onSelect={setSelectedTab} />
      </div>

      {/* 🔹 Main Content (Scrolls Horizontally, Sidebar Remains Fixed) */}
      <div className="flex-1 min-h-screen overflow-x-auto pl-64 p-6">
        {/* 🔹 Header Component */}
        <Header user={user} loading={loading} onSignIn={handleGoogleSignIn} onLogout={handleLogout} />

        {/* 🔹 Page Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {selectedTab === "dashboard" ? "Realtime Dashboard" : selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </h2>

        {/* 🔹 Dashboard View */}
        {selectedTab === "dashboard" && (
          <>
            <DashboardCards />
            <div className="flex flex-wrap gap-6 justify-center">
              <EmployeeList />
              <OffDutyEmployees />
              <Attendance />
              <Leaves />
              <Organization />
              <Tasks />
              <Beat />
              <Targets />
              <Expenses />
              <ClientsSites />
              <Reports />
            </div>
          </>
        )}

        {/* 🔹 Other Sections */}
        {selectedTab === "attendance" && <Attendance />}
        {selectedTab === "leaves" && <Leaves />}
        {selectedTab === "organization" && <Organization />}
        {selectedTab === "tasks" && <Tasks />}
        {selectedTab === "beat" && <Beat />}
        {selectedTab === "targets" && <Targets />}
        {selectedTab === "expenses" && <Expenses />}
        {selectedTab === "clients" && <ClientsSites />}
        {selectedTab === "reports" && <Reports />}

        {/* 🔹 Placeholder for undefined sections */}
        {!["dashboard", "attendance", "leaves", "organization", "tasks", "beat", "targets", "expenses", "clients", "reports"].includes(selectedTab) && (
          <p className="text-gray-600 text-center mt-6 text-lg">Content for {selectedTab} coming soon...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
