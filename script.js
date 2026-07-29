const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");

const characterScreen = document.getElementById("characterScreen");

startButton.onclick = function () {

    homeScreen.style.display = "none";

    characterScreen.style.display = "block";

};

document.getElementById("continueButton").onclick = function () {

    const name = document.getElementById("playerName").value;

    if (name === "") {

        alert("Please enter your name!");

        return;

    }

    alert("Welcome " + name + "! Your journey begins.");

};
