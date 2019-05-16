let landingButton = document.getElementById('landing-button');
let landingButtonIcon = document.getElementById('landing-button-icon');

landingButton.addEventListener("mouseover", function(){
    landingButtonIcon.style.display = "inline";
});

landingButton.addEventListener("mouseout", function(){
    landingButtonIcon.style.display = "none";
});