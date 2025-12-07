import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import ActivityPanel from "./components/layout/ActivityPanel";
import "./App.css";

function Layout() {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const location = useLocation();
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  // Hide Activity Panel ONLY on OrderList page
  const hideActivityPanel = location.pathname === "/dashboard/OrderList";

  return (
    <div 
      className="flex h-screen overflow-hidden"
      style={{
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          onNotificationClick={() => setNotificationOpen(!notificationOpen)}
        />

        {/* Main Content */}
        <main 
          className="flex-1 overflow-y-scroll p-6"
          style={{
            backgroundColor: isDark ? '#0f172a' : '#f9fafb',
            transition: 'background-color 0.3s ease'
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard/OrderList" element={<OrderList />} />
          </Routes>
        </main>
      </div>

      {/* Conditionally Rendered */}
      {!hideActivityPanel && <ActivityPanel />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;