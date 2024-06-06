/* мобильное меню */
$("#toggler").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menu").toggleClass("max-lg:top-full")
    $("body").toggleClass("overflow-hidden")
})