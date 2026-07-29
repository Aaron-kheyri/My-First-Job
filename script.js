const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const characterScreen = document.getElementById("characterScreen");
const tfnScreen = document.getElementById("tfnScreen");
const jobScreen = document.getElementById("jobScreen");
const shiftScreen = document.getElementById("shiftScreen");


let playerName = "";
let playerJob = "";
let playerPay = 0;

let money = 0;
let experience = 0;
let energy = 100;



// START GAME

startButton.onclick = function() {

    homeScreen.style.display = "none";
    characterScreen.style.display = "block";

};





// ENTER NAME

document.getElementById("continueButton").onclick = function() {


    playerName = document.getElementById("playerName").value;


    if (playerName === "") {

        alert("Please enter your name!");

        return;

    }


    characterScreen.style.display = "none";

    tfnScreen.style.display = "block";


    document.getElementById("tfnStory").innerHTML =
    "Congratulations " + playerName + "! You have been offered your first job.";

};






// TFN CORRECT ANSWER

document.getElementById("tfnCorrect").onclick = function() {


    document.getElementById("tfnResult").innerHTML =
    "✅ Correct! Your TFN helps your employer and the ATO manage your tax correctly. Now you can continue setting up your first job.";


    setTimeout(function(){


        tfnScreen.style.display = "none";

        jobScreen.style.display = "block";


        document.getElementById("welcomeText").innerHTML =
        "Welcome " + playerName + "! Choose your first job.";


    }, 2500);


};






// TFN WRONG ANSWERS


document.getElementById("tfnWrong1").onclick = function() {


    document.getElementById("tfnResult").innerHTML =
    "Not quite. Your TFN is not used to access your bank account. It is used for tax purposes.";

};



document.getElementById("tfnWrong2").onclick = function() {


    document.getElementById("tfnResult").innerHTML =
    "Not quite. Your TFN does not decide your wage. It helps manage your tax responsibilities.";

};







// JOB SELECTION


const jobButtons = document.querySelectorAll(".jobButton");



jobButtons[0].onclick = function(){

    chooseJob("🍔 Fast Food Worker", 25);

};



jobButtons[1].onclick = function(){

    chooseJob("🛒 Retail Assistant", 27);

};



jobButtons[2].onclick = function(){

    chooseJob("☕ Café Worker", 26);

};





function chooseJob(job, pay) {


    playerJob = job;

    playerPay = pay;


    jobScreen.style.display = "none";

    shiftScreen.style.display = "block";


    document.getElementById("jobWelcome").innerHTML =
    playerName + ", you are now a " + playerJob + "!";


}






// START SHIFT


document.getElementById("startShiftButton").onclick = function(){


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







// SHIFT CHOICES


document.getElementById("choice1").onclick = function(){

    completeTask(10, 95, "Great work! The customer appreciated your help.");

};



document.getElementById("choice2").onclick = function(){

    completeTask(5, 90, "Good decision! Asking for help shows responsibility.");

};



document.getElementById("choice3").onclick = function(){

    completeTask(0, 85, "Your manager noticed you could have helped more.");

};







function completeTask(xp, newEnergy, message){


    experience += xp;

    energy = newEnergy;

    money += 50;



    document.getElementById("experience").innerHTML = experience;

    document.getElementById("energy").innerHTML = energy;

    document.getElementById("money").innerHTML = money;



    document.getElementById("resultText").innerHTML =
    message + "<br><br>Shift complete! You earned $50.";

}
