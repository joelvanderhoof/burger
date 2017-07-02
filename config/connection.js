var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
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

connection.connect((err, data) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as ID: ${connection.threadId}`);
});

module.exports = connection;