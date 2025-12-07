import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Direct", value: 38.6, color: "#6ba3d4" },
  { name: "Affiliate", value: 15, color: "#b3d9ff" },
  { name: "Sponsored", value: 20, color: "#7bb8e8" },
  { name: "E-mail", value: 10, color: "#5fa3d0" },
]

function TotalSales() {
  return (
    <div className="total-sales rounded-[20px] border border-[#e7e7e7] bg-white" style={{ padding: '20px' }}>
      <h3>Total Sales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TotalSales
