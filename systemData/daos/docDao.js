const {exec} = require("../db/mysql");

// 列表
const docList = ()=>{
    let sql = "SELECT * from tab_front_doc";
    return exec(sql);
};

// 类型模糊查询
const docQuery = (kind)=>{
    let sql = `select * from tab_front_doc where kind like '%${kind}%'`;
    return exec(sql);
};

// id查询
const docId = (id)=>{
    let sql = `select * from tab_front_doc where id=${id}`;
    return exec(sql);
};

// 随机查询
const docRand = ()=>{
    let sql = "select * from tab_front_doc ORDER BY RAND() limit 5";
    return exec(sql);
};


module.exports = {docList,docQuery,docId,docRand};
