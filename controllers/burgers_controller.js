var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

//Create routes to handle AJAX requests for CRUD
router.get("/", (req, res) => {
    burger.all( (data) => {
        var burgerOjbect = {
            burgers: data
        }
            res.render("index", burgerOjbect);
        }   
    );
    })
    .post("/", (req, res) => {
        console.log(req.body);
        burger.create(req.body.burger_name,
            (result) => {
                //Do something with the created burger
                //res.json(result);
                res.redirect("/");
            }
        );
    })
    .put("/:id?", (req, res) => {
        var id = parseInt(req.params.id);
        console.log(req.params.id);
        burger.update(id, 
            (result) => {
                //Update the burger 
                //res.json(result);
                res.redirect("/");
            }
        );
    });

module.exports = router;