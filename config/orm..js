var connection = require("./connection");

var orm = {
    selectAll: (table) => {
        connection.query("SELECT * FROM ?", table, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (table, column, value) => {
        connection.query(`INSERT INTO ${table} VALUES ?`, [{
            burger_name: value,
            devoured: FALSE,
            date: CURRENT_TIMESTAMP
        }], (err, result) =>{
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: (table, value, id) => {
        connection.query(`INSERT INTO ${table} SET ? WHERE ?`, [{
            burger_name: value,
            devoured: FALSE,
            date: CURRENT_TIMESTAMP
        },
        {
            id: id
        }], (err, result) =>{
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;