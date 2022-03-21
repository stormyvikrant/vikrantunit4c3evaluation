
const mongoose=require("mongoose")
const PublicationSchema=new mongoose.Schema({
 
    name :{type:String,require:true},
    bookId:{type:mongoose.Schema.Types.ObjectId,ref:"bookcoolection" ,required:true}
},{
versionKey:false,
timestamps:true,
})
const publication=mongoose.model.apply("publications",PublicationSchema)
module.exports=publication
