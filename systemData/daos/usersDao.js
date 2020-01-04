const {exec} = require("../db/mysql");

// 登录
const userList = (userinfo)=>{
    let sql = `select * from tab_front_user where acc="${userinfo.acc}" and pass = "${userinfo.pass}"`;
    return exec(sql);
};

// 注册
const userRegis = (userinfo)=>{
    let sql = `insert into tab_front_user (acc,pass,mail) VALUES ('${userinfo.acc}','${userinfo.pass}','${userinfo.mail}')`;
    return exec(sql).then(data=>{
        return {
            id:data.insertId
        }
    })
};

// 查询
const userInfo = (acc)=>{
    let sql = `select * from tab_front_user where acc='${acc}'`;
    return exec(sql);
};

// 修改
const userUpd = (usr)=>{
    let sql = `UPDATE tab_front_user set acc = "${usr.acc}",pass="${usr.pass}",photo="${usr.photo}",age="${usr.age}",blood="${usr.blood}",
     gender = "${usr.gender}",height = "${usr.height}",weight = "${usr.weight}",mail = "${usr.mail}" where id = "${usr.id}"`;
    return exec(sql).then(data=>{
        console.log(data);
        if(data.affectedRows > 0){
            return true;
        }
        return false;
    })
};


module.exports = {userList,userRegis,userInfo,userUpd};