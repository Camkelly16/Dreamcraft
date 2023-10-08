const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener("click", function(){
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
});




const slider = document.querySelector('.slider');

function nextSlide() {
  slider.appendChild(slider.firstElementChild);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
