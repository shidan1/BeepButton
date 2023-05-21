document.getElementById('beepButton').addEventListener('click', function() {
    var audio = new Audio('beep.mp3');
    audio.play();
});
