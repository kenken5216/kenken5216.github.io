var RecycleIMG = document.getElementById("RecycleBinIMG");
var RecycleText = document.getElementsByClassName("center-RecycleBin");
var MyPC = document.getElementById("MyPC");
var current = new Date();

document.getElementById("time").innerHTML = current.getHours() + ":" + current.getMinutes();

RecycleIMG.addEventListener("mousedown", function () {
    this.style.filter = "brightness(60%)";
})

RecycleIMG.addEventListener("mouseup", function () {
    this.style.filter = "brightness(100%)";
})

MyPC.addEventListener("mousedown", function () {
    this.style.filter = "brightness(60%)";
})

MyPC.addEventListener("mouseup", function () {
    this.style.filter = "brightness(100%)";
})
