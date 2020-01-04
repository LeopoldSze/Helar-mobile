let express = require('express');
let router = express.Router();

const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {drugList,drugQuery,drugId} = require("../daos/drugDao");

// 列表
router.get('/list',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = drugList();
    result.then(data=>{
        res.json(new SuccessMsg(data));
    })
});

// 模糊查询
router.get('/query',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = drugQuery(req.query.engname);
    return result.then(data=>{
        if(data){
            res.json(new SuccessMsg(data));
        }else{
            res.json(new ErrorMsg("查询的药品不存在"));
        }
    })
});

// id查询
router.get('/id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = drugId(req.query.id);
    return result.then(data=>{
        if(data){
            res.json(new SuccessMsg(data));
        }else{
            res.json(new ErrorMsg("查询的药品不存在"));
        }
    })
});


module.exports = router;