$(document).ready(function () {
    console.log(sessionStorage.getItem("brainData"));
});
var wrinkle_count = sessionStorage.getItem("brainData");

const img_url = "/assets/brain";
const extention = ".png";

$(".brain_wrinkle").click(function () {
    var name = $(this).closest(".brain_container").find("h1")[0].innerHTML;
    var max_announcement = "BIG BRAINS";
    var image_source = $(this)
        .closest(".brain_container")
        .find("img")
        .attr("src");
    wrinkle_count[name]++;
    if (wrinkle_count[name] == 1) {
        $(this)
            .closest(".brain_button")
            .find(".brain_smooth")
            .prop("disabled", false);
    }
    if (wrinkle_count[name] == 30) {
        alert(max_announcement);
        $(this).prop("disabled", true);
    }
    var new_image_source = img_url + wrinkle_count[name] + extention;
    $(this)
        .closest(".brain_container")
        .find("img")
        .attr("src", new_image_source);
});

$(".brain_smooth").click(function () {
    let name = $(this).closest(".brain_container").find("h1")[0].innerHTML;
    let min_announcement = `${name}'s brain is completely smooth! Move him to 291 immediately!`;
    wrinkle_count[name]--;
    if (wrinkle_count[name] == 0) {
        alert(min_announcement);
        $(this).prop("disabled", true);
    }

    if (wrinkle_count[name] == 29) {
        $(this)
            .closest(".brain_button")
            .find(".brain_wrinkle")
            .prop("disabled", false);
    }

    var new_image_source = img_url + wrinkle_count[name] + extention;
    $(this)
        .closest(".brain_container")
        .find("img")
        .attr("src", new_image_source);
});
