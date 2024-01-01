const { parse } = require("path");
const model = require("../controller/money.js");
const router = require("express").Router();

router.get("/", model.fn);

module.exports = {
    router,
    path: parse(__filename).name,
};
