var RecycleIMG = document.getElementById("RecycleBinIMG");
var RecycleText = document.getElementsByClassName("center-RecycleBin");
var MyPC = document.getElementById("MyPC");
const current = new Date();
var MyPC_tabs = document.getElementById("MyPC_tabs");
var MyPC_tabs_close = document.getElementById("MyPC_tabs_close");
var MyPC_tabs_ok = document.getElementById("MyPC_tabs_ok");
var MyPC_tabs_cancel = document.getElementById("MyPC_tabs_cancel");

var current_hour = current.getHours();
var current_mins = current.getMinutes();
hour = current_hour.toString();
mins = current_mins.toString();


if (hour.length == 2 && mins.length == 2) {
    document.getElementById("time").innerHTML = current.getHours() + ":" + current.getMinutes();
}
if (hour.length == 1 && mins.length == 2) {
    document.getElementById("time").innerHTML = "0" + current.getHours() + ":" + current.getMinutes();
}
if (hour.length == 1 && mins.length == 1) {
    document.getElementById("time").innerHTML = "0" + current.getHours() + ":" + "0" + current.getMinutes();
}
if (hour.length == 2 && mins.length == 1) {
    document.getElementById("time").innerHTML = current.getHours() + ":" + "0" + current.getMinutes();
}

// document.getElementById("time").innerHTML = current.getHours() + ":" + current.getMinutes();


RecycleIMG.addEventListener("mousedown", function () {
    this.style.filter = "brightness(60%)";
})

RecycleIMG.addEventListener("mouseup", function () {
    this.style.filter = "brightness(100%)";
})

MyPC.addEventListener("mousedown", function () {
    this.style.filter = "brightness(60%)";
    MyPC_tabs.hidden = "";
})

MyPC.addEventListener("mouseup", function () {
    this.style.filter = "brightness(100%)";
})

MyPC_tabs_close.addEventListener("mouseup", function () {
    MyPC_tabs.hidden = "true";
})
MyPC_tabs_ok.addEventListener("mouseup", function () {
    MyPC_tabs.hidden = "true";
})
MyPC_tabs_cancel.addEventListener("mouseup", function () {
    MyPC_tabs.hidden = "true";
})



var first_button = document.getElementById("first_button")
var second_button = document.getElementById("second_button")
var third_button = document.getElementById("third_button")
var first_content = document.getElementById("first_content")
var second_content = document.getElementById("second_content")
var third_content = document.getElementById("third_content")


first_button.addEventListener("mouseup", function () { //first button click
    this.ariaSelected = "true";
    second_button.ariaSelected = "false";
    third_button.ariaSelected = "false";
    first_content.hidden = "";
    second_content.hidden = "true";
    third_content.hidden = "true";
})

second_button.addEventListener("mouseup", function () { // second buton click
    this.ariaSelected = "true";
    first_button.ariaSelected = "false";
    third_button.ariaSelected = "false";
    second_content.hidden = "";
    first_content.hidden = "true";
    third_content.hidden = "true";
})

third_button.addEventListener("mouseup", function () { //third buton click
    third_button.ariaSelected = "true";
    first_button.ariaSelected = "false";
    second_button.ariaSelected = "false";
    third_content.hidden = "";
    first_content.hidden = "true";
    second_content.hidden = "true";
})