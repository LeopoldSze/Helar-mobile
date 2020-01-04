// 跳转评论
$("#comm").click(function () {
    setTimeout(()=>{
        window.location = "newsComment.html";
    },100);
});

// 图标点击
let i = 0;
$("#thumb").click(function () {
    i++;
    if(i % 2 === 0){
        $(this).prop("class","fa fa-thumbs-o-up");
        layer.msg("点赞已取消！",()=>{});
    }else{
        $(this).prop("class","fa fa-thumbs-up");
        layer.msg("点赞成功！")
    }
});
$("#heart").click(function () {
    i++;
    if(i % 2 === 0){
        $(this).prop("class","fa fa-heart-o");
        layer.msg("收藏已取消！",()=>{});
    }else{
        $(this).prop("class","fa fa-heart");
        layer.msg("收藏成功！")
    }
});
