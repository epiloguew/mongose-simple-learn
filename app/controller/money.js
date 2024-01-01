const { parse } = require("path");
const db = require("../db/index.js");
const model = db.mongoose.model(
    "Money",
    db.mongoose.Schema({
        item: String,
        instock: Array,
    }),
    "money"
);
exports.fn = (req, res) => {
    model.find({}).then((res) => {
        console.log(res, "==>");
    });
};
