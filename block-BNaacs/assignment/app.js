const express = require("express");
const app = express();
const path = require("path");

// Now telling the application  which template engine we are  using .
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  res.locals.name = "Hey user welcome to behind the scene";
  next();
});
// Handling  the /route
app.get("/", (req, res) => {
  res.fetch("school");
});


// Running the server on 2k20 port
app.listen(2020, () => {
  console.log("Server is running on the port 2K20");
});
