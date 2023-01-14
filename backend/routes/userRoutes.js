const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");

router.post("/", userController.register);
router.post("/login", userController.login);
router.get("/me", protect, userController.getMe);

module.exports = router;
