
var upArrowIcon = document.getElementById("upArrowIcon");
  
  upArrowIcon.addEventListener("click", function(){
  scrollToTop(150);
});

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}