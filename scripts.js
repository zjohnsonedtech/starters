
// fixes navbar when scrolled to top and jumbotron out of view
document.onscroll = function() {
    if( $(window).scrollTop() > $('jumbotron').height() ) {
        $('nav > div.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    }
    else {
        $('nav > div.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
};
