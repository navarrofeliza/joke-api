// import dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db_name = "jokesDB";

// config the mongoose
require("./config/mongoose.config")(db_name);

// express config for post request
app.use(express.json(), express.urlencoded({ extended: true }));

//get the routes
require("./route/jokes.routes")(app);

// listen to the port
app.listen(8000, () => console.log("The server is over 8000!"));
