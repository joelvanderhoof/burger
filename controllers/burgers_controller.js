var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//Create routes to handle AJAX requests for CRUD
router.get("/", (req, res) => {
    burger.all().then(
        (result) => {
            var burgerOjbect = {
                data: result
            }
            res.render("index", burgerOjbect);
        }   
    );
})
    .post("/", (req, res) => {
        burger.create(burger_name, req.body.name).then(
            (result) => {
                //Do something with the created burger
                res.json(result);
            }
        );
    })
    .put("/:id?", (req, res) => {
        burger.update(burger_name, req.body.name).then(
            (result) => {
                //Update the burger 
                res.json(result);
            }
        );
    });

module.exports = router;