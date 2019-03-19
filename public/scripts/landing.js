var landingButton = document.getElementsByClassName('landing-button')[0];
var landingButtonIcon = document.getElementsByClassName('fa-chevron-circle-right')[0];

function toggle90(){
    landingButtonIcon.classList.toggle('turn-90-deg');
    console.log('hi');
}

landingButton.addEventListener('mouseenter', toggle90);
landingButton.addEventListener('mouseleave', toggle90);

