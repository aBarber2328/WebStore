const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

// GET /api/emotions
// get all emotions, ordered by id
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({ order: [["id", "ASC"]] });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/emotions/:emotionId
// get single emotion
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// POST /api/emotions/
// add new emotion
router.post("/", async (req, res, next) => {
  try {
    await Product.create(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

// PUT /api/emotions/:emotionId
// edit an emotion
router.put("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    const newProduct = await product.update(req.body);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/emotions/:emotionId
router.delete("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    await product.destroy();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
