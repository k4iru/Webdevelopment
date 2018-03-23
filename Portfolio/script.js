$(document).ready(function () {

    $(".about").click(function () {
        $('html, body').animate({
            scrollTop: $("#toAbout").offset().top
        }, 1000);
    });
    
    $(".portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#toPortfolio").offset().top
    }, 1000);
});

})
