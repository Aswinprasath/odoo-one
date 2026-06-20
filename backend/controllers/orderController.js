const db = require("../config/db");

// Create Order
exports.createOrder = (req, res) => {

  const {
    table_id,
    customer_id,
    subtotal,
    tax,
    discount,
    total,
    items
  } = req.body;

  db.query(
    `INSERT INTO orders
    (table_id, customer_id,
     subtotal, tax,
     discount, total)
     VALUES (?,?,?,?,?,?)`,
    [
      table_id,
      customer_id,
      subtotal,
      tax,
      discount,
      total
    ],
    (err, result) => {

      if (err)
        return res.status(500).json(err);

      const orderId = result.insertId;

      items.forEach(item => {

        db.query(
          `INSERT INTO order_items
          (order_id, product_id,
           qty, price, total)
           VALUES (?,?,?,?,?)`,
          [
            orderId,
            item.product_id,
            item.qty,
            item.price,
            item.total
          ]
        );

      });

      res.json({
        message: "Order Created",
        orderId
      });

    }
  );

};

// Get Orders
exports.getOrders = (req, res) => {

  db.query(
    "SELECT * FROM orders ORDER BY id DESC",
    (err, result) => {

      if (err)
        return res.status(500).json(err);

      res.json(result);

    }
  );

};

// Send To Kitchen
exports.sendToKitchen = (req, res) => {

  const { id } = req.params;

  db.query(
    "UPDATE orders SET status='sent_to_kitchen' WHERE id=?",
    [id],
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message: "Order Sent To Kitchen"
      });

    }
  );

};

// Preparing
exports.preparingOrder = (req, res) => {

  const { id } = req.params;

  db.query(
    "UPDATE orders SET status='preparing' WHERE id=?",
    [id],
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message: "Order Preparing"
      });

    }
  );

};

// Completed
exports.completeOrder = (req, res) => {

  const { id } = req.params;

  db.query(
    "UPDATE orders SET status='completed' WHERE id=?",
    [id],
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message: "Order Completed"
      });

    }
  );

};

exports.payOrder = (req, res) => {

  const { id } = req.params;

  const { payment_method } = req.body;

  db.query(
    `UPDATE orders
     SET payment_method=?,
         payment_status='paid',
         status='paid'
     WHERE id=?`,
    [
      payment_method,
      id
    ],
    (err) => {

      if (err)
        return res.status(500).json(err);

      res.json({
        message: "Payment Successful"
      });

    }
  );

};

exports.dashboard = (req, res) => {

  db.query(
    `
    SELECT
      COUNT(*) AS totalOrders,
      SUM(total) AS revenue,
      AVG(total) AS averageOrderValue
    FROM orders
    WHERE payment_status='paid'
    `,
    (err, result) => {

      if (err)
        return res.status(500).json(err);

      res.json(result[0]);

    }
  );

};