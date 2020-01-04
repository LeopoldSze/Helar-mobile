const {exec} = require("../db/mysql");

// 列表
const hosList = ()=>{
    let sql = "SELECT * from tab_front_hos";
    return exec(sql);
};

// 模糊查询
const hosQuery = (kind)=>{
    let sql = `select * from tab_front_hos where kind like '%${kind}%'`;
    return exec(sql);
};


module.exports = {hosList,hosQuery};