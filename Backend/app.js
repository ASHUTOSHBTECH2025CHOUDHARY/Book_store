const exprees=require('express');
const app=exprees();
const cors=require('cors')
const connectdatabse=require('./database');

app.use(exprees.json());
app.use(cors({
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}
));
const books=require('./routes/bookstoreroute');

app.use('/bookstore',books)


connectdatabse();

module.exports=app;