function getSc(obj1,obj2){
    let ulObj = $(obj1);
    let listObj = ulObj.find("li");
    let totalWidth = 0;
    listObj.each((index,value)=>{
        totalWidth += $(value).outerWidth(true);
    });
    ulObj.width(totalWidth);
    var myScroll = new IScroll(obj2,{
        scrollX:true,
        scrollY:false
    });
}

$(function () {
    // 加载信息
    $.ajax({
        type:"get",
        url:"http://localhost:3000/drug/list",
        async:true,
        success:function(data){
            console.log("data"+JSON.stringify(data));
            for(let i = 0; i<data.data.length;i++){
                $("#docList").tmpl(data.data[i]).appendTo("#ulist");
            }
        }
    });

    getSc(".case",".lists");


});

// 滚动
$(window).resize(function () {
    getSc(".case",".lists");
});

// 字母定位
$(".case li").click(function () {
    $("#ulist").css("display","none");
    $("#ulist1").html(null);
    let engname = $(this).html();
    // 根据英文名加载信息
    $.ajax({
        type:"get",
        url:"http://localhost:3000/drug/query?engname="+engname,
        async:true,
        success:function(data){
            console.log("data"+JSON.stringify(data));
            for(let i = 0; i<data.data.length;i++){
                $("#docList").tmpl(data.data[i]).appendTo("#ulist1");
            }
        }
    });
});

// 点击进入详情
$("#ulist").on("click",".docList",null,function () {
    let id = $(this).find("input").prop("id");
    $.cookie('id', id);
    window.location = "drugDetail.html";
});
$("#ulist1").on("click",".docList",null,function () {
    let id = $(this).find("input").prop("id");
    $.cookie('id', id);
    window.location = "drugDetail.html";
});
