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





// CREATE CHARACTER

document.getElementById("continueButton").onclick = function() {


    playerName = document.getElementById("playerName").value;


    if (playerName === "") {

        alert("Please enter your name!");

        return;

    }


    characterScreen.style.display = "none";

    tfnScreen.style.display = "block";


    document.getElementById("tfnStory").innerHTML =
    "You finished your interview and got offered your first job!";

};







// TFN CORRECT ANSWER

document.getElementById("tfnCorrect").onclick = function() {


    document.getElementById("tfnResult").innerHTML =
    "Correct! A TFN is used to identify you for tax purposes. Your employer uses it to help manage your tax and report your income correctly.";


    setTimeout(function(){


        tfnScreen.style.display = "none";

        jobScreen.style.display = "block";


        document.getElementById("welcomeText").innerHTML =
        "Welcome " + playerName + "! Choose your first job.";


    }, 3000);


};






// TFN WRONG ANSWER 1

document.getElementById("tfnWrong1").onclick = function() {


    document.getElementById("tfnResult").innerHTML =
    "Not quite. Your TFN does not give your employer access to your bank account. A TFN helps manage your tax responsibilities when you earn money.";

};







// TFN WRONG ANSWER 2

document.getElementById("tfnWrong2").onclick = function() {


    document.getElementById("tfnResult").innerHTML =
    "Not quite. Your TFN does not decide your wage. Your pay depends on your job and workplace agreement. Your TFN is used for tax purposes.";

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


    completeTask(
        10,
        95,
        "Great work! The customer appreciated your help."
    );


};




document.getElementById("choice2").onclick = function(){


    completeTask(
        5,
        90,
        "Good choice! Asking questions shows responsibility."
    );


};




document.getElementById("choice3").onclick = function(){


    completeTask(
        0,
        85,
        "Your manager noticed you could have helped more."
    );


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
