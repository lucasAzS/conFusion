$(document).ready(function () {
    $("#my-carousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function () {
        if (
            $("#carouselButton")
            .children("span")
            .hasClass("fa-pause")
        ) {
            $("#my-carousel").carousel("pause");
            $("#carouselButton")
                .children("span")
                .removeClass("fa-pause");
            $("#carouselButton")
                .children("span")
                .addClass("fa-play");
        } else if (
            $("#carouselButton")
            .children("span")
            .hasClass("fa-play")
        ) {
            $("#my-carousel").carousel("cycle");
            $("#carouselButton")
                .children("span")
                .removeClass("fa-play");
            $("#carouselButton")
                .children("span")
                .addClass("fa-pause");
        }
    });
    $("#loginButton").click(function () {
        $("#loginModal").modal("toggle");
    });
    $("#reserveButton").click(function () {
        $("#reserveModal").modal("toggle");
    });
});
