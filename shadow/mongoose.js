const mongoose = require("mongoose");
/**
 * 1. 连接数据库,数据库名为connectDemo
 * @TODO 连接需要密码
 */
const database = "connectDemo";
const url = "mongodb://127.0.0.1:27017/" + database;
mongoose.connect(url).catch((err) => {
    throw new Error("mongoose connection error =>");
});
/**
 * 2.监听是否连接成功
 */
mongoose.connection.once("open", () => {
    console.log("database:" + database + "connect success!");
});
mongoose.connection.on("error", (err) => {
    throw new Error("Error in Mongodb connection:" + err);
});

module.exports = mongoose;
