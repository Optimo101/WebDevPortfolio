var hamburger = document.getElementById('hamburger');
var hamburgerIcon = document.getElementById('hamburger-icon');
var navMobileMenuContainer = document.getElementById('nav-mobile-menu-container');
var navLogo = document.getElementsByClassName('logo')[0]

function showOrHide(){
  navMobileMenuContainer.classList.toggle('display');
  navMobileMenuContainer.classList.toggle('no-display');
  hamburgerIcon.classList.toggle('fa-bars');
  hamburgerIcon.classList.toggle('fa-times');
}

function closeMobileNav(){
    if (hamburgerIcon.classList.contains('fa-times')) {
      hamburgerIcon.classList.toggle('fa-bars');
      hamburgerIcon.classList.toggle('fa-times');
    }
    if (navMobileMenuContainer.classList.contains('display')) {
      navMobileMenuContainer.classList.toggle('display');
      navMobileMenuContainer.classList.toggle('no-display');
    }
}

hamburger.addEventListener('click', showOrHide);
navLogo.addEventListener('click', closeMobileNav);



