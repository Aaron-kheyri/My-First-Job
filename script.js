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
    "You finished your interview and got offered your first job!";


};







// TFN QUESTION


document.getElementById("tfnCorrect").onclick = function(){


    document.getElementById("tfnResult").innerHTML =
    "Correct! A TFN identifies you for tax purposes. Your employer uses it to help manage your tax and report your income correctly.";



    setTimeout(function(){


        tfnScreen.style.display = "none";

        jobScreen.style.display = "block";


        document.getElementById("welcomeText").innerHTML =
        "Welcome " + playerName + "! Choose your first job.";


    },3000);


};




document.getElementById("tfnWrong1").onclick = function(){


    document.getElementById("tfnResult").innerHTML =
    "Not quite. Your TFN does not give your employer access to your bank account. It is used for tax purposes when you earn money.";

};





document.getElementById("tfnWrong2").onclick = function(){


    document.getElementById("tfnResult").innerHTML =
    "Not quite. Your TFN does not decide your wage. Your job and workplace agreement determine your pay.";

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
        "Good choice! Asking for help shows responsibility."
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
    message + "<br><br>Your first pay has arrived!";


    setTimeout(function(){


        shiftScreen.style.display = "none";

        payScreen.style.display = "block";


        document.getElementById("payJob").innerHTML =
        playerJob;


    },3000);


}









// SUPER QUESTION


document.getElementById("superCorrect").onclick = function(){


    document.getElementById("superResult").innerHTML =
    "Correct! Superannuation is money your employer contributes into your super fund to help save for your future.";


};





document.getElementById("superWrong1").onclick = function(){


    document.getElementById("superResult").innerHTML =
    "Not quite. Super is not extra spending money. It is saved for your future.";

};






document.getElementById("superWrong2").onclick = function(){


    document.getElementById("superResult").innerHTML =
    "Not quite. Super is not a workplace fee. It is a contribution made by your employer into your super fund.";

};
