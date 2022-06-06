var audio = document.getElementById("audio");

function on() {
    document.getElementById("overlay").style.display = "block";
    setTimeout(function () { audio.play(); }, 1500);
}

function off() {
    document.getElementById("overlay").style.display = "none";
    setTimeout(function () { audio.play(); }, 1500);
}

