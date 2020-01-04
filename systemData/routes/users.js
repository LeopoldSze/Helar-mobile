let express = require('express');
let router = express.Router();
const {userList,userRegis,userInfo,userUpd} = require("../daos/usersDao");
const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");

// 登录
router.post('/login', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin","*");
  const result = userList(req.body);
  return result.then(data=>{
    console.log(data);
    if(data[0]){
      res.json(new SuccessMsg(data,"登录成功"));
    }else{
      res.json(new ErrorMsg(data,"登录失败"));
    }
  })
});


// 注册
router.post('/register',function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
      const result1 = userList(req.body);
      return result1.then(list=>{
        console.log(list);
        if(list[0]){
          res.json(new ErrorMsg(list,"注册失败，账号已存在"));
        }else{
          const result = userRegis(req.body);
          return result.then(data=>{
            res.json(new SuccessMsg(data,"注册成功"));
          });
        }
      });
});

// 查询
router.get('/id',function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
  const result = userInfo(req.query.acc);
  return result.then(data=>{
    if(data){
      res.json(new SuccessMsg(data));
    }else{
      res.json(new ErrorMsg("查询的用户不存在"));
    }
  })
});

// 更新用户信息
router.post('/upd',function (req,res,next) {
  res.setHeader("Access-Control-Allow-Origin","*");
  const result = userUpd(req.body);
  return result.then(data=>{
    if(data){
      res.json(new SuccessMsg(data,"更新成功"));
    }else{
      res.json(new ErrorMsg("更新失败"));
    }
  })
});



module.exports = router;
