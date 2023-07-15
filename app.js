const exprees=require('express');
const app=exprees();
const connectdatabse=require('./database');

app.use(exprees.json());

const books=require('./routes/bookstoreroute');

app.get('/',(req,res)=>{
    res.send("Home page")
})
app.use('/new',books)


connectdatabse();

module.exports=app;