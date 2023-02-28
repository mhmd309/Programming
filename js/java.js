$(document).ready(function () {

    //Nice Scroll
    $("html").niceScroll({
        cursorcolor: "#E41B17",
        cursorwidth: "7px",
        cursorheight: "30px",
        background: "none",
        cursorborder: 0,
        cursorborderradius: 0
    });

    //Carousal
    $('.carousel').carousel({

        interval: 5000

    });

    //Show Color Option Div When Click On The Gear

    $(".gear-check").click(function () {

        $(".color-option").fadeToggle();

    });

    // Change Color For Theme

    $(".color-option ul li")
        .eq(0).css("backgroundColor", " #E41B17").end()
        .eq(1).css("backgroundColor", " #e86ed0").end()
        .eq(2).css("backgroundColor", " #0c9463").end()
        .eq(3).css("backgroundColor", " #46b3e6").end()
        .eq(4).css("backgroundColor", " #e3b04b");

    $(".color-option ul li").click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

    //Caching The Scroll Top Element

    $(window).scroll(function () {

        $(this).scrollTop() >= 1000 ? $("#scroll-top").show() : $("#scroll-top").hide();

    });

    //Click On Button To Scroll Top

    $("#scroll-top").click(function () {

        $("html , body").animate({
            scrollTop: 0
        }, 800);

    });

});
