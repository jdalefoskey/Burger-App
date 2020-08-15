// * required modules
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

// define port number
const PORT = process.env.PORT || 1330; // the number of calories in a McDonald's Bic Mac Meal (with large fries and large Coca-Cola)
// https://www.mcdonalds.com/us/en-us/about-our-food/nutrition-calculator.html

// start an express app instance
const app = express();

// serve status content for the app from the "public" directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use routes from the burgers_controller
app.use(routes);

// * start our sever so that it can begin listening to client requests.
app.listen(PORT, () => {
  // log server side when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
