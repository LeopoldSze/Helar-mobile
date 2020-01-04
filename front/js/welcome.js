function showWalk() {
    let obj1 = document.querySelector(".walk_one");
    let obj2 = document.querySelector(".walk_two");
    let obj3 = document.querySelector(".walk_three");
    let obj4 = document.querySelector(".walk_four");
    let timer1 = window.setInterval(function () {
        clearInterval(timer1);
        obj1.style.opacity = 0;
        obj1.classList.remove("show");
        obj2.classList.add("show");
        let timer2 = window.setInterval(function () {
            clearInterval(timer2);
            obj2.style.opacity = 0;
            obj2.classList.remove("show");
            obj3.classList.add("show");
            let timer3 = window.setInterval(function () {
                clearInterval(timer3);
                obj3.style.opacity = 0;
                obj3.classList.remove("show");
                obj4.classList.add("show");
            },2000);
        },2000);
    },2000);


}
window.onload = function(){
    showWalk();
};

$("#start").click(()=>{
    setTimeout(function () {
        location = "signup.html";
    },1000);
});





