$(".login_button").click(function () {
    var code = $(".code_input").val();
    if (code.length < 4) {
        $(".error_1").css("display", "block");
        $(".error_2").css("display", "none");
    } else if (code != "boba") {
        $(".error_1").css("display", "none");
        $(".error_2").css("display", "block");
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:5502/login?usercode=boba");
        xhr.onload = () => {
            console.log(xhr.response);
            sessionStorage.setItem("brainData", xhr.response);
            console.log("stored!");
            console.log(sessionStorage.getItem("brainData"));
            window.location = "./index.html";
        };
        xhr.send();
        // $(".error_1").css("display", "none");
        //window.location.pathname = "index.html";
    }
});
