// 医生概述
$("#recList").on("click",".info", null,function () {
    let num = $(this).find("input").prop("id");
    $.cookie('num', num);
    window.location = "docMain.html";
});

// 搜索跳转
$("#search").click(function () {
    $(this).css("transform","scale(1.3)");
    setTimeout(()=>{
        window.location = "doctor.html";
    },500);
});


// 医生列表加载
$(function (){
    $.ajax({
        type:"get",
        url:"http://localhost:3000/doctor/list",
        async:true,
        success:function(data){
            console.log(data);
            for(let i = 0; i<data.data.length;i++){
                $("#docList").tmpl(data.data[i]).appendTo(".recList");
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
});