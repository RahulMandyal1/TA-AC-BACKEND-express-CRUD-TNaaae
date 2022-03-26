const express = require("express");
const { createIndexes } = require("../models/user");
const User = require("../models/user");
let router = express.Router();


router.post("/", (req, res, next) => {
  User.create(req.body, (err, savedData) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

// to show a single user  or to get a single result form the database
//based on some query
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleuser", { user: user });
  });
});

// to show all the user on the /users route  in the alluser page in the
// form of a table
router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("users", { users: users });
  });
});

//Now update the user data  Redirect to the /users page where all the
//users are listed
router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateduser) => {
    if (err) return next(err); 
    res.redirect("/users");
  });
});

//Delete the user from the database and render all the user again .
//After the user is successfully deleted then render users file again
router.get("/:id/delete", (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, deleteduser) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});
module.exports = router;