// 其他账号登录
$("#btnAcc").click(()=>{
    $(".loginAcc").toggle();
});

// 注册跳转
$("#link").click(()=>{
    location = "signup.html";
});

// 忘记密码跳转
$("#forget").click(()=>{
    location = "forgetPass.html";
});

// 点击登录
$("#btn").click(()=>{
    let info = {};
    info.acc = $("#uacc").val();
    info.pass = $("#upass").val();
    if(info.acc === null || info.acc === "" || info.pass === null || info.pass === ""){
        layer.msg("请填写完整信息",()=>{});
        return false;
    }else{
        $.ajax({
            type: "post",
            url: "http://localhost:3000/users/login",
            data: info,
            async: true,
            success: function (data) {
                console.log(data);
                if (data.errorNo === -1) {
                    layer.msg('账号或者密码错误，请重试！', ()=>{});
                    return false;
                } else {
                    layer.msg('登录成功');
                    setTimeout(()=>{
                        window.location = "home.html";
                    },1000);
                    //存入本地缓存,然后跳转到主页
                   window.sessionStorage.setItem("userinfo", JSON.stringify(info));
                }
            }
        });
    }
});

// function getJSON (url) {
//     return new Promise( (resolve, reject) => {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//
//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(this.responseText, this)
//                 } else {
//                     var resJson = { code: this.status, response: this.response }
//                     reject(resJson, this)
//                 }
//             }
//         };
//         xhr.send()
//     })
// }
// function postJSON(url, data) {
//     return new Promise( (resolve, reject) => {
//         var xhr = new XMLHttpRequest();
//         xhr.open("POST", url, true);
//         xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//
//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText), this)
//                 } else {
//                     var resJson = { code: this.status, response: this.response };
//                     reject(resJson, this)
//                 }
//             }
//         };
//         xhr.send(JSON.stringify(data))
//     })
// }