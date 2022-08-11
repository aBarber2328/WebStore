const router = require("express").Router();
const {
  models: { ProductOrderSession, User, OrderSession, Product },
} = require("../db");

module.exports = router;

// GET /api/cart
// get all orders in orderSession
router.get("/", async (req, res, next) => {
  const userId = await User.findIdByToken(req.headers.authorization);
  try {
    const orders = await OrderSession.findOne({
      where: {
        status: "active",
        userId: userId,
      },
      include: Product,
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});
// GET /api/orders/:orderId
// get single order
router.get("/user/:orderType", async (req, res, next) => {
  try {
    const order = await OrderSession.findByPk(req.params.orderId);
    res.send(order);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:orderId
// get single order
router.get("/:orderId", async (req, res, next) => {
  try {
    const order = await OrderSession.findByPk(req.params.orderId);
    res.send(order);
  } catch (err) {
    next(err);
  }
});

// POST /api/orders/
// add new order
router.post("/", async (req, res, next) => {
  try {
    const userId = await User.findIdByToken(req.body.token);

    const orderSession = await OrderSession.findOne({
      where: {
        userId: userId,
        status: "active",
      },
      include: {
        model: Product,
      },
    });
    let isNewProduct = true;
    const products = orderSession.dataValues.products;

    for (let i = 0; i < products.length; i++) {
      if (products[i].dataValues.id === +req.body.productId) {
        isNewProduct = false;
        await ProductOrderSession.update(
          {
            quantity:
              products[i].dataValues.productOrderSessions.dataValues.quantity +
              1,
          },
          {
            where: {
              productId: +req.body.productId,
              orderSessionId: orderSession.dataValues.id,
            },
          }
        );
      }
    }
    if (isNewProduct) {
      await ProductOrderSession.create({
        quantity: 1,
        productId: +req.body.productId,
        orderSessionId: orderSession.dataValues.id,
      });
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/cart/:orderId
router.delete("/:productId", async (req, res, next) => {
  try {
    const userId = await User.findIdByToken(req.headers.authorization);
    const order = await OrderSession.findOne({
      where: {
        status: "active",
        userId: userId,
      },
    });
    console.log("order check", order);
    await order.removeProducts(+req.params.productId);
    console.log("test");
    res.send(order);
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:orderId
// edit an order
router.put("/", async (req, res, next) => {
  try {
    await ProductOrderSession.bulkCreate(req.body.cart, {
      updateOnDuplicate: ["quantity"],
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:orderId/:emotionId/unassign
// remove emotion from an order/cart/wishlist
// router.put("/:orderId/:emotionId/unassign", async (req, res, next) => {
//   try {
//     console.log("hihihi");
//     const order = await Order.findByPk(req.params.orderId);
//     res.json(await order.removeEmotion(req.params.emotionId));
//   } catch (error) {
//     next(error);
//   }
// });

// PUT /api/orders/:orderId/:emotionId/assign
// add emotion to an order/cart/wishlist
// router.put("/:orderId/:emotionId/assign", async (req, res, next) => {
//   try {
//     console.log(req.params);
//     const order = await Order.findByPk(req.params.orderId);
//     res.send(await order.addEmotion(req.params.emotionId));
//   } catch (error) {
//     next(error);
//   }
// });

// PUT /api/orders/:orderId/:emotionId/:quantity
// change quant of emotion in order/cart/wishlist
router.put("/:orderId/:emotionId/:quantity", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(
      await order.setEmotionQuantity(req.params.emotionId, req.params.quantity)
    );
  } catch (error) {
    next(error);
  }
});
