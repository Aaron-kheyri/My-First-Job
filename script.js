const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const characterScreen = document.getElementById("characterScreen");
const jobScreen = document.getElementById("jobScreen");
const shiftScreen = document.getElementById("shiftScreen");


let playerName = "";
let playerJob = "";


startButton.onclick = function () {

    homeScreen.style.display = "none";
    characterScreen.style.display = "block";

};


document.getElementById("continueButton").onclick = function () {

    playerName = document.getElementById("playerName").value;


    if (playerName === "") {

        alert("Please enter your name!");
        return;

    }


    characterScreen.style.display = "none";
    jobScreen.style.display = "block";


    document.getElementById("welcomeText").innerHTML =
    "Welcome " + playerName + "! Choose your first job.";

};



const jobButtons = document.querySelectorAll(".jobButton");


jobButtons[0].onclick = function() {

    chooseJob("🍔 Fast Food Worker");

};


jobButtons[1].onclick = function() {

    chooseJob("🛒 Retail Assistant");

};


jobButtons[2].onclick = function() {

    chooseJob("☕ Café Worker");

};



function chooseJob(job) {

    playerJob = job;


    jobScreen.style.display = "none";

    shiftScreen.style.display = "block";


    document.getElementById("jobWelcome").innerHTML =
    playerName + ", you are now a " + playerJob + "!";

}
