const express=require("express");
const router=express.Router();
const controller=require("../controller/controller.js");

router.get("/",controller.alldata);
router.get("/:id",controller.getsingledata);
router.post("/",controller.createblog);
router.delete("/:id",controller.deleteblog);
router.put("/:id",controller.updateblog);

module.exports=router;