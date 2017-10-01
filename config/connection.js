// Require mysql package
var mysql = require("mysql");

// Setup connection with mysql
var connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("ERROR: MySQL connection error -- " + err.stack + "\n");
        return
    }
    console.log("Connected to MySQL database as id " + connection.threadId + "\n");
});

// Export connection
module.exports = connection;