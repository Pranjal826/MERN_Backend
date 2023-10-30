const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern7')
.then(()=>{
    console.log('Connected')
})
.catch((err)=>{
    console.log(err)
}
)