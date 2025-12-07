function MetricCard({ title, value, change, trending, color }) {
  const isPositive = trending === "up";

  return (
    <div
      className={`metric-card ${isPositive ? "positive" : "negative"}`}
      style={{ backgroundColor: color }}
    >
      <div className="metric-header">
        <h3>{title}</h3>
      </div>

      <div className="metric-value">{value}</div>

      <div className={`metric-change ${isPositive ? "positive" : "negative"}`}>
        {isPositive ? "↗" : "↘"} {change}
      </div>
    </div>
  );
}

export default MetricCard;
