const animate = document.getElementById("animate");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
startBtn.addEventListener("click", function () {
    animate.style.animation = "trains 12s linear infinite";
});

stopBtn.addEventListener("click", function () {
    // Get the current position of the train
    const computedStyle = window.getComputedStyle(animate);
    const currentLeft = computedStyle.getPropertyValue("left");
    // Set the current position as the animation-fill-mode
    animate.style.animation = "none";
    animate.style.left = currentLeft;
});