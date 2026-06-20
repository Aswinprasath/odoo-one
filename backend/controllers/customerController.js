const db = require("../config/db");

// Create Customer
exports.createCustomer = (req, res) => {
  const { name, email, phone } = req.body;

  db.query(
    "INSERT INTO customers(name,email,phone) VALUES(?,?,?)",
    [name, email, phone],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Customer Created"
      });
    }
  );
};

// Get Customers
exports.getCustomers = (req, res) => {
  db.query(
    "SELECT * FROM customers",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};