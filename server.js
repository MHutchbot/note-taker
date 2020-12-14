// set up as an express server

// dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("path");


const app = express();
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// linking above-said routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

module.exports = app;

// SERVER PORT
const PORT = process.env.PORT || 8080;


app.listen(PORT, function () {
    console.log(`PORT ${PORT} is watching your every step`);
});
