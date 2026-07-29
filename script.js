const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");

const characterScreen = document.getElementById("characterScreen");

const jobScreen = document.getElementById("jobScreen");


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


    characterScreen.style.display = "none";

    jobScreen.style.display = "block";

    document.getElementById("welcomeText").innerHTML =
    "Welcome " + name + "! Choose your first job.";

};
