const db = require("./mongoose.js");
/**
 * 1. 创建 Schema, schema相当于collection中document数据类型的映射
 * 2. mongodb中
 *      collection -> 表
 *      document -> 行
 *      feiId -> 列
 * 3. 数据库 connectDemo中有user表，且表中用name(String)和age(Number)两个字段
 */
const user = db.Schema({
    name: {
        type: String,
        trim: true,
        get: () => "user's name:" + this.name,
        set(value) {
            this.name = "user:" + value;
        },
    },
    age: {
        type: Number,
        default: 1,
        alias: "nianling",
    },
});
/**
 * 4. 将schema和collection进行关联
 */
const userModel = db.model('"User', user, "user");

/**
 * 5. 查询find()
 *     option {} -> 查询全部
 *          {},{name:1,age:0} -> 查询全部，但内容只展示name字段
 */

/**
 * 6. 静态方法
 *      定义model.statics.fn = function(){};
 *      不能使用()=>{}
 */
userModel.statics.findAll = async function () {
    const res = await this.find();
    return res;
};

module.exports = userModel;
