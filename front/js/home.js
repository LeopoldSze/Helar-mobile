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

window.onload = function(){
    getSc(".recList",".main_two");
};

$(function () {
    // 加载推荐信息
    $.ajax({
        type:"get",
        url:"http://localhost:3000/doctor/rand",
        async:true,
        success:function(data){
            //console.log("data"+JSON.stringify(data));
            for(let i = 0; i<data.data.length;i++){
                $("#docList").tmpl(data.data[i]).appendTo("#recList");
            }
        }
    });

    let info = JSON.parse(sessionStorage.getItem("userinfo"));
    // 加载用户信息
    $.ajax({
        type:"get",
        url:"http://localhost:3000/users/id?acc="+info.acc,
        async:true,
        success:function(data){
            console.log("data"+JSON.stringify(data));
            $("#usrInfo").tmpl(data.data).appendTo(".userArea");
        }
    });

    // canvas代码雨
    //获取画布对象
    var canvas = document.getElementById("canvas");
    //获取画布的上下文
    var context =canvas.getContext("2d");
    //获取浏览器屏幕的宽度和高度
    var W = window.innerWidth;
    var H = window.innerHeight;
    //设置canvas的宽度和高度
    canvas.width = W;
    canvas.height = H;
    //每个文字的字体大小
    var fontSize = 18;
    //计算列
    var colunms = Math.floor(W /fontSize);
    //记录每列文字的y轴坐标
    var drops = [];
    //给每一个文字初始化一个起始点的位置
    for(var i=0;i<colunms;i++){
        drops.push(0);
    }

    //运动的文字
    var str ="H ❤ aler";
    //4:fillText(str,x,y);原理就是去更改y的坐标位置
    //绘画的函数
    function draw(){
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0,0,W,H);
        //给字体设置样式
        context.font = "700 "+fontSize+"px  微软雅黑";
        //给字体添加颜色
        context.fillStyle ="#00cc33";//可以rgb,hsl, 标准色，十六进制颜色
        //写入画布中
        for(var i=0;i<colunms;i++){
            var index = Math.floor(Math.random() * str.length);
            var x = i*fontSize;
            var y = drops[i] *fontSize;
            context.fillText(str[index],x,y);
            //如果要改变时间，肯定就是改变每次他的起点
            if(y >= canvas.height && Math.random() > 0.99){
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    function randColor(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb("+r+","+g+","+b+")";
    }
    draw();
    setInterval(draw,30);

});

$(window).resize(function () {
    getSc(".recList",".main_two");
});




// 医生简介
$(".docList .info").click(function (){
    window.location = "docMain.html";
});
// 资讯详情
$(".news").click(()=>{
    window.location = "newsDetail.html";
});
// 医生概述
$("#recList").on("click",".info", null,function () {
    let num = $(this).find("input").prop("id");
    $.cookie('num', num);
    window.location = "docMain.html";
});

