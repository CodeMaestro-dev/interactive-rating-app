var ratingButton = document.querySelectorAll(".rating-button");
var submit = document.querySelector(".rating-main__submit");
var ratingMain = document.querySelector(".rating-main");
var thanksMain = document.querySelector(".thanks-main");
var ratingNumber = document.querySelector(".rating-number");
var rating = 0;
ratingButton.forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("picked-rating");
        rating = parseInt(button.textContent || "", 10);
        console.log(rating);
    });
});
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", function () {
    console.log("click");
    showNextPage = true;
    if (ratingNumber) {
        ratingNumber.textContent = rating.toString();
    }
    ratingMain.classList.add("hidden");
    thanksMain.classList.remove("hidden");
});
