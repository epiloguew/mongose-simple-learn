const user = require("./schema");

/**
 * 1. 查询所有数据
 */
user.findAll().then((res) => {
    console.log("all documents", res);
});

/**
 * 2. 添加数据
 */

const userObject = new user({
    name: "1",
    age: 10,
});

user.save().then(() => {
    console.log("Add New data", res);
});
