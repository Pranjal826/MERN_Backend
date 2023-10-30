const mongoose=require('mongoose')
const usermodel=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Username is required"],
        minlength:[4,"Username field must have atleast 4 characters"],
    },
    email:{
        type: String,
        required :[ true,"Email address is required"],
        lowercase:true,
        match:[/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/],
        unique:true
        
    },
    password:{
        type:String,required:[true,'Password <PASSWORD>'],
        minLength:[6],
        maxLength:[20]
        },
    phoneNumber: {
            type: Number,
            required: [true, "Phone number is required"],
            minlength: [10, "Phone number must have at least 10 characters"],
            unique: true
        },
        
    gender:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
    }

})
module.exports=mongoose.model("newuser",usermodel)