const db = require("../config/db");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).json(err);
        }

        res.json({
          message: "User Registered Successfully"
        });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (results.length === 0) {
        return res.status(400).json({
          message: "User not found"
        });
      }

      const user = results[0];

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid Password"
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

      res.json({
        message: "Login Successful",
        token
      });
    }
  );
};