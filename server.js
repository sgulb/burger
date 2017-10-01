// Require dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Setup port and app
var port = process.env.PORT || 3000;
var app = express();

// Serve static content from the public folder
app.use(express.static("public"));

// Set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Use method override for ?_method=DELETE post method
app.use(methodOverride("_method"));

// Require express-handlebars
var exphbs = require("express-handlebars");

// Setup handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine",  "handlebars");

// Import routes to be used by server
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Initialize app to listen on assigned port
app.listen(port, function() {
    console.log("App listening on PORT: " + port);
});