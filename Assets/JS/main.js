/* мобильное меню */
$("#toggler").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menu").toggleClass("max-lg:top-full")
    $("body").toggleClass("overflow-hidden")
})


/* кнопка скролла */
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        $("#to-top-button").removeClass("hidden");
    } else {
        $("#to-top-button").addClass("hidden");
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* отзывы поп'ап */
$("#popupToggler").click(() => {
    $("#popupOverlay").toggleClass("-translate-x-full")
    $("#popup").toggleClass("translate-x-[3000px]")
    $("#popup").toggleClass("-translate-x-1/2 left-1/2")
})
$("#popupOverlay").click(() => {
    $("#popupOverlay").addClass("-translate-x-full")
    $("#popup").removeClass("-translate-x-1/2 left-1/2")
    $("#popup").addClass("translate-x-[3000px]")
})