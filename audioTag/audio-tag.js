let audioElement = document.querySelector("audio");
let playButton = document.querySelector("#play");
let nextButton = document.querySelector("#next");
let sources = audioElement.getElementsByTagName("source");


playButton.addEventListener("click", () => {
    if (audioElement.paused)
        audioElement.play();
    else
        audioElement.pause();
});


nextButton.addEventListener("click", () => {
    for (i = 0; i < sources.length; i++) {
        if (audioElement.currentSrc == sources[i].src) {
            let nextI = (i + 1) % sources.length;
            audioElement.src = sources[nextI].src;
            audioElement.play();
            break;
        }
    }

});