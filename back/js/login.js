//登录按钮点击
$("#login").click(()=>{
    let usr = {};
    usr.acc = $("#u_name").val();
    usr.pass = $("#u_pass").val();
    if($("#u_name").val() == null || $("#u_name").val() == "" || $("#u_pass").val() == null || $("#u_pass").val() ==""){
        alert("请填写完整信息！");
    }else{
        // $.ajax({
        //     type:"post",
        //     url:"http://localhost:8080/user_mobile/login",
        //     contentType:"application/json;charset=utf-8",
        //     data:JSON.stringify(usr),
        //     async: true,
        //     success:function(data){
        //         if(data == null || data == ""){
        //             alert("用户名或密码错误！")
        //         }else{
        //             alert("登录成功！");
        //             //存入本地缓存,然后跳转到主页
        //             window.sessionStorage.setItem("user_mobileInfo",JSON.stringify(data));
        //             window.location = "index.html";
        //         }
        //     }
        // });


        let step1 = () => {
            ajaxPromise({
                "url":"http://localhost:3000/users/login?name="+usr.acc,
            }).then(data => {
                let pass = JSON.stringify(data.data[0].PASSWORD);
                if( pass === "\""+usr.pass+"\"" ){
                    alert("登录成功");
                    window.location = "index.html";
                }else{
                    alert("登录失败，请检查");
                    return false;
                }
                //$("#userinfo").tmpl(res.data).appendTo("#info")
            })
        };
        step1();



    }

});