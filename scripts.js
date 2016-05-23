
// fixes navbar when scrolled to top and jumbotron out of view
document.onscroll = function() {
    if( $(window).scrollTop() > $('jumbotron').height() ) {
        $('navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    }
    else {
        $('navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
};
