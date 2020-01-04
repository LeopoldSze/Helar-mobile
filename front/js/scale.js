(function (doc, win) {
    var docEl = doc.documentElement,
        //移动端的设备提供了一个事件：orientationChange事件
//这个事件是苹果公司为safari中添加的。以便开发人员能够确定用户何时将设备由横向查看切换为纵向查看模式。
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize =(clientWidth /20) + 'px';
            console.log(docEl.style.fontSize);
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
