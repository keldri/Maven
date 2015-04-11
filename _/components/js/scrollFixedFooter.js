/*;( function( $, window, document, undefined ) {

//testing-scrollFor user-InfoBar
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.user-infobar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.user-infobar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.user-infobar').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
       /* $('header').css( "background-color", "rgba(255, 255, 255, 0.42)" );
        $('.logo a,.open-toggle').css("color", "black");*/
      /*  $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;*/
    
/*}

})( jQuery, window, document );*/