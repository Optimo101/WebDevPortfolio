
    $(window).scroll(function() {
        var topViewPortPosition = ($(this).scrollTop() + 150);
        // var midViewPortPosition = (TopViewPortPosition + ($(window).height()/2));

        $('.section').each(function() {
            
            var topTarget = $(this).offset().top;
            // var bottomTarget = $(this).offset().top + $(this).height();

            // var middleTarget = (bottomTarget - ($(this).height()/2));
            // var topRange = (middleTarget - ($(this).height() * 0.25))
            // var bottomRange = (middleTarget + ($(this).height() * 0.25))
            
            var id = $(this).attr('id');

            if (topViewPortPosition > (topTarget + - 150)) {
                $('#navigation > ul > li > a').removeClass('active');
                $('#navigation > ul > li > a[href=\\#' + id + ']').addClass('active');
            }
        });
    });
