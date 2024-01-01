const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config.js");
const db = require("./app/db/connect.js");
const corsOptions = {
    origin: "",
};

//middleware
app.use(cors(corsOptions));
//content-type - application/json
app.use(express.json());
//content-type - application/x-www-form-urlencoded
app.use(express.json());
//static
app.use("/", express.static("static"));

//route
const money = require("./app/route/money.js");
app.use("/" + money.path, money.router);

//connect
db();
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}.`);
});
