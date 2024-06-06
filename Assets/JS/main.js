/* мобильное меню */
$("#toggler").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menu").toggleClass("max-lg:top-full")
    $("body").toggleClass("overflow-hidden")
})


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