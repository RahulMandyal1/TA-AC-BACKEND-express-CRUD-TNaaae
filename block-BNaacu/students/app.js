const express  = require('express');
const app = express();
const path = require('path');
// telling  the application which view engine we are going to use 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use((req ,res ,next)=>{
    res.locals.list  = { list: ["ankit", "suraj", "prashant", "ravi"] };
})
// now requiring the routes 
app.use('/students',require('./routes/students'))
// server is listening on the port 2k21
app.listen(2021 ,()=>{
    console.log('Server is running on  the port 2K21');
})