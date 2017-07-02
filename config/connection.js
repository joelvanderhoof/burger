var mysql = require("mysql");

var connection;

// Configure the connection
// If the app is deployed on Heroku, the connection will be set that
// Otherwise, the connection will be set to run on the local environment.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
    connection = mysql.createConnection({
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "burgers_db"
    });
}

// Test the connection
connection.connect((err, data) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as ID: ${connection.threadId}`);
});

module.exports = connection;