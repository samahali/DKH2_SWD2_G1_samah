function showAudio() {
    document.getElementsByTagName("audio")[0].setAttribute("controls", "controls");
}

function hideAudio() {
    document.getElementsByTagName("audio")[0].removeAttribute("controls");
}

function playAudio() {
    showAudio();
    document.getElementsByTagName("audio")[0].play();
}

function stopAudio() {
    let audio = document.getElementsByTagName("audio")[0];
    audio.pause();
    audio.currentTime = 0; // Reset audio to start
}