const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
   var hbsObject = {
     burgers: data
   };
    console.log(hbsObject);
    res.render("index", hbsObject);
   });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {

    res.json({ id: result.insertId });

  });
});

router.put("/api/burgers/:id", function(req, res) {
  var devoured = "id = " + req.params.id;

  console.log("devoured", devoured);

  burger.updateOne({
    devoured: req.body.devoured
  }, devoured, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
      
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
