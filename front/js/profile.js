$(function () {
    let info = JSON.parse(sessionStorage.getItem("userinfo"));
    // 加载用户信息
    $.ajax({
        type:"get",
        url:"http://localhost:3000/users/id?acc="+info.acc,
        async:true,
        success:function(data){
            console.log("data"+JSON.stringify(data));
            $("#usrInfo").tmpl(data.data).appendTo(".userArea");
            $("#list1").tmpl(data.data).appendTo(".nameArea");
            $("#list2").tmpl(data.data).appendTo("#bodyInfo");
        }
    });

});

// 跳转修改信息
$("#set").click(()=>{
    window.location = "profileSet.html";
});