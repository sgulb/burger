// Require express package
var express = require("express");

// Creater the router
var router = express.Router();

// Import the burger model for database functionality
var burger = require("../models/burger.js");

// Create get routes and logic for routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = {
            burger: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
        ], [
        req.body.burger_name
        ], function() {
            res.redirect("/");
        });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true,
    }, condition, function() {
        res.redirect("/");
    });
});

// Export routes for server.js
module.exports = router;
