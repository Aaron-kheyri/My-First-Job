// ============================
// GAME DATA
// ============================


let playerName = "";

let playerJob = "";

let playerPay = 0;


let xp = 0;

let money = 0;

let energy = 100;

let workXP = 0;






// ============================
// SCREEN SYSTEM
// ============================


function nextScreen(screenID) {


    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });


    document.getElementById(screenID).classList.add("active");


}








// ============================
// START GAME
// ============================


function startGame(){

    nextScreen("profileScreen");

}








// ============================
// CREATE PROFILE
// ============================


function createProfile(){


    playerName =
    document.getElementById("playerName").value;



    if(playerName === ""){


        alert("Please enter your name!");

        return;


    }



    document.getElementById("welcomeMessage").innerHTML =

    "Welcome " + playerName +
    "! Your first job journey starts now.";



    nextScreen("welcomeScreen");



}








// ============================
// TFN QUIZ
// ============================


function answerTFN(correct){



    let feedback =
    document.getElementById("tfnFeedback");



    if(correct){


        xp += 10;


        feedback.innerHTML =

        "🟩 Correct!<br><br>" +

        "A TFN identifies you for tax purposes. " +
        "It helps your employer report your income correctly." +
        "<br><br>+10 Knowledge XP";



        setTimeout(()=>{


            nextScreen("jobScreen");


        },3500);



    }


    else{


        feedback.innerHTML =


        "🟥 Not quite.<br><br>" +

        "A TFN does not decide your pay or give access to your bank account. " +
        "It is used for tax purposes.";



    }


}








// ============================
// JOB SYSTEM
// ============================


function chooseJob(job,pay){



    playerJob = job;

    playerPay = pay;



    document.getElementById("jobMessage").innerHTML =


    "Congratulations! You have been accepted as a " 
    + job + ".";



    nextScreen("acceptedScreen");



}









// ============================
// SHIFT SYSTEM
// ============================


function shiftChoice(choice){



    if(choice === 1){



        workXP += 5;

        money += 250;

        energy -= 5;



        document.getElementById("shiftFeedback").innerHTML =


        "🟩 Great work!<br><br>" +

        "You helped the customer and showed great workplace skills.";



    }



    else if(choice === 2){



        workXP += 3;

        money += 250;

        energy -= 8;



        document.getElementById("shiftFeedback").innerHTML =


        "🟩 Good decision!<br><br>" +

        "Asking questions helps you learn and improve.";



    }




    else {



        money += 250;

        energy -= 15;



        document.getElementById("shiftFeedback").innerHTML =


        "🟥 Your manager noticed you could have helped more.";

    }





    document.getElementById("money").innerHTML = money;


    document.getElementById("workXP").innerHTML = workXP;


    document.getElementById("energy").innerHTML = energy;





    setTimeout(()=>{


        nextScreen("phoneScreen");


    },3000);



}









// ============================
// PAYSLIP
// ============================



function openPayslip(){



    document.getElementById("payName").innerHTML =
    playerName;



    document.getElementById("payJob").innerHTML =
    playerJob;



    nextScreen("payslipScreen");


}









// ============================
// TAX QUIZ
// ============================



function answerTax(correct){



    let feedback =
    document.getElementById("taxFeedback");



    if(correct){



        xp += 10;


        feedback.innerHTML =


        "🟩 Correct!<br><br>" +

        "Tax helps fund important community services " +
        "such as schools, hospitals and emergency services." +
        "<br><br>+10 Knowledge XP";




        setTimeout(()=>{


            nextScreen("superScreen");


        },3500);



    }



    else {



        feedback.innerHTML =


        "🟥 Not quite.<br><br>" +

        "Tax is not a workplace fee. " +
        "It helps fund services used by the community.";


    }



}








// ============================
// SUPER QUIZ
// ============================



function answerSuper(correct){



    let feedback =

    document.getElementById("superFeedback");



    if(correct){


        xp += 10;



        feedback.innerHTML =


        "🟩 Correct!<br><br>" +

        "Superannuation is money your employer contributes " +
        "into a super fund to help save for your future." +
        "<br><br>+10 Knowledge XP";




        setTimeout(()=>{


            finishGame();


        },3500);




    }



    else {



        feedback.innerHTML =


        "🟥 Not quite.<br><br>" +

        "Super is not extra spending money. " +
        "It is saved for your future.";



    }



}









// ============================
// FINAL REPORT
// ============================


function finishGame(){



    document.getElementById("finalMessage").innerHTML =


    "Amazing work " + playerName +
    "! You completed your first job journey and learned your responsibilities as an employee."+
    "<br><br>Final Knowledge XP: " + xp;



    nextScreen("finalScreen");



}
