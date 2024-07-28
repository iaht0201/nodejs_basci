const { bookControllers } = require("../controllers/bookControllers");

// Khai bao router
const router = require("express").Router() ;

// author Router 
router.post("/add" ,bookControllers.addBook) ; 
router.get("/get" ,bookControllers.getAllBook);
// them param id 
router.get("/:id" ,bookControllers.getABook);
// cap nhap theo id 
router.put("/:id" ,bookControllers.updateBook);
// delete book 
router.delete("/:id" ,bookControllers.deleteBook);

module.exports = router ;