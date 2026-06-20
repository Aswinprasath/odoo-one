const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Database
require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes =
    require("./routes/productRoutes");
const floorRoutes =
    require("./routes/floorRoutes");
const tableRoutes =
    require("./routes/tableRoutes");
const customerRoutes =
    require("./routes/customerRoutes");
const orderRoutes =
    require("./routes/orderRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/floors", floorRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Restaurant POS Backend Running"
    });
});

module.exports = app;

