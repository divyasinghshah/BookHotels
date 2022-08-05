const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/hotel-db');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting db'));

db.once('open',function(){
    console.log("Successfully connected to db");
});