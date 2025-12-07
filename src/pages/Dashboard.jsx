import { Row, Col } from "antd";
import { useTheme } from "../context/ThemeContext";
import MetricCard from "../components/dashboard/MetricCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import ProjectionsChart from "../components/dashboard/ProjectChart";
import RevenueMap from "../components/dashboard/Revenuemap";
import TopProducts from "../components/dashboard/TopProducts";
import TotalSales from "../components/dashboard/TotalSales";
import { metricsData } from "../data/mock-data";

function Dashboard() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const metricColors = {
    light: {
      Orders: "#F7F9FB",
      Growth: "#E5ECF6",
      Revenue: "#F7F9FB",
      Users: "#E3F5FF",
    },
    dark: {
      Orders: "#1e293b",
      Growth: "#1e293b",
      Revenue: "#1e293b",
      Users: "#1e293b",
    }
  };

  const currentColors = isDark ? metricColors.dark : metricColors.light;

  return (
    <div 
      style={{ 
        padding: 16,
        backgroundColor: isDark ? '#0f172a' : '#f9fafb',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* Page Title */}
      <h1 
        style={{ 
          fontSize: 18, 
          fontWeight: 600, 
          marginBottom: 16,
          color: isDark ? '#f1f5f9' : '#111827'
        }}
      >
        eCommerce
      </h1>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-[1fr_1fr_2fr] auto-rows-[1fr] gap-6 items-stretch">
        {/* Column 1 - Customers & Revenue */}
        <div className="flex flex-col gap-4 h-full">
          <div className="flex-1">
            <MetricCard
              title="Customers"
              value={metricsData.customers.value.toLocaleString()}
              change={metricsData.customers.change}
              trending={metricsData.customers.trending}
              color={currentColors["Users"]}
              isDark={isDark}
            />
          </div>
          <div className="flex-1">
            <MetricCard
              title="Revenue"
              value={`$${metricsData.revenue.value}`}
              change={metricsData.revenue.change}
              trending={metricsData.revenue.trending}
              color={currentColors["Orders"]}
              isDark={isDark}
            />
          </div>
        </div>

        {/* Column 2 - Orders & Growth */}
        <div className="flex flex-col gap-4 h-full">
          <div className="flex-1">
            <MetricCard
              title="Orders"
              value={metricsData.orders.value.toLocaleString()}
              change={metricsData.orders.change}
              trending={metricsData.orders.trending}
              color={currentColors["Orders"]}
              isDark={isDark}
            />
          </div>

          <div className="flex-1">
            <MetricCard
              title="Growth"
              value={`${metricsData.growth.value}%`}
              change={metricsData.growth.change}
              trending={metricsData.growth.trending}
              color={currentColors["Growth"]}
              isDark={isDark}
            />
          </div>
        </div>

        {/* Column 3 - Chart (Wider) */}
        <div className="flex flex-col gap-4 h-full">
          <ProjectionsChart isDark={isDark} />
        </div>
      </div>

      {/* ===== ROW 2 : REVENUE + MAP ===== */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {/* First Card - Wider */}
        <Col 
          xs={24} 
          lg={16} 
          className="rounded-[20px]" 
          style={{ 
            padding: '20px',
            border: isDark ? '1px solid #334155' : '1px solid #e7e7e7',
            backgroundColor: isDark ? '#1e293b' : '#ffffff',
            transition: 'all 0.3s ease'
          }}
        >
          <RevenueChart isDark={isDark} />
        </Col>

        {/* Second Card - Smaller */}
        <Col xs={24} lg={8}>
          <RevenueMap isDark={isDark} />
        </Col>
      </Row>

      {/* ===== ROW 3 : PRODUCTS + SALES ===== */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <TopProducts isDark={isDark} />
        </Col>

        <Col xs={24} lg={8}>
          <TotalSales isDark={isDark} />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;