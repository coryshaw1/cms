$(window).load(function() {
    var iof = $(document.body).height() < $("#icon-content").height() + 50 + 80;
    var ctp;
    if (!iof) {
        $("#icon-page").css("height", "calc(100% - 50px)");
        ctp = parseInt($("#icon-content").css("padding-top"), 10);
        $("#icon-content").css("top", ws / 3 - ctp);
    }
    var iof = $(document.body).height() < $("#info-page").height() + 50;
    if (!iof) {
        $("#info-page").css("height", "100%");
        var ws = $("#info-page").height() - $("#info-content").height();
        $("#info-content").css("top", ws / 2);
    }
    $('.bookmark').mouseenter(function() {
        $('.tooltip').show();
    });
    $('.bookmark').mouseleave(function() {
        $('.tooltip').hide();
    });
});
