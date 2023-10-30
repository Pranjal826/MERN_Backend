const mongoose=require('mongoose')
// User Schema
const usermodel = new mongoose.Schema({
    dp:String,
    name: String,
    email: String,
    post:String,
    password: String,
    date:Date
})
// User model
module.exports=mongoose.model("User",usermodel)