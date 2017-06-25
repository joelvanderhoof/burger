var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "local",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(() => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as ID: ${connection.threadId}`);
});

module.exports = connection;