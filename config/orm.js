var connection = require("./connection.js");

//   selectWhere: (tableInput, colToSearch, valOfCol) => {
//     return new Promise ((resolve, reject) => {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     connection.query(queryString, [tableInput, colToSearch, valOfCol], (err, result) => {
//         console.log(result);
//         resolve(result);
//       });
//     });
//   }

var orm = {
    selectAll: (cb) => {
        var queryString = `SELECT * FROM burgers`;
        
        connection.query(queryString, 
        (err, result) => {
            if (err) throw err;
            console.log(result);
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
            console.log(result);
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
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;