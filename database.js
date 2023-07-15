const mongoose=require('mongoose');

const connectdatabse=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Bookstore',{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log("Connected to data base mongodb://127.0.0.1:27017/Bookstore")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=connectdatabse;