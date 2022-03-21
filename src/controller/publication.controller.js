const express=require("express")
const Publication = require("../models/publication.model");

const router=express.Router()
router.post("" ,async (req,res)=>{
    const user= await Publication.create(req,res)
    return res.status(200).send(user)

})
module.exports=router