const express=require("express")
const User = require("../models/user.modeluser.model");

const router=express.Router()
router.post("" ,async (req,res)=>{
    const user= await User.create(req,res)
    return res.status(200).send(user)

})
module.exports=router