import "./Dashboard.css";

export default function Dashboard() {
  const stats = [
    {
      title: "Today's Sales",
      value: "₹ 24,500",
      icon: "💰",
    },
    {
      title: "Orders",
      value: "126",
      icon: "📦",
    },
    {
      title: "Active Tables",
      value: "12",
      icon: "🍽️",
    },
    {
      title: "Customers",
      value: "84",
      icon: "👥",
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="stat-card"
          >
            <div className="stat-icon">
              {stat.icon}
            </div>

            <h3>{stat.title}</h3>

            <h2>{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <div className="recent-orders">
          <h2>Recent Orders</h2>

          <ul>
            <li>#1001 - ₹899</li>
            <li>#1002 - ₹499</li>
            <li>#1003 - ₹299</li>
            <li>#1004 - ₹1299</li>
          </ul>
        </div>

        <div className="quick-summary">
          <h2>Restaurant Status</h2>

          <p>🟢 Open</p>
          <p>🍽️ Tables Occupied: 7</p>
          <p>📦 Orders In Kitchen: 5</p>
          <p>👨‍🍳 Active Staff: 8</p>
        </div>
      </div>
    </div>
  );
}