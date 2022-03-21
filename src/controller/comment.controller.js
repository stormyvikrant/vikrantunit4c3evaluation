const express=require("express")
const Comment= require("../models/comment.model");

const router=express.Router()
router.post("" ,async (req,res)=>{
    const commentuser= await Comment.create(req,res)
    return res.status(200).send(commentuser)

})
module.exports=router