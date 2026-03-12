let orders = [];

// GET all orders
const getOrders = (req, res) => {
  res.json(orders);
};

// POST create order
const createOrder = (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    productId: req.body.productId,
    quantity: req.body.quantity
  };

  orders.push(newOrder);

  res.json(newOrder);
};

module.exports = {
  getOrders,
  createOrder
};