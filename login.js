$(".login_button").click(function () {
    var code = $(".code_input").val();
    if (code.length < 4) {
        $(".error_1").css("display", "block");
        $(".error_2").css("display", "none");
    } else if (code != "boba") {
        $(".error_1").css("display", "none");
        $(".error_2").css("display", "block");
    } else {
        $(".error_1").css("display", "none");
        window.location.pathname = "index.html";
    }
});
