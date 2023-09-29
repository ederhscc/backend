const express = require("express");
const router = express.Router();

// Controller
const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
} = require("../controllers/PhotoController.jsx");

// Middlewares
const { photoInsertValidator } = require("../middlewares/photoValidations.jsx");
const authGuard = require("../middlewares/authGuard.jsx");
const validate = require("../middlewares/handleValidation.jsx");
const { imageUpload } = require("../middlewares/imageUpload.jsx");

// Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidator(),
  validate,
  insertPhoto
);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);

module.exports = router;
