import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Moon, Clock, Bell, PanelLeft, Star } from "lucide-react";

function Header({ onNotificationClick }) {
  const { mode, toggle } = useTheme();
  const isDark = mode === "dark";

  return (
    <div
      style={{
        height: 64,
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        borderBottom: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
      }}
    >
      {/* Breadcrumb / Left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: isDark ? "#94a3b8" : "#6b7280",
          fontSize: 14,
        }}
      >
        {/* Icons from first header */}
        <div className="flex items-center gap-2">
          <PanelLeft size={18} color={isDark ? "#94a3b8" : "#6b7280"} />
          <Star size={18} color={isDark ? "#94a3b8" : "#6b7280"} />
        </div>
       <Link 
  to="/" 
  style={{ color: isDark ? "#f1f5f9" : "#111827", textDecoration: 'none' }}
>
  Dashboard
</Link>
        <span>/</span>
       <Link 
  to="/dashboard/OrderList" 
  style={{ color: isDark ? "#f1f5f9" : "#111827", textDecoration: 'none' }}
>
  Default
</Link>
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Search */}
        <div
          style={{
            backgroundColor: isDark ? "#334155" : "#f3f4f6",
            borderRadius: 8,
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: 200,
            transition: "all 0.3s ease",
          }}
        >
          <SearchOutlined style={{ color: isDark ? "#94a3b8" : "#6b7280" }} />
          <Input
            placeholder="Search"
            bordered={false}
            style={{
              backgroundColor: "transparent",
              color: isDark ? "#f1f5f9" : "#111827",
              fontSize: 14,
              padding: 0,
            }}
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggle}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: isDark ? "#334155" : "#f3f4f6",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <Moon size={20} color={isDark ? "#f3f4f6" : "#64748b"} />
        </button>

        {/* Clock */}
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: isDark ? "#334155" : "#f3f4f6",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <Clock size={20} color={isDark ? "#f3f4f6" : "#64748b"} />
        </button>

        {/* Notifications */}
        <button
          onClick={onNotificationClick}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: isDark ? "#334155" : "#f3f4f6",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transition: "all 0.3s ease",
          }}
        >
          <Bell size={20} color={isDark ? "#cbd5e1" : "#64748b"} />
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              width: 8,
              height: 8,
              backgroundColor: "#ef4444",
              borderRadius: "50%",
            }}
          ></span>
        </button>

        {/* Sidebar Toggle */}
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            backgroundColor: isDark ? "#334155" : "#f3f4f6",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <PanelLeft size={20} color={isDark ? "#f3f4f6" : "#64748b"} />
        </button>
      </div>
    </div>
  );
}

export default Header;
