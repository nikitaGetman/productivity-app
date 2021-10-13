const { Router } = require("express");
const userController = require("../controllers/UserController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isString(),
  userController.login
);
router.post("/refresh", userController.refresh);
router.post("/logout", authMiddleware, userController.logout);

router.get("/activate/:link", userController.activate);

router.get("/users", authMiddleware, userController.getUsers); // test for auth

module.exports = router;
