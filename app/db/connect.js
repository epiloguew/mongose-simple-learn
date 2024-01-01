const db = require("./index.js");
module.exports = () => {
    db.mongoose.connect(db.url).catch((err) => {
        throw new Error("some error may happen:" + err);
    });
    db.mongoose.connection.once("open", () => {
        console.log("database is serve");
    });
};
