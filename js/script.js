$(document).ready(function(){
    const menuToggle = document.querySelector('#menu_togle');
    const mobileNavContainer = document.querySelector('#mobile-nav');


    menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active'); 
}
});