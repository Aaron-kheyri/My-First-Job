const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const characterScreen = document.getElementById("characterScreen");
const jobScreen = document.getElementById("jobScreen");
const shiftScreen = document.getElementById("shiftScreen");


let playerName = "";
let playerJob = "";

let money = 0;
let experience = 0;
let energy = 100;


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

    chooseJob("🍔 Fast Food Worker", 25);

};


jobButtons[1].onclick = function() {

    chooseJob("🛒 Retail Assistant", 27);

};


jobButtons[2].onclick = function() {

    chooseJob("☕ Café Worker", 26);

};



function chooseJob(job, pay) {

    playerJob = job;

    jobScreen.style.display = "none";
    shiftScreen.style.display = "block";


    document.getElementById("jobWelcome").innerHTML =
    playerName + ", you are now a " + playerJob + "!";

}



document.getElementById("startShiftButton").onclick = function() {


    document.getElementById("startShiftButton").style.display = "none";

    document.getElementById("shiftEvent").style.display = "block";


    document.getElementById("eventText").innerHTML =
    "Your manager asks you to help a customer who needs assistance.";


    document.getElementById("choice1").innerHTML =
    "Help the customer politely";


    document.getElementById("choice2").innerHTML =
    "Ask your manager for help";


    document.getElementById("choice3").innerHTML =
    "Ignore the customer";

};



document.getElementById("choice1").onclick = function() {

    completeTask(10, 5, "Great work! The customer appreciated your help.");

};


document.getElementById("choice2").onclick = function() {

    completeTask(5, 10, "Good decision! Asking for help shows responsibility.");

};


document.getElementById("choice3").onclick = function() {

    completeTask(-5, 0, "Your manager noticed you could have helped more.");

};



function completeTask(xpChange, energyChange, message) {


    experience += xpChange;

    energy += energyChange;

    money += 50;


    document.getElementById("experience").innerHTML = experience;

    document.getElementById("energy").innerHTML = energy;

    document.getElementById("money").innerHTML = money;


    document.getElementById("resultText").innerHTML = message +
    "<br><br>Shift complete! You earned $50.";


    document.getElementById("shiftEvent").style.display = "none";

}
