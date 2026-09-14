const cover = document.querySelector(".scrapbook-cover");

cover.addEventListener("click", function () {
    cover.parentElement.classList.toggle("open");
});

const buttons = document.querySelectorAll(".float-btn");

buttons.forEach((button) => {
const contact = document.querySelector("#contact");

let x = Math.random() * (contact.clientWidth - button.offsetWidth);
let y = Math.random() * (contact.clientHeight - button.offsetHeight);

let speedX = 1.5;
let speedY = 1.5;

function moveButton() {
x += speedX;
y += speedY;

if (x <= 0 || x + button.offsetWidth >= contact.clientWidth) {
speedX *= -1;
}

if (y <= 0 || y + button.offsetHeight >= contact.clientHeight) {
speedY *= -1;
}

button.style.left = x + "px";
button.style.top = y + "px";

requestAnimationFrame(moveButton);
}

moveButton();
});