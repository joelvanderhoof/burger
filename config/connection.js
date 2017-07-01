var mysql = require("mysql");

var connection = mysql.createConnection({
    port: process.env.PORT || 3306,
    host: "local",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect((err, data) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as ID: ${connection.threadId}`);
});

module.exports = connection;