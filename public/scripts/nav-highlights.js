
// $(window).scroll(function() {
//     var position = $(this).scrollTop();
//     console.log(position);


//     var landingTarget = $("#landing").offset().top;
//     var aboutTarget = $("#about").offset().top;
//     var projectsTarget = $("#projects").offset().top;
//     var contactTarget = $("#container-contact-section").offset().top;

    
// });
    
    
    
    
    $(window).scroll(function() {
        var position = ($(this).scrollTop() + 80);

        $('.section').each(function() {
            var topTarget = $(this).offset().top;
            var bottomTarget = $(this).offset().top + $(this).height();
            var id = $(this).attr('id');
            console.log(topTarget);
            console.log(bottomTarget);
            if ((position) >= topTarget) {
                $('#navigation > ul > li > a').removeClass('active');
                $('#navigation > ul > li > a[href=\\#' + id + ']').addClass('active');
            }
        });
    });
