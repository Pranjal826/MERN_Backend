const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/mern7")
.then(()=>console.log("DB connected"))
.catch(err => console.error(err))