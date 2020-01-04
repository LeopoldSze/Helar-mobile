const {exec} = require("../db/mysql");

// 列表
const drugList = ()=>{
    let sql = "SELECT * from tab_front_drugs";
    return exec(sql);
};

// 模糊查询
const drugQuery = (engname)=>{
    let sql = `select * from tab_front_drugs where engname like '%${engname}%'`;
    return exec(sql);
};

// id查询
const drugId = (id)=>{
    let sql = `select * from tab_front_drugs where id=${id}`;
    return exec(sql);
};


module.exports = {drugList,drugQuery,drugId};