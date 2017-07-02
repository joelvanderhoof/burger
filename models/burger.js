var orm = require("../config/orm");

var burger = {
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    create: (value, cb) => {
        orm.insertOne(value, (res) => {
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.updateOne(id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;

