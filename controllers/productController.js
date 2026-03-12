let products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 10
  }
];

// GET all products
const getProducts = (req, res) => {
  res.json(products);
};

// GET product by id
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.json({ message: "Product not found" });
  }

  res.json(product);
};

// POST add product
const createProduct = (req, res) => {
  const newProduct = {
    id: products.length + 1,
    productName: req.body.productName,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock
  };

  products.push(newProduct);

  res.json(newProduct);
};

// PUT update product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.json({ message: "Product not found" });
  }

  product.productName = req.body.productName;
  product.price = req.body.price;
  product.category = req.body.category;
  product.stock = req.body.stock;

  res.json(product);
};

// DELETE product
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.json({ message: "Product not found" });
  }

  products = products.filter(p => p.id !== id);

  res.json({ message: "Product deleted" });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};