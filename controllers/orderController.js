const { products } = require("./productController");
let orders = [];

// GET all orders
const getOrders = (req, res) => {
  res.json(orders);
};

// CREATE order
const createOrder = (req, res) => {

  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity);

  // find product
  const product = products.find(p => p.id === productId);

  // check product exists
  if (!product) {
    return res.json({ message: "Product not found" });
  }

  // check stock availability
  if (product.stock < quantity) {
    return res.json({ message: "Not enough stock available" });
  }

  // calculate total price
  const totalPrice = product.price * quantity;

  // reduce product stock
  product.stock -= quantity;

  const newOrder = {
    id: orders.length + 1,
    productId: productId,
    quantity: quantity,
    totalPrice: totalPrice
  };

  orders.push(newOrder);

  res.json(newOrder);
};

module.exports = {
  getOrders,
  createOrder
};