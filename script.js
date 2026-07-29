// =====================================
// MY FIRST JOB SIMULATOR v3.2
// =====================================


// PLAYER DATA

let playerName = "";

let playerJob = "";

let playerPay = 0;

let xp = 0;

let money = 0;

let energy = 100;

let workXP = 0;

let avatar = "😀";


let badges = [];








// =====================================
// SCREEN SYSTEM
// =====================================


function nextScreen(screenID){


    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });



    document.getElementById(screenID).classList.add("active");


}








// =====================================
// PROGRESS SYSTEM
// =====================================


function updateProgress(amount, stage){


    document.getElementById("progressBar").style.width =
    amount + "%";


    document.getElementById("stageText").innerHTML =
    "Stage: " + stage;


}








// =====================================
// START
// =====================================


function startGame(){


    updateProgress(5,"Creating Employee Profile");


    nextScreen("profileScreen");


}








// =====================================
// PROFILE
// =====================================


document.querySelectorAll(".avatar").forEach(button=>{


    button.onclick=function(){


        avatar = button.innerHTML;


        document.querySelectorAll(".avatar").forEach(a=>{

            a.style.background="#eee";

        });



        button.style.background="#667eea";


    };


});






function createProfile(){


    playerName =
    document.getElementById("playerName").value;



    if(playerName===""){


        alert("Please enter your name!");

        return;


    }



    document.getElementById("welcomeMessage").innerHTML =


    avatar + " Welcome " + playerName +

    "! Your first job journey begins now.";



    updateProgress(10,"Learning Workplace Basics");



    nextScreen("welcomeScreen");


}









// =====================================
// TFN
// =====================================


function answerTFN(correct){



    let box =
    document.getElementById("tfnFeedback");



    if(correct){


        xp += 10;


        addBadge(
        "📄 TFN Starter",
        "You learnt why a TFN is important."
        );



        box.innerHTML =


        "🟩 Correct!<br><br>" +

        "A TFN identifies you for tax purposes " +

        "and helps your employer manage your income information." +

        "<br><br>+10 XP";



        updateProgress(30,"Choosing Your First Job");



        setTimeout(()=>{


            nextScreen("jobScreen");


        },3000);



    }

    else{


        box.innerHTML =


        "🟥 Not quite.<br><br>" +

        "A TFN is not used to control your wage " +

        "or access your bank account.";



    }


}









// =====================================
// JOB
// =====================================


function chooseJob(job,pay){



    playerJob = job;

    playerPay = pay;



    document.getElementById("jobMessage").innerHTML =


    "Congratulations! You got the job as a " +

    job + ".";



    updateProgress(45,"Starting Your First Shift");



    nextScreen("acceptedScreen");


}









// =====================================
// SHIFT
// =====================================


function shiftChoice(choice){



    let feedback =
    document.getElementById("shiftFeedback");



    money = 250;



    if(choice===1){


        workXP += 5;

        energy -= 5;



        feedback.innerHTML =


        "🟩 Great choice!<br><br>" +

        "You helped the customer and showed good teamwork.";



    }



    else if(choice===2){



        workXP += 3;

        energy -= 8;



        feedback.innerHTML =


        "🟩 Good choice!<br><br>" +

        "Asking questions helps you improve.";

    }



    else{


        energy -= 15;



        feedback.innerHTML =


        "🟥 Your manager noticed you ignored the customer.";



    }




    document.getElementById("money").innerHTML = money;

    document.getElementById("workXP").innerHTML = workXP;

    document.getElementById("energy").innerHTML = energy;



    updateProgress(60,"Checking Your Payslip");



    setTimeout(()=>{


        nextScreen("phoneScreen");


    },2500);


}









// =====================================
// PAYSLIP
// =====================================


function openPayslip(){



    document.getElementById("payName").innerHTML =
    playerName;



    document.getElementById("payJob").innerHTML =
    playerJob;



    addBadge(
    "🧾 Payslip Pro",
    "You learnt how to read your payslip."
    );



    updateProgress(70,"Learning About Tax");



    nextScreen("payslipScreen");


}









// =====================================
// TAX
// =====================================


function answerTax(correct){



    let box =
    document.getElementById("taxFeedback");



    if(correct){


        xp += 10;



        addBadge(
        "💰 Tax Explorer",
        "You understand why workers pay tax."
        );



        box.innerHTML =


        "🟩 Correct!<br><br>" +

        "Tax helps fund important services " +

        "such as schools, hospitals and roads." +

        "<br><br>+10 XP";



        updateProgress(85,"Learning Superannuation");



        setTimeout(()=>{


            nextScreen("superScreen");


        },3000);



    }

    else{


        box.innerHTML =


        "🟥 Not quite.<br><br>" +

        "Tax helps fund services used by the community.";



    }


}









// =====================================
// SUPER
// =====================================


function answerSuper(correct){



    let box =
    document.getElementById("superFeedback");



    if(correct){


        xp += 10;



        addBadge(
        "🏦 Future Planner",
        "You understand superannuation."
        );



        box.innerHTML =


        "🟩 Correct!<br><br>" +

        "Superannuation is money your employer " +

        "contributes to help save for your future." +

        "<br><br>+10 XP";



        updateProgress(100,"Journey Complete");



        setTimeout(()=>{


            finishGame();


        },3000);



    }

    else{


        box.innerHTML =


        "🟥 Not quite.<br><br>" +

        "Super is saved for your future, " +

        "not immediate spending.";



    }


}









// =====================================
// BADGES
// =====================================


function addBadge(title,description){



    if(!badges.some(b=>b.title===title)){


        badges.push({

            title:title,

            description:description

        });


    }


}








function displayBadges(){



    let area =
    document.getElementById("badgeList");



    area.innerHTML = "";



    badges.forEach(b=>{


        area.innerHTML +=


        `<div class="badge">

        ${b.title}<br>

        <small>${b.description}</small>

        </div>`;


    });



}









// =====================================
// FINAL
// =====================================


function finishGame(){



    let rank;



    if(xp>=40){


        rank="🏆 Outstanding Employee";


    }

    else if(xp>=25){


        rank="⭐ Workplace Ready";


    }

    else{


        rank="📚 New Starter";


    }




    document.getElementById("finalMessage").innerHTML =


    "Congratulations " + playerName +

    "!<br><br>" +

    "You completed your first job journey." +

    "<br><br>Final XP: " + xp +

    "<br><br>" + rank;



    displayBadges();



    nextScreen("finalScreen");


}









// =====================================
// RESET
// =====================================


function restartGame(){



    playerName="";

    playerJob="";

    playerPay=0;


    xp=0;

    money=0;

    energy=100;

    workXP=0;


    badges=[];


    document.getElementById("playerName").value="";



    document.getElementById("xp").innerHTML="0";


    document.getElementById("money").innerHTML="0";


    document.getElementById("workXP").innerHTML="0";


    document.getElementById("energy").innerHTML="100";



    document.getElementById("tfnFeedback").innerHTML="";


    document.getElementById("taxFeedback").innerHTML="";


    document.getElementById("superFeedback").innerHTML="";


    document.getElementById("shiftFeedback").innerHTML="";



    updateProgress(0,"Starting Journey");



    nextScreen("homeScreen");


}






function returnHome(){


    nextScreen("homeScreen");


}
