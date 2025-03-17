const express = require("express");
const router = express();
const userController=require("../controllers/users")
router.get("/",userController.getAll)
router.get("/:id",userController.getSingle)
module.exports=router;