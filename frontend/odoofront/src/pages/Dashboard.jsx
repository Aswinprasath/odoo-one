import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    api.get("/orders/dashboard/stats")
      .then((res) => {
        setStats(res.data);
      });

  }, []);

  return (
    <div>
      <h2>Total Orders: {stats.totalOrders}</h2>
      <h2>Revenue: ₹{stats.revenue}</h2>
      <h2>Average: ₹{stats.averageOrderValue}</h2>
    </div>
  );
}

export default Dashboard;