const ajaxPromise=  param => {
    return new Promise((resovle, reject) => {
        $.ajax({
            "type":param.type || "get" || "post",
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

function getAjax(type, url, data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            sussess: function(data) {
                resolve(data)
            },
            error: function(error) {
                reject(error)
            }
        })
    })
}



function getJSON (url) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this)
                } else {
                    var resJson = { code: this.status, response: this.response }
                    reject(resJson, this)
                }
            }
        };
        xhr.send()
    })
}

function postJSON(url, data) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

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
        xhr.send(JSON.stringify(data))
    })
}


