import React from "react";
import { useTheme } from "../../context/ThemeContext";

function ActivityItem({ item }) {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const image = item.icon || item.avatar; // Use whichever exists
  const isEmoji = typeof image === "string" && image.length <= 3;

  return (
    <div
      className="activity-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 8,
        borderRadius: 6,
        // backgroundColor: isDark ? "#334155" : "#f9fafb",
        transition: "all 0.3s ease",
      }}
    >
      <div className="item-avatar">
        {isEmoji ? (
          <span className="text-xl">{image}</span>
        ) : (
          <img
            src={image}
            alt="avatar"
            className="w-6 h-6 rounded-full object-cover"
          />
        )}
      </div>

      <div className="item-content">
        <p
          className="item-title"
          style={{ color: isDark ? "#c2c2c2ff" : "#111827" }} // title white in dark mode
        >
          {item.title}
        </p>
        <span
          className="item-time"
          style={{ color: isDark ? "#94a3b8" : "#6b7280", fontSize: 12 }}
        >
          {item.time}
        </span>
      </div>
    </div>
  );
}

export default ActivityItem;
