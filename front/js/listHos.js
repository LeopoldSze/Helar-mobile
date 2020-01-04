// 搜索跳转
$("#search").click(function () {
    $(this).css("transform","scale(1.3)");
    setTimeout(()=>{
        window.location = "hospital.html";
    },500);
});

// 医院列表加载
$(function (){
    $.ajax({
        type:"get",
        url:"http://localhost:3000/hospital/list",
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