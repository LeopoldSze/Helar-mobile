let express = require('express');
let router = express.Router();

const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {hosList,hosQuery} = require("../daos/hosDao");

// 列表
router.get('/list',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = hosList();
    result.then(data=>{
        res.json(new SuccessMsg(data));
    })
});

// 查询
router.get('/query',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = hosQuery(req.query.kind);
    return result.then(data=>{
        if(data){
            res.json(new SuccessMsg(data));
        }else{
            res.json(new ErrorMsg("查询的医院不存在"));
        }
    })
});


module.exports = router;