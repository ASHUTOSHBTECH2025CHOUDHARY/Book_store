const exprees=require('express');
const app=exprees();
const path=require('path')
const cors=require('cors')
const connectdatabse=require('./database');

app.use(exprees.json());
app.use(cors());
const books=require('./routes/bookstoreroute');

app.use('/bookstore',books)
connectdatabse();
app.get("/",(req,res)=>{
    app.use(exprees.static(path.resolve(__dirname,"client","build")));
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})
app.listen(3001,()=>{
    console.log('server is runing at  port: 3001')
})