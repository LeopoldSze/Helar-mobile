const ajaxPromise=  param => {
    return new Promise((resovle, reject) => {
        $.ajax({
            "type":param.type || "get",
            "async":param.async || true,
            "url":param.url,
            "data":param.data || "",
            "success": res => {
                resovle(res);
            },
            "error": err => {
                reject(err);
            }
        })
    })
};
