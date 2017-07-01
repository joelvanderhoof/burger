var orm = require("../config/orm");

var burger = {
    all: orm.selectAll("burgers").then(
        (result) => {
            console.log(result);
        }
    ),
    create: orm.insertOne().then(
        (result) => {
            console.log(result);
        }
    ),
    update: orm.updateOne().then(
        (result) => {
            console.log(result);
        }
    )
};

module.exports = burger;

