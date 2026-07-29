const startButton = document.getElementById("startButton");

const homeScreen = document.getElementById("homeScreen");
const characterScreen = document.getElementById("characterScreen");
const tfnScreen = document.getElementById("tfnScreen");
const jobScreen = document.getElementById("jobScreen");
const shiftScreen = document.getElementById("shiftScreen");
const payScreen = document.getElementById("payScreen");


let playerName = "";
let playerJob = "";
let playerPay = 0;

let money = 0;
let experience = 0;
let energy = 100;



// START GAME

startButton.onclick = function(){

    homeScreen.style.display = "none";
    characterScreen.style.display = "block";

};




// ENTER NAME

document.getElementById("continueButton").onclick = function(){


    playerName = document.getElementById("playerName").value;


    if(playerName === ""){

        alert("Please enter your name!");

        return;

    }


    characterScreen.style.display = "none";
    tfnScreen.style.display = "block";


    document.getElementById("tfnStory").innerHTML =
    "You finished your interview and have been offered your first job!";

};







// TFN QUESTION


document.getElementById("tfnCorrect").onclick = function(){


    document.getElementById("tfnResult").innerHTML =

    "Correct! A Tax File Number (TFN) is a unique number used to identify you for tax purposes. When you earn money, your employer uses your TFN to help report your income and manage your tax responsibilities correctly.";



    setTimeout(function(){


        tfnScreen.style.display = "none";

        jobScreen.style.display = "block";


        document.getElementById("welcomeText").innerHTML =

        "Welcome " + playerName + "! Choose your first job.";


    },4000);


};






document.getElementById("tfnWrong1").onclick = function(){


    document.getElementById("tfnResult").innerHTML =

    "Not quite. Your TFN does not allow your employer to access your bank account. Bank details are separate. A TFN is used mainly to identify you for tax purposes when you earn income.";


};






document.getElementById("tfnWrong2").onclick = function(){


    document.getElementById("tfnResult").innerHTML =

    "Not quite. Your TFN does not decide your hourly wage. Your pay depends on your job, hours worked and workplace agreement. A TFN is connected to your tax responsibilities.";


};









// JOB SELECTION


const jobButtons = document.querySelectorAll(".jobButton");



jobButtons[0].onclick = function(){

    chooseJob("🍔 Fast Food Worker",25);

};



jobButtons[1].onclick = function(){

    chooseJob("🛒 Retail Assistant",27);

};



jobButtons[2].onclick = function(){

    chooseJob("☕ Café Worker",26);

};






function chooseJob(job,pay){


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

    completeShift(
        10,
        95,
        "Great work! The customer appreciated your help."
    );

};



document.getElementById("choice2").onclick = function(){

    completeShift(
        5,
        90,
        "Good decision! Asking questions shows responsibility."
    );

};



document.getElementById("choice3").onclick = function(){

    completeShift(
        0,
        85,
        "Your manager noticed you could have helped more."
    );

};








function completeShift(xp,newEnergy,message){


    experience += xp;

    energy = newEnergy;

    money += 250;



    document.getElementById("experience").innerHTML = experience;

    document.getElementById("energy").innerHTML = energy;

    document.getElementById("money").innerHTML = money;



    document.getElementById("resultText").innerHTML =

    message + "<br><br>Your first payslip has arrived!";



    setTimeout(function(){


        shiftScreen.style.display = "none";

        payScreen.style.display = "block";


        document.getElementById("payJob").innerHTML = playerJob;


    },3000);


}








// SUPER QUESTION


document.getElementById("superCorrect").onclick = function(){


    document.getElementById("superResult").innerHTML =

    "Correct! Superannuation is money your employer contributes into a super fund for you. It is saved for your future and is separate from the money you receive in your regular pay.";


};






document.getElementById("superWrong1").onclick = function(){


    document.getElementById("superResult").innerHTML =

    "Not quite. Superannuation is not extra spending money added to your normal pay. It is kept in a super fund to help support you financially in the future.";


};






document.getElementById("superWrong2").onclick = function(){


    document.getElementById("superResult").innerHTML =

    "Not quite. Superannuation is not a payment you make to your workplace. It is a contribution made by your employer into your super fund when you are eligible.";


};
