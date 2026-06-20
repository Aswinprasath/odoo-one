const db = require("../config/db");

exports.createFloor = (req, res) => {
  const { name } = req.body;

  db.query(
    "INSERT INTO floors(name) VALUES(?)",
    [name],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Floor Created"
      });
    }
  );
};

exports.getFloors = (req, res) => {
  db.query(
    "SELECT * FROM floors",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
};