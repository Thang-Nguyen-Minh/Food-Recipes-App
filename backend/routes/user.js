const {userSignUp,userLogin,getUser} = require ("../controller/user")
const express=require("express");
const router=express.Router();

router.post("/signUp",userSignUp)
router.post("/signIp",userLogin)
router.get("/user/:id",getUser)

module.exports = router;