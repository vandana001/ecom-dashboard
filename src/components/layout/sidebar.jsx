import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  User,
  Building2,
  FileText,
  Share2,
} from "lucide-react";
import profile from "../../assets/profile.png";
import { useTheme } from "../../context/ThemeContext";

const { Sider } = Layout;

const Sidebar = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const navigate = useNavigate();
  const location = useLocation();

  // Get selected keys based on current location
  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path.includes("/dashboard/OrderList")) return ["default-item"];
    return [];
  };

  // Dynamic hover & text classes
  const hoverClasses = isDark
    ? "text-sm text-gray-200 hover:bg-gray-700 hover:border-l hover:border-l-white rounded-md"
    : "text-sm text-gray-700 hover:bg-gray-50 hover:border-l hover:border-l-black rounded-md";

  return (
    <Sider
      width={240}
      style={{
        background: isDark ? "#1f2937" : "#ffffff",
        height: "100vh",
        borderRight: isDark ? "1px solid #334155" : "1px solid #f0f0f0",
        transition: "all 0.3s ease",
      }}
    >
      {/* Profile Section */}
      <div
        className="flex items-center gap-3 px-4 py-5"
        style={{ padding: "8px" }}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className={isDark ? "text-gray-200" : "text-gray-900"}>
          ByeWind
        </span>
      </div>

      {/* FAVORITES + RECENTLY Header */}
      <div className="px-3 py-4">
        <div
          className="flex justify-around mb-2 px-1"
          style={{ marginTop: "20px" }}
        >
          <span
            className={`text-xs font-medium tracking-wide ${
              isDark ? "text-gray-400" : "text-gray-400"
            }`}
          >
            FAVORITES
          </span>
          <span
            className={`text-xs font-medium tracking-wide ${
              isDark ? "text-gray-500" : "text-gray-300"
            }`}
          >
            RECENTLY
          </span>
        </div>

        {/* FAVORITES Menu Items */}
        <Menu
  mode="inline"
  selectable={false}
  style={{
    border: "none",
    backgroundColor: isDark ? "#1f2937" : "#ffffff", // background
  }}
  className={isDark ? "ant-menu-dark-custom" : ""} // optional class
>
  <Menu.Item
    key="overview"
    className={hoverClasses}
    style={{ color: isDark ? "#e5e7eb" : "#1f2937" }} // override text color
  >
    Overview
  </Menu.Item>
  <Menu.Item
    key="projects"
    className={hoverClasses}
    style={{ color: isDark ? "#e5e7eb" : "#1f2937" }}
  >
    Projects
  </Menu.Item>
</Menu>

      </div>

      {/* Main Menu */}
      <Menu
        mode="inline"
        defaultOpenKeys={["dashboards", "userProfile"]}
        selectedKeys={getSelectedKeys()}
        style={{ border: "none", backgroundColor: isDark ? "#1f2937" : "#ffffff" }}
        theme={isDark ? "dark" : "light"}
      >
        {/* DASHBOARDS Section */}
        <Menu.ItemGroup
          key="dashboards"
          title={<span className={isDark ? "text-gray-200" : "text-gray-700"}>Dashboards</span>}
        >
          <Menu.SubMenu
            key="default"
            icon={<LayoutDashboard className="w-4 h-4" />}
            title="Default"
            className={hoverClasses}
          >
            <Menu.Item
              key="default-item"
              className={hoverClasses}
              onClick={() => navigate("/dashboard/OrderList")}
            >
              Order List
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="ecommerce"
            icon={<ShoppingCart className="w-4 h-4" />}
            title="eCommerce"
            className={hoverClasses}
          >
            <Menu.Item key="ecommerce-item" className={hoverClasses}>
              eCommerce
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="projects"
            icon={<FolderKanban className="w-4 h-4" />}
            title="Projects"
            className={hoverClasses}
          >
            <Menu.Item key="projects-item" className={hoverClasses}>
              Projects
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="courses"
            icon={<GraduationCap className="w-4 h-4" />}
            title="Online Courses"
            className={hoverClasses}
          >
            <Menu.Item key="courses-item" className={hoverClasses}>
              Online Courses
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.ItemGroup>

        {/* USER PROFILE Section */}
        <Menu.ItemGroup
          key="pages"
          title={<span className={isDark ? "text-gray-200" : "text-gray-700"}>Pages</span>}
        >
          <Menu.SubMenu
            key="userProfile"
            title="User Profile"
            icon={<User className="w-4 h-4" />}
            className={hoverClasses}
          >
            <Menu.Item key="overview" className={hoverClasses}>
              Overview
            </Menu.Item>
            <Menu.Item key="projects" className={hoverClasses}>
              Projects
            </Menu.Item>
            <Menu.Item key="campaigns" className={hoverClasses}>
              Campaigns
            </Menu.Item>
            <Menu.Item key="documents" className={hoverClasses}>
              Documents
            </Menu.Item>
            <Menu.Item key="followers" className={hoverClasses}>
              Followers
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.ItemGroup>

        {/* Other Standalone Pages */}
        <Menu.Item
          key="account"
          icon={<Building2 className="w-4 h-4" />}
          className={hoverClasses}
        >
          Account
        </Menu.Item>
        <Menu.Item
          key="corporate"
          icon={<Building2 className="w-4 h-4" />}
          className={hoverClasses}
        >
          Corporate
        </Menu.Item>
        <Menu.Item
          key="blog"
          icon={<FileText className="w-4 h-4" />}
          className={hoverClasses}
        >
          Blog
        </Menu.Item>
        <Menu.Item
          key="social"
          icon={<Share2 className="w-4 h-4" />}
          className={hoverClasses}
        >
          Social
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
