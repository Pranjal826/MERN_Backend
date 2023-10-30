const mongoose=require('mongoose')
const plm=require('passport-local-mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,

    }
})
userSchema.plugin(plm)
module.exports=mongoose.model('user',userSchema)