let burgerButton = document.querySelector('.burger__bar');

let mobileDesing = document.querySelector('.header__links');

burgerButton.addEventListener('click', () => {
    
    
   mobileDesing.classList.toggle('active')
    
});