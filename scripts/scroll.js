$('.home').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('.main').eq(0).offset().top
    }, 300);
});

$('.abou').eq(1).click(() => {
    $('html, body').animate({
        scrollTop: $('.about').eq(1).offset().top
    }, 300);
});

$('.works').eq(2).click(() => {
    $('html, body').animate({
        scrollTop: $('.portfolio').eq(2).offset().top
    }, 300);
});

$('.con').eq(3).click(() => {
    $('html, body').animate({
        scrollTop: $('.contact').eq(3).offset().top
    }, 300);
});