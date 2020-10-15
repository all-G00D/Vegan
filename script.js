$(function () {

    /* Drop Down Menu Active */
    
    $("#nav-toggle-menu").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#drop-down-menu").toggleClass("active");
        $("#drop-down-magazine").removeClass("active");
    });
    
    $("#nav-toggle-magazine").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#drop-down-magazine").toggleClass("active");
        $("#drop-down-menu").removeClass("active");
    });
    
    /* Menu Nav Toggle Burger */
    $("#nav-toggle-burger").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav-toggle-drop-down").toggleClass("active");
        $(".filter").toggleClass("active");
    });
    
    /* Nav toggle drop down Active */
    $("#nav-toggle-drop-down-item").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#drop-down__menu-list--nav-toggle").toggleClass("active");
        $("#drop-down__menu-list--nav-toggle-2").removeClass("active");
    });
    
    $("#nav-toggle-drop-down-item-2").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#drop-down__menu-list--nav-toggle-2").toggleClass("active");
        $("#drop-down__menu-list--nav-toggle").removeClass("active");
    });

});
