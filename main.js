$(document).ready(function () {
    $(".lni-menu").click(function() {
        $('.hamburger').addClass('show');
        $('.overlay').css(' background-color', 'blue')
        })
    $(window).scroll(function () {
        $('.hamburger').removeClass('show');
        
        });
    $(".lni-close").click(function() {
            $('.hamburger').removeClass('show')
            });

})
