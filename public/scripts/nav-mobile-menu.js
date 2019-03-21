
var navMobileMenuContainerListItems = document.getElementsByClassName('nav-mobile-menu-list-item');

[...navMobileMenuContainerListItems].forEach(function(listItem){
  listItem.addEventListener('click', showOrHide);
});


