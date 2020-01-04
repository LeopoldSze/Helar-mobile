$(function () {
    if(window.sessionStorage){
        //获取缓存数据
        let userInfo = sessionStorage.getItem("user_mobileInfo");
        //判断数据是否为空
        if(userInfo != null){
            //将JSON字符串转为JSON对象
            let userObj = JSON.parse(userInfo);
            //判断对象是否为空，将信息输出到登录区域
            if(userObj != null){
                $("#userarea").text(userObj.acc);
            }
        }else{
            $("#userarea").text("请登录");
        }
    }
});

// 跳转登录
$("#userarea").click( ()=> {
    if($(this).text() === "请登录"){
        location = "login.html";
    }
});
$("#exit").click(()=>{
    location = "login.html";
});