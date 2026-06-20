import { NavLink } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>🍽 Restaurant POS</h2>

        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/pos">POS</NavLink>
          <NavLink to="/tables">Tables</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/customers">Customers</NavLink>
          <NavLink to="/kds">KDS</NavLink>
        </nav>
      </aside>

      <div className="main-section">
        <header className="header">
          <h3>POS Terminal</h3>
          <div>Cashier • Admin</div>
        </header>

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
}