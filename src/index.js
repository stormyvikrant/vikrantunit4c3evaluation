const express=require("express")
const connect=require("./configs/db")
const userController=require("./controller/user.controller")
const bookController=require("./controller/book.controller")
const commentController=require("./controller/comment.controller")
const publicationController=require("./controller/publication.controller")

const app=express()
app.use(express.json())

app.use("/user",userController)
app.post("/books",bookController)
app.post("/comments",commentController)
app.post("/publication",publicationController)

app.listen(5050,async()=>{
    try{
        await connect()
        console.log("listning port 5050")
    }catch(err){
console.log(err)
    }
})