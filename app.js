const express = require("express");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/", productRoutes);
app.use("/", categoryRoutes);
app.use("/", orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});