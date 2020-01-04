let express = require('express');
let router = express.Router();

const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {docList,docQuery,docId,docRand} = require("../daos/docDao");

// 列表
router.get('/list',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = docList();
    result.then(data=>{
        res.json(new SuccessMsg(data));
    })
});

// 类型查询
router.get('/query',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = docQuery(req.query.kind);
    return result.then(data=>{
        console.log("data",data);
        if(data){
            res.json(new SuccessMsg(data));
        }else{
            res.json(new ErrorMsg("查询的医生不存在"));
        }
    })
});

// id查询
router.get('/id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = docId(req.query.id);
    return result.then(data=>{
        console.log("data",data);
        if(data){
            res.json(new SuccessMsg(data));
        }else{
            res.json(new ErrorMsg("查询的医生不存在"));
        }
    })
});

// 随机获取
router.get('/rand',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = docRand();
    return result.then(data=>{
        console.log("data",data);
        res.json(new SuccessMsg(data));
    })
});


module.exports = router;