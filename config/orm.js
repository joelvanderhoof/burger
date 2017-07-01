var connection = require("./connection");

var orm = {
    selectAll: (table) => {
        return new Promise( (reject, resolve) => {
            connection.query("SELECT * FROM ?", table, (err, result) => {
                if (err) throw err;
                console.log(result);
                resolve(result);
            });
        });
    },
    insertOne: (column, value) => {
        return new Promise( (reject, resolve) => {
            connection.query(`INSERT INTO burgers VALUES ?`, [{
                burger_name: value,
                devoured: FALSE,
                date: CURRENT_TIMESTAMP
            }], (err, result) => {
                if (err) throw err;
                console.log(result);
                resolve(result);
            });
        });
    },
    updateOne: (column, value, id) => {
        return new Promise( (reject, resolve) => {
            connection.query(`INSERT INTO burgers SET ? WHERE ?`, [{
                burger_name: value,
                devoured: FALSE,
                date: CURRENT_TIMESTAMP
            },
            {
                id: id
            }], (err, result) =>{
                if (err) throw err;
                console.log(result);
                resolve(result);
            });
        });
    }
};

module.exports = orm;