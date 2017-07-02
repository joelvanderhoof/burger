var connection = require("./connection.js");

var orm = {
    selectAll: (cb) => {
        var queryString = `SELECT * FROM burgers`;
        
        connection.query(queryString, 
        (err, result) => {
            if (err) throw err;
            cb(result);
        });         
    },
    insertOne: (value, cb) => {
        connection.query(`INSERT INTO burgers SET ?`, [{
            burger_name: value,
            devoured: false
        }], 
        (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (id, cb) => {
        connection.query(`UPDATE burgers SET ? WHERE ?`, [{
            devoured: true
        },
        {
            id: id
        }], 
        (err, result) =>{
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;