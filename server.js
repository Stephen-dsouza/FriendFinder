var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT  || 8000
app.use("/public", express.static('app/public'))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes")(app)
require("./app/routing/apiRoutes")(app)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
}); 