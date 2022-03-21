const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName :{type:String,require:true,minlength:3,maxlength:30},
    lastName :{type:String,min:3,max:30},
    age :{type:Number,require:true,},
    email:{type:String,require:true,unique:true},
    profileImages:{type:String},
},{
versionKey:false,
timestamps:true,
})
const User=mongoose.model.apply("user",userSchema)
module.exports=User
