import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import POS from "../pages/POS";
import Tables from "../pages/Tables";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import KDS from "../pages/KDS";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/kds" element={<KDS />} />
      </Routes>
    </MainLayout>
  );
}