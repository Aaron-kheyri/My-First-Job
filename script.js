// ===================================
// MY FIRST JOB SIMULATOR
// FINAL SCRIPT VERSION 3.1
// ===================================


// GAME DATA

let playerName = "";

let playerJob = "";

let playerPay = 0;


let xp = 0;

let money = 0;

let energy = 100;

let workXP = 0;

let selectedAvatar = "😀";









// ===================================
// SCREEN SYSTEM
// ===================================


function nextScreen(screenID){


    document.querySelectorAll(".screen").forEach(screen => {


        screen.classList.remove("active");


    });



    document.getElementById(screenID).classList.add("active");


}









// ===================================
// START GAME
// ===================================


function startGame(){


    nextScreen("profileScreen");


}









// ===================================
// PROFILE CREATION
// ===================================


document.querySelectorAll(".avatar").forEach(button => {


    button.onclick = function(){


        selectedAvatar = button.innerHTML;


        document.querySelectorAll(".avatar").forEach(a=>{


            a.style.background="#eee";


        });



        button.style.background="#667eea";


    };


});







function createProfile(){


    playerName =
    document.getElementById("playerName").value;



    if(playerName === ""){


        alert("Please enter your name!");

        return;


    }



    document.getElementById("welcomeMessage").innerHTML =


    selectedAvatar +
    " Welcome " +
    playerName +
    "! Your first job journey begins now.";



    nextScreen("welcomeScreen");


}









// ===================================
// TFN QUIZ
// ===================================


function answerTFN(correct){



    let feedback =
    document.getElementById("tfnFeedback");




    if(correct){



        xp += 10;



        feedback.innerHTML =


        "🟩 Correct!<br><br>" +

        "A Tax File Number (TFN) is used to identify you " +

        "for tax purposes. It helps your employer report " +

        "your income correctly." +

        "<br><br>+10 Knowledge XP";





        setTimeout(()=>{


            nextScreen("jobScreen");


        },3500);





    }



    else {



        feedback.innerHTML =


        "🟥 Not quite.<br><br>" +

        "A TFN does not decide your wage and it does not " +

        "give your employer access to your bank account.";



    }



}









// ===================================
// JOB SYSTEM
// ===================================


function chooseJob(job,pay){



    playerJob = job;

    playerPay = pay;



    document.getElementById("jobMessage").innerHTML =


    "Congratulations! You have been accepted as a " +

    playerJob +

    ".<br><br>Your first shift begins tomorrow.";



    nextScreen("acceptedScreen");


}









// ===================================
// SHIFT SYSTEM
// ===================================



function shiftChoice(choice){



    let feedback =
    document.getElementById("shiftFeedback");




    money += 250;




    if(choice === 1){


        workXP += 5;

        energy -= 5;



        feedback.innerHTML =


        "🟩 Great choice!<br><br>" +

        "You helped the customer and showed strong " +

        "workplace skills.<br><br>+5 Workplace XP";



    }




    else if(choice === 2){



        workXP += 3;

        energy -= 8;



        feedback.innerHTML =


        "🟩 Good decision!<br><br>" +

        "Asking your manager for help shows responsibility." +

        "<br><br>+3 Workplace XP";



    }





    else {



        energy -= 15;



        feedback.innerHTML =


        "🟥 Your manager noticed you ignored a customer." +

        "<br><br>You can learn from this experience.";



    }






    document.getElementById("money").innerHTML =
    money;



    document.getElementById("workXP").innerHTML =
    workXP;



    document.getElementById("energy").innerHTML =
    energy;






    setTimeout(()=>{


        nextScreen("phoneScreen");


    },3000);



}
// ===================================
// PAYSLIP SYSTEM
// ===================================


function openPayslip(){


    document.getElementById("payName").innerHTML =
    playerName;


    document.getElementById("payJob").innerHTML =
    playerJob;



    nextScreen("payslipScreen");


}









// ===================================
// TAX QUIZ
// ===================================


function answerTax(correct){


    let feedback =
    document.getElementById("taxFeedback");




    if(correct){



        xp += 10;



        feedback.innerHTML =


        "🟩 Correct!<br><br>" +

        "Tax is money collected by the government " +

        "from people who earn income. " +

        "It helps pay for services like schools, hospitals, " +

        "roads and emergency services." +

        "<br><br>+10 Knowledge XP";






        setTimeout(()=>{


            nextScreen("superScreen");


        },3500);





    }




    else {



        feedback.innerHTML =


        "🟥 Not quite.<br><br>" +

        "Tax is not a workplace fee. " +

        "It helps fund important community services.";



    }




}









// ===================================
// SUPER QUIZ
// ===================================


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

        "Superannuation is not money you can spend " +

        "straight away. It is saved for your future.";



    }




}









// ===================================
// FINAL REPORT
// ===================================


function finishGame(){



    let level = "";

    let stars = "";





    if(xp >= 40){


        level = "🏆 Outstanding Employee";

        stars = "⭐⭐⭐⭐⭐";


    }



    else if(xp >= 25){


        level = "⭐ Workplace Ready";

        stars = "⭐⭐⭐⭐";


    }



    else {


        level = "📚 New Starter";

        stars = "⭐⭐⭐";


    }





    document.getElementById("finalMessage").innerHTML =


    "Congratulations " + playerName + "!" +

    "<br><br>You completed your first job journey." +

    "<br><br>📄 TFN Knowledge ✅" +

    "<br>💰 Tax Knowledge ✅" +

    "<br>🧾 Payslip Skills ✅" +

    "<br>🏦 Super Knowledge ✅" +

    "<br><br>Final Knowledge XP: " + xp +

    "<br><br>" +

    level +

    "<br>" +

    stars;





    nextScreen("finalScreen");



}









// ===================================
// PLAY AGAIN SYSTEM
// ===================================



function restartGame(){



    playerName = "";

    playerJob = "";

    playerPay = 0;


    xp = 0;

    money = 0;

    energy = 100;

    workXP = 0;


    selectedAvatar = "😀";




    document.getElementById("playerName").value = "";



    document.getElementById("xp").innerHTML = "0";

    document.getElementById("money").innerHTML = "0";

    document.getElementById("workXP").innerHTML = "0";

    document.getElementById("energy").innerHTML = "100";




    document.getElementById("tfnFeedback").innerHTML = "";

    document.getElementById("taxFeedback").innerHTML = "";

    document.getElementById("superFeedback").innerHTML = "";

    document.getElementById("shiftFeedback").innerHTML = "";




    nextScreen("homeScreen");



}








function returnHome(){


    nextScreen("homeScreen");


}








// ===================================
// BUTTON CONNECTIONS
// ===================================


document.getElementById("openPayslipButton")?.addEventListener(

"click",

openPayslip

);
