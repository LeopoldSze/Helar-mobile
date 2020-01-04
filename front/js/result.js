// 加载搜索
$(function () {
    let kind = $.cookie('kind');
    // 搜索医生
    $.ajax({
        type:"get",
        url:"http://localhost:3000/doctor/query?kind="+kind,
        async:true,
        success:function(data){
            console.log("doc"+JSON.stringify(data.data));
            if(data.data){
                $("#docList").tmpl(data.data).appendTo(".recList");
            }
        }
    });

    // 搜索医院
    $.ajax({
        type:"get",
        url:"http://localhost:3000/hospital/query?kind="+kind,
        async:true,
        success:function(data){
            console.log("hos"+JSON.stringify(data.data));
            if(data.data){
                $("#hosList").tmpl(data.data).appendTo(".recList");
            }
        }
    });
});
