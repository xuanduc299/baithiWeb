// let sliderImages = document.querySelectorAll(".slide"),
//     arrowLeft = document.querySelector("#arrow-left"),
//     arrowRight = document.querySelector("#arrow-right"),
//     current = 0;

// // Clear all images
// function reset() {
//     for (let i = 0; i < sliderImages.length; i++) {
//         sliderImages[i].style.display = "none";
//     }
// }

// // Init slider
// function startSlide() {
//     reset();
//     sliderImages[0].style.display = "block";
// }

// // Show prev
// function slideLeft() {
//     reset();
//     sliderImages[current - 1].style.display = "block";
//     current--;
// }

// // Show next
// function slideRight() {
//     reset();
//     sliderImages[current + 1].style.display = "block";
//     current++;
// }

// // Left arrow click
// arrowLeft.addEventListener("click", function () {
//     if (current === 0) {
//         current = sliderImages.length;
//     }
//     slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function () {
//     if (current === sliderImages.length - 1) {
//         current = -1;
//     }
//     slideRight();
// });

// startSlide();
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






