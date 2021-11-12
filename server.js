const express=require('express');
const connectDb=require('./config/db');
const app=express();
connectDb();
const PORT=process.env.PORT||5000;
app.get('/',(req,res)=>res.send('API Running'))
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/post',require('./routes/api/post'));
app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));
app.listen(PORT,()=>console.log(`Server started on ${PORT}`));
