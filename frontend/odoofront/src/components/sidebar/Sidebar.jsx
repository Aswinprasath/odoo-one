import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Restaurant POS</h2>

      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/pos">POS</NavLink>
        <NavLink to="/tables">Tables</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/customers">Customers</NavLink>
        <NavLink to="/kds">KDS</NavLink>
        <NavLink to="/payments">Payments</NavLink>
        <NavLink to="/coupons">Coupons</NavLink>
      </nav>
    </aside>
  );
}