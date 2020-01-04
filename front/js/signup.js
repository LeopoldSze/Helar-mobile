function postJSON(url, data) {
    console.log("data:",data);
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type","application/json");
        // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText), this)
                } else {
                    var resJson = { code: this.status, response: this.response };
                    reject(resJson, this)
                }
            }
        };
        xhr.send(data)
    })
}

// 跳转登录
$("#link").click(()=>{
    location = "login.html";
});

// 注册
$("#btn").click(()=>{
   let info = {};
    info.acc = $("#uacc").val();
    info.pass = $("#upass").val();
    info.mail = $("#mail").val();
    let repass = $("#upass2").val();
   let re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
   if(info.acc === null || info.acc === "" || info.pass === null || info.pass === ""
       || repass === null || repass === "" || info.mail === null || info.mail === ""){
       layer.msg('请填写完整信息！',()=>{
           return false;
       });
   }else{
       if(info.pass !== repass){
           layer.msg('两次输入密码不一致！',()=>{
               return false;
           });
       }else{
           if(re.test(info.mail)){
               $.ajax({
                   type: "post",
                   url: "http://localhost:3000/users/register",
                   data: info,
                   async: true,
                   success: function (data) {
                       console.log(data);
                       if (data.errorNo === -1) {
                           layer.msg('账号已存在，请重试！', ()=>{});
                           return false;
                       } else {
                           layer.msg('注册成功');
                           setTimeout(()=>{
                               window.location = "home.html";
                           },1000);
                           //存入本地缓存,然后跳转到主页
                           window.sessionStorage.setItem("userinfo", JSON.stringify(info));
                       }
                   }
               });
           }else{
               layer.msg('邮箱格式不正确！',()=>{
                   return false;
               });
           }
       }
   }
});