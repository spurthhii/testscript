const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too!";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; // Ensure button can move
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

.no-btn {
    position: absolute; /* This is necessary for 'left' and 'top' styles to work */
}

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Your corrected JavaScript code here
});
</script>
