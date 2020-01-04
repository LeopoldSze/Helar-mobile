// 下拉选择
$(".choose").click(function () {
    $(this).next().toggleClass("on");
});

// 选项选择
$(".opt").click(function () {
    $("#resu").html($(this).html());
});

// 提交跳转
$("#btn").click(()=>{
    if($("#resu").html()==="医院类型"){
        layer.msg('请选择类型！',()=>{});
        return;
    }else{
        $.cookie('kind', decodeURI($("#resu").html()));
        layer.msg("找到啦！");
        setTimeout(()=>{
            window.location = "result.html";
        },1000);
    }
});