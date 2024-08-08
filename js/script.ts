const raters = document.querySelectorAll(".rating-button");
const rate = document.querySelector(".rating-main__submit");
const firstScreen = document.querySelector(".rating-main");
const secondScreen = document.querySelector(".thanks-main");
const number = document.querySelector(".rating-number");

let ratingDigit: number = 0;

raters.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("picked-rating");
    ratingDigit = parseInt(button.textContent || "", 10);
  });
});

rate?.addEventListener("click", () => {
  if (number) {
    number.textContent = ratingDigit.toString();
  }
  if (firstScreen && secondScreen) {
    firstScreen.classList.add("hidden");
    secondScreen.classList.remove("hidden");
  }
});
