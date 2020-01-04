// 加载信息
$(function () {
    let id = $.cookie('num');
    // 搜索医生
    $.ajax({
        type: "get",
        url: "http://localhost:3000/doctor/id?id="+id,
        async: true,
        success: function (data) {
            console.log("doc" + JSON.stringify(data.data));
            if (data.data) {
                $("#mainInfo").tmpl(data.data).appendTo(".mainInfo");
            }
        }
    });
});