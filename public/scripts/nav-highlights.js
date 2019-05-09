
    $(window).scroll(function() {
        var topViewPortPosition = ($(this).scrollTop() + 150);
        console.log(topViewPortPosition);
        $('.section').each(function() {
            var topTarget = $(this).offset().top;            
            var id = $(this).attr('id');
            if (topViewPortPosition > (topTarget + - 150)) {
                $('#navigation > ul > li > a').removeClass('active');
                $('#navigation > ul > li > a[href=\\#' + id + ']').addClass('active');
            }
            else if (topViewPortPosition < 680) {
                $('#nav-link-home').addClass('active');
            }
        });
    });
