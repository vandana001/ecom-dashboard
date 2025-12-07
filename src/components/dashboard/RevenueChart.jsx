import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", currentWeek: 15000, previousWeek: 12000 },
  { month: "Feb", currentWeek: 16000, previousWeek: 13000 },
  { month: "Mar", currentWeek: 14000, previousWeek: 14500 },
  { month: "Apr", currentWeek: 17000, previousWeek: 15000 },
  { month: "May", currentWeek: 19000, previousWeek: 17000 },
  { month: "Jun", currentWeek: 21000, previousWeek: 19000 },
]

function RevenueChart() {
  return (
    <div className="chart-wrapper">
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: "#1a1a1a" }}></span>
          <span>Current Week $58,211</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: "#6ba3d4" }}></span>
          <span>Previous Week $68,768</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="currentWeek" stroke="#1a1a1a" strokeWidth={2} />
          <Line type="monotone" dataKey="previousWeek" stroke="#6ba3d4" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart
