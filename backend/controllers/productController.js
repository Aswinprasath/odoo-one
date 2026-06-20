const db = require("../config/db");

// Create Product
exports.createProduct = (req, res) => {
  const {
    name,
    category_id,
    price,
    unit,
    tax,
    description
  } = req.body;

  db.query(
    `INSERT INTO products
    (name, category_id, price, unit, tax, description)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      name,
      category_id,
      price,
      unit,
      tax,
      description
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Product Created"
      });
    }
  );
};

// Get Products
exports.getProducts = (req, res) => {
  db.query(
    `SELECT 
      p.*,
      c.name AS category_name
     FROM products p
     LEFT JOIN categories c
     ON p.category_id = c.id`,
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};