let express = require('express');
let router = express.Router();
const {reviewList} = require("../daos/reviewDao");
const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");

// 查询
router.get('/list',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    const result = reviewList(req.query.id);
    return result.then(data=>{
        if(data){
            res.json(new SuccessMsg(data));
        }else{
            res.json(new ErrorMsg("查询的评论不存在"));
        }
    })
});


module.exports = router;