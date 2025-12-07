function StatCard({ title, value, change, positive }) {
  return (
    <div className={`stat-card ${positive ? "positive" : "negative"}`}>
      <div className="stat-header">
        <h4>{title}</h4>
      </div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${positive ? "positive" : "negative"}`}>
        {positive ? "▲" : "▼"} {change}
      </div>
    </div>
  )
}

export default StatCard
