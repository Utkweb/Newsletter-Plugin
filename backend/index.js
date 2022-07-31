const express = require('express');
const app=express();
const port = 5001;
const userRouter =require('./router/userRouter');
const subsRouter =require('./router/subsRouter');
const newsletterRouter =require('./router/newsletterRouter');
const cors = require('cors');

app.use(express.json());

// use to connect the frontend to backend 

app.use(cors({origin:'http://localhost:3000'}));

app.use('/user',userRouter);
app.use('/subs',subsRouter);
app.use('/news',newsletterRouter);

app.get('/home',(req,res)=>{
    res.send('Namaste Duniyaaa!');
})

app.listen(port, ()=>{
    
    console.log('the server is started');
});
