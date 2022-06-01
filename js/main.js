// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }



var a;
function show_hide() {
    if (a == 1) {
        document.getElementById("myDIV").style.display = "inline";
        document.getElementById("myDIV1").style.display = "none";
        document.getElementById("myDIV2").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV").style.display = "none";
        return a = 1;
    }
}
function show_hide1() {
    if (a == 1) {
        document.getElementById("myDIV1").style.display = "inline";
        document.getElementById("myDIV").style.display = "none";
        document.getElementById("myDIV2").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV1").style.display = "none";
        return a = 1;
    }
}
function show_hide2() {
    if (a == 1) {
        document.getElementById("myDIV2").style.display = "inline";
        document.getElementById("myDIV1").style.display = "none";
        document.getElementById("myDIV").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV2").style.display = "none";
        return a = 1;
    }
}

function show_hide5() {
    if (a == 1) {
        document.getElementById("myDIV5").style.display = "inline";
        document.getElementById("myDIV3").style.display = "none";
        document.getElementById("myDIV4").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV5").style.display = "none";
        return a = 1;
    }
}
function show_hide3() {
    if (a == 1) {
        document.getElementById("myDIV3").style.display = "inline";
        document.getElementById("myDIV4").style.display = "none";
        document.getElementById("myDIV5").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV3").style.display = "none";
        return a = 1;
    }
}
function show_hide4() {
    if (a == 1) {
        document.getElementById("myDIV4").style.display = "inline";
        document.getElementById("myDIV3").style.display = "none";
        document.getElementById("myDIV5").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV4").style.display = "none";
        return a = 1;
    }
}

function show_hide6() {
    if (a == 1) {
        document.getElementById("myDIV6").style.display = "inline";
        document.getElementById("myDIV7").style.display = "none";
        document.getElementById("myDIV9").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV6").style.display = "none";
        return a = 1;
    }
}
function show_hide7() {
    if (a == 1) {
        document.getElementById("myDIV7").style.display = "inline";
        document.getElementById("myDIV8").style.display = "none";
        document.getElementById("myDIV6").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV7").style.display = "none";
        return a = 1;
    }
}
function show_hide8() {
    if (a == 1) {
        document.getElementById("myDIV8").style.display = "inline";
        document.getElementById("myDIV7").style.display = "none";
        document.getElementById("myDIV6").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV8").style.display = "none";
        return a = 1;
    }
}

function show_hide9() {
    if (a == 1) {
        document.getElementById("myDIV9").style.display = "inline";
        document.getElementById("myDIV11").style.display = "none";
        document.getElementById("myDIV10").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV9").style.display = "none";
        return a = 1;
    }
}
function show_hide10() {
    if (a == 1) {
        document.getElementById("myDIV10").style.display = "inline";
        document.getElementById("myDIV9").style.display = "none";
        document.getElementById("myDIV11").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV10").style.display = "none";
        return a = 1;
    }
}
function show_hide11() {
    if (a == 1) {
        document.getElementById("myDIV11").style.display = "inline";
        document.getElementById("myDIV10").style.display = "none";
        document.getElementById("myDIV9").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("myDIV11").style.display = "none";
        return a = 1;
    }
}






