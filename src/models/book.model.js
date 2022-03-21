
const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema({
 
    likes:{type:Number,required:true,default:0},
    coverImage:{type:String,required:true,minimum:1},
    content:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user" ,required:true},
    commentId:{Type:mongoose.Schema.Types.ObjectId,ref:"commentcollection",required:true}
    
},{
versionKey:false,
timestamps:true,
})
const Books=mongoose.model.apply("bookcoolection",bookSchema)
module.exports=Books
