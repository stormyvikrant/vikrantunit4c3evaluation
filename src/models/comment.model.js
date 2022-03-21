
const mongoose=require("mongoose")
const CommentSchema=new mongoose.Schema({
 body:{"type":String},
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"user" ,required:true},
 bookId:{type:mongoose.Schema.Types.ObjectId,ref:"bookcoolection" ,required:true}
},{
versionKey:false,
timestamps:true,
})
const Comment=mongoose.model.apply("commentcollection",CommentSchema)
module.exports=Comment
