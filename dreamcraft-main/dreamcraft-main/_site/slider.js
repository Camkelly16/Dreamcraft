const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");

let counter = 0;
const imageWidth = images[0].clientWidth; // Assuming all images have the same width

function slideImage() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    slider.style.transform = `translateX(-${counter * imageWidth}px)`;
}

setInterval(slideImage, 3000); // Slide the images every 3 seconds
