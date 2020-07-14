$(document).ready(function () {});
var wrinkle_count_JSON = JSON.parse(sessionStorage.getItem("brainData"));
const usercode = wrinkle_count_JSON[0]["usercode"];
var wrinkle_count = {};

wrinkle_count_JSON.forEach((element) => {
    var wrinkle = parseInt(element["score"]);
    if (wrinkle == 0) {
        wrinkle = 1;
    } else if (wrinkle == 30) {
        wrinkle = 29;
    }
    wrinkle_count[element["name"]] = wrinkle;
});

console.log(wrinkle_count);

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
    update_wrinkle(1, name);
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
    update_wrinkle(-1, name);
    var new_image_source = img_url + wrinkle_count[name] + extention;
    $(this)
        .closest(".brain_container")
        .find("img")
        .attr("src", new_image_source);
});

function update_wrinkle(count, name) {
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:5502/wrinkle?name=${name}&wrinkle=${count}&code=${usercode}`;
    xhr.open("GET", url);
    xhr.onload = () => {
        console.log(xhr.response);
        return;
    };
    xhr.send();
}
