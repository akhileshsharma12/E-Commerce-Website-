
// Loading function 

let loader = document.getElementById("loader");
let loader2 = document.getElementById("loader-2");
let loader3 = document.getElementById("loader-3");

window.onload = setTimeout(() => {
    loader.style.display = "none";
}, 3000);

window.onload = setTimeout(() => {
    loader2.style.display = "none";
}, 1500);

window.onload = setTimeout(() => {
    loader3.style.display = "none";
}, 300);




//Toggle button function 

let items = document.getElementById("menuItems");

items.style.maxHeight = "0px";

function menutoggle() {
    if(items.style.maxHeight == "0px") {
        items.style.maxHeight = "200px";
    }
    else {
        items.style.maxHeight = "0px";
    }
}


// product gallery

var productImg = document.getElementById("product-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}

// Account Page 

var LoginForm = document.getElementById("loginForm");
var RegForm = document.getElementById("regForm");
var indicate = document.getElementById("indicater");

function register () {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
}

function login () {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
}


// w3School Script


w3.slideshow(".nature", 1500);