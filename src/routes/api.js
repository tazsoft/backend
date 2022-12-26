var express=require('express');
var myController=require('../controllers/myController');
var stulist=require('../controllers/stulist');
var router=express.Router();

router.get("/get",myController.get);
router.post("/post",myController.post);

// mongoose data 
router.post("/insertstudent",stulist.InsertData);
router.get("/sturead",stulist.sturead);
router.get("/sturead",stulist.stuUpdate);
router.get("/sturead",stulist.delete);





module.exports=router;