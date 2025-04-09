var timesClicked = 0;

document.getElementById("PAGE_HEADER").innerText += " Page";

document.getElementById("BTN").onclick = function() {
    timesClicked ++;
    timesClicked === 1 ? alert("NO!") : timesClicked === 2 ? alert("WHAT DON'T YOU UNDERSTAND") : alert("...");
}