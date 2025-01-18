function getIcon(e) {
    const iconAvatar = document.getElementById("iconAvatar");

    iconAvatar.innerText = e.innerText;
    // Remove existing animation classes to reset the animation
    iconAvatar.classList.remove("animate__zoomInLeft");

    // Trigger a reflow to restart animation
    void iconAvatar.offsetWidth;
    
    // Add the animation classes again
    iconAvatar.classList.add("animate__zoomInLeft");
}
function toggleThemeMode(e){
    const themeMode = e.innerText == "☽" ? "dark" : "light";
    e.innerText = themeMode == "dark" ? "☀︎" : "☽";
    document.querySelector("html").setAttribute("data-bs-theme",themeMode);
}
