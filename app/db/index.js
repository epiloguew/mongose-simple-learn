const config = require("../../config.js");
const mongoose = require("mongoose");
const db = {};

Object.defineProperties(db, {
    mongoose: {
        value: mongoose,
    },
    url: {
        value: config.mongooseUrl + "/" + config.db,
    },
});

module.exports = db;
