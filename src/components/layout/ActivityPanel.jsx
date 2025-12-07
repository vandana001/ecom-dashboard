import React from "react";
import ActivityItem from "../common/Activity-Item";
import { useTheme } from "../../context/ThemeContext";

import bugIcon from "../../assets/IconSet.png";
import image2 from "../../assets/image2.png";
import image4 from "../../assets/image4.png";
import Male from "../../assets/IconSet1.png";
import Female from "../../assets/Female05.png";
import Female2 from "../../assets/IconSet3.png";
import imagemale from "../../assets/IconSet4.png";
import image5 from "../../assets/IconSet5.png";
import avatarImg from "../../assets/avatarimg.png";
import avatarImg1 from "../../assets/avatarimg1.png";
import avatarImg2 from "../../assets/avatarimg2.png";
import avatarImg3 from "../../assets/avatarimg3.png";
import avatarImg4 from "../../assets/avatarimg4.png";

function ActivityPanel() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const notifications = [
    { id: 1, type: "bug", title: "You have a bug that needs attention", time: "Just now", icon: bugIcon },
    { id: 2, type: "user", title: "New user registered", time: "59 minutes ago", icon: image2 },
    { id: 3, type: "bug", title: "You have a bug that needs attention", time: "12 hours ago", icon: bugIcon },
    { id: 4, type: "subscription", title: "Andi Lane subscribed to you", time: "Today, 11:59 AM", icon: image4 },
  ];

  const activities = [
    { id: 1, user: "You", title: "have a bug that needs attention", time: "Just now", avatar: Male },
    { id: 2, user: "Released", title: "a new version", time: "59 minutes ago", avatar: Female },
    { id: 3, user: "Submitted", title: "a bug", time: "12 hours ago", avatar: Female2 },
    { id: 4, user: "Modified", title: "A data in Page X", time: "Today, 11:59 AM", avatar: imagemale },
    { id: 5, user: "Deleted", title: "a page in Project X", time: "Feb 2, 2025", avatar: image5 },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig", online: true, avatar: avatarImg },
    { id: 2, name: "Drew Cano", online: false, avatar: avatarImg1 },
    { id: 3, name: "Orlando Diggs", online: true, avatar: avatarImg2 },
    { id: 4, name: "Andi Lane", online: false, avatar: avatarImg3 },
    { id: 5, name: "Kate Morrison", online: true, avatar: avatarImg4 },
    { id: 6, name: "Koray Okumus", online: false, avatar: avatarImg },
  ];

  return (
    <div
      className="activity-panel"
      style={{
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        color: isDark ? "#f1f5f9" : "#111827",
        border: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 16,
        transition: "all 0.3s ease",
      }}
    >
      <div className="panel-content">
        {/* Notifications Section */}
        <div className="section">
          <h3 className="section-title" style={{ color: isDark ? "#f1f5f9" : "#111827" }}>
            Notifications
          </h3>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <ActivityItem key={notif.id} item={notif} type="notification" darkMode={isDark} 
               titleStyle={{ color: isDark ? "#ffffff" : "#111827" }}/>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="section">
          <h3 className="section-title" style={{ color: isDark ? "#f1f5f9" : "#111827" }}>
            Activities
          </h3>
          <div className="activities-list">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} item={activity} type="activity" darkMode={isDark} />
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div className="section">
          <h3 className="section-title" style={{ color: isDark ? "#f1f5f9" : "#111827" }}>
            Contacts
          </h3>
          <div className="contacts-list">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="contact-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 8,
                  borderRadius: 6,
                  backgroundColor: isDark ? "#334155" : "#f9fafb",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="contact-avatar">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>

                <div className="contact-info" style={{ color: isDark ? "#f1f5f9" : "#111827" }}>
                  <p className="contact-name">{contact.name}</p>
                  <div
                    className={`status-dot ${contact.online ? "online" : "offline"}`}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: contact.online ? "#22c55e" : "#64748b",
                      marginTop: 4,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPanel;
