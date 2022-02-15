var methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    express = require("express"),
    env = process.env.NODE_ENV || 'development';

console.log("environment: ", env);

const routes = require("./routes");

var app = express();
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(8080, function () {
    console.log("Server is now running");
});