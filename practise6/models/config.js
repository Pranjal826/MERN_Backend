const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern7')
.then(()=>{
    console.log('connected to mongodb')
})
.catch(()=>{
    console.log('error connecting to mongodb')
})
