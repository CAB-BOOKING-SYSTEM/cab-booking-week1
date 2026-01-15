const express = require("express");
const AuthController = require("../controllers/authsController");
const authMiddleware = require("../middlewares/authsMiddleware");

const router = express.Router();
const controller = new AuthController();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/profile", authMiddleware, controller.profile);

module.exports = router;