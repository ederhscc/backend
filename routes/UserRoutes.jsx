const express = require("express");
const router = express.Router();

// Controller
const { register } = require("../controllers/UserController.jsx");

// Middlewares
const validate = require("../middlewares/handleValidation.jsx");
const {userCreateValidation} = require("../middlewares/userValidations.jsx")

router.post("/register", userCreateValidation(), validate, register);

module.exports = router;
