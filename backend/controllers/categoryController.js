const db = require("../config/db");

// Create Category
exports.createCategory = (req, res) => {
  const { name, color } = req.body;

  db.query(
    "INSERT INTO categories (name,color) VALUES (?,?)",
    [name, color],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Category Created"
      });
    }
  );
};

// Get Categories
exports.getCategories = (req, res) => {
  db.query(
    "SELECT * FROM categories",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};