
function checkDevice() {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const mobileContent = document.getElementById("mobile-content");
    const desktopWarning = document.getElementById("desktop-warning");

    if (isMobile) {
        mobileContent.style.display = "block";
        desktopWarning.style.display = "none";
    } else {
        mobileContent.style.display = "none";
        desktopWarning.style.display = "flex";
    }
}

// Run on load and resize
window.addEventListener("load", checkDevice);
window.addEventListener("resize", checkDevice);