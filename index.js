const express=require('express');
const app=express();
const port = 8000;
// const bodyParser = require('body-parser')


const path=require('path');
const db=require('./config/mongoose');
const Hotel=require('./models/Hotel');
// app.use(bodyParser.urlencoded())
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/tourist',require('./routes/tourist'));
app.use('/api/hotel',require('./routes/hotel'));
app.use('/api/booking',require('./routes/booking'));
app.use('/api/map',async function(req,res){
    let hotels=await Hotel.find();
    
    return res.render('map',{
        hotels:hotels
    });

});

app.get('/',function(req,res){
    return res.render('home');
});

app.listen(port, function(e){
    if(e){
        console.log(e);
    }
    console.log("Server is running at port",port);
})