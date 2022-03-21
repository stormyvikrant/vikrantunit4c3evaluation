const  mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect("mongodb+srv://vikrantcoder:<password>@cluster0.brbuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
module.exports=connect