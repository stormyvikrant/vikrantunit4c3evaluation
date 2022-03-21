const express=require("express")
const Books = require("../models/book.model");

const router=express.Router()
router.post("" ,async (req,res)=>{
    const userbook= await Books.create(req,res)
    return res.status(200).send(userbook)

})
module.exports=router