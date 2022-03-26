const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
// Establishing a connection between the server and  the application
mongoose.connect("mongodb://127.0.0.1:27017/users", (err) => {
  console.log(err ? err : "Connection is sucessfully made between the server");
});
// Requiring all the routes here ....
let userRoutes = require('./routes/user');
const standAloneRoutes= require('./routes/index');
// all the middelwares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+'/public'));
app.use("/users", userRoutes);
app.use(standAloneRoutes);


// Error handling
app.use((err ,req , res ,next)=>{
  res.send(err);
  next();
});
//Listening the request  on 2k2 port
app.listen(2002, () => {
  console.log("Server is listening on the port 2K2");
});
