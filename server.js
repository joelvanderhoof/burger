var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");
var expressHandlebars = require("express-handlebars");


var routes = require("./controllers/burgers_controller");

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname + "/public/")));

// Parse incoming requests as a JSON object
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Configure and set handlebars as the view engine
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
});
