const express = require('express');
const app=express();
const port = 5001;

app.use(express.json());

app.get('/home',(req,res)=>{
    res.send('Namaste Duniyaaa!');
})

app.listen(port, ()=>{
    
    console.log('the server is started');
});
