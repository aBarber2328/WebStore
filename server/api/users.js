const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

// GET /api/users
// get all users, ordered by id
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      order: [["id", "ASC"]],
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:userId
// get single user
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "username", "email", "address"],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:userId
// edit an user
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

// // DELETE /api/users/:userId
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.send(200);
  } catch (error) {
    next(error);
  }
});
