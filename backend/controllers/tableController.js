const db = require("../config/db");

exports.createTable = (req, res) => {
  const {
    floor_id,
    table_number,
    seats
  } = req.body;

  db.query(
    `INSERT INTO restaurant_tables
    (floor_id, table_number, seats)
    VALUES (?, ?, ?)`,
    [
      floor_id,
      table_number,
      seats
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Table Created"
      });
    }
  );
};

exports.getTables = (req, res) => {
  db.query(
    `SELECT
      t.*,
      f.name AS floor_name
     FROM restaurant_tables t
     LEFT JOIN floors f
     ON t.floor_id = f.id`,
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};