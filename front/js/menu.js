// 菜单
var i = 0;
$("#menu").click(function () {
    i++;
    if(i%2 === 0){
        $(this).prop("class","fa fa-bars js-slideout-toggle");
        $(".menu").animate({
            left: "-600px"
        },1500)
    }else{
        $(this).prop("class","fa fa-close");
        $(".menu").animate({
            left: "0rem"
        },800)
    }
});

// 退出登录
$("#exit").click(()=>{
    sessionStorage.removeItem("userinfo");
    setTimeout(()=>{
        window.location = "login.html";
    },500)
});