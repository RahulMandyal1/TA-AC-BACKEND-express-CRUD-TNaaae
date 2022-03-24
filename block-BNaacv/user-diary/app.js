const express = require("express");
const app = express();
const path = require("path");
let userRouter = require("./routes/users");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/users' ,userRouter);
app.listen(2002 , ()=>{
    console.log('server is listening on the port 2k2 ');
})