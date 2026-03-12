let categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Accessories" }
];

// GET all categories
const getCategories = (req, res) => {
  res.json(categories);
};

// POST create category
const createCategory = (req, res) => {
  const newCategory = {
    id: categories.length + 1,
    name: req.body.name
  };

  categories.push(newCategory);
  res.json(newCategory);
};

// PUT update category
const updateCategory = (req, res) => {
  const id = parseInt(req.params.id);

  const category = categories.find(c => c.id === id);

  if (!category) {
    return res.json({ message: "Category not found" });
  }

  category.name = req.body.name;

  res.json(category);
};

// DELETE category
const deleteCategory = (req, res) => {
  const id = parseInt(req.params.id);

  categories = categories.filter(c => c.id !== id);

  res.json({ message: "Category deleted" });
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
};