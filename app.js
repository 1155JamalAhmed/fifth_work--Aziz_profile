var manuButton = document.querySelector(".manu-button");
var mobileNavMenu = document.querySelector(".mobile-nav__menu");
var backDrope = document.querySelector(".backdrope");
var mobileNavMenuItem = document.querySelectorAll(".mobile-nav__menu-item");
var mobileNavMenuItemsDisplay = document.querySelector(".mobile-nav__menu-items");
var manuButtonClicked = 1;
manuButton.addEventListener("click",function() {
  if(manuButtonClicked % 2 == 1) {
    mobileNavMenu.style.display = 'flex';
    setTimeout(function(){
      mobileNavMenu.classList.add("mobile-nav__menu-flex");
    },10);
    setTimeout(function(){
      mobileNavMenuItemsDisplay.style.display = 'block';
    },200);
    
    backDrope.style.display = 'block';
    manuButtonClicked++;
  }
  else {
    mobileNavMenu.classList.remove("mobile-nav__menu-flex");
    
    setTimeout(function(){
      mobileNavMenuItemsDisplay.style.display = 'none';
    },250);
    setTimeout(function() {
      mobileNavMenu.style.display = 'none';
    },350);
    backDrope.style.display = 'none';
    manuButtonClicked--;
  }

});

function displayNone() {
  mobileNavMenu.classList.remove("mobile-nav__menu-flex");
  setTimeout(function(){
    mobileNavMenuItemsDisplay.style.display = 'none';
  },250);
  setTimeout(function() {
    mobileNavMenu.style.display = 'none';
  },350);
  backDrope.style.display = 'none';
  manuButtonClicked--;
}

backDrope.addEventListener("click",displayNone);

for(var i=0; i<mobileNavMenuItem.length;i++) {
  mobileNavMenuItem[i].addEventListener("click",displayNone);
}


