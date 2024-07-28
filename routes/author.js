const { authorController } = require("../controllers/authorControllers");

// Khai bao router
const router = require("express").Router();

// author Router
router.post("/add", authorController.addAuthor);
router.get("/get", authorController.getAllAuthor);
router.get("/:id", authorController.getAnAuthor);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);
module.exports = router;
