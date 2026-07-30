// =====================================
// MY FIRST JOB SIMULATOR v3.4
// FIXED SCRIPT
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

let testScore = 0;

let currentQuestion = 0;





// =====================================
// FINAL QUESTIONS
// =====================================


const finalQuestions = [

{
question:
"It's your first day at work and your manager asks you to provide your Tax File Number (TFN) before your first pay is processed. Why is giving your employer your TFN important?",

answers:[

"It helps your employer correctly manage your tax information when you are paid.",

"It allows your employer to access your personal bank account.",

"It decides how much you will be paid each hour."

],

correct:0

},



{
question:
"After your first shift, you notice the amount deposited into your bank account is lower than expected. What is the most likely reason?",

answers:[

"The bank randomly removed some money.",

"Some money may have been taken as tax before you were paid.",

"Your employer forgot to pay you."

],

correct:1

},



{
question:
"Why should you read your payslip?",

answers:[

"It helps you understand your earnings, tax and super contributions.",

"You only read it if something goes wrong.",

"Payslips are only for employers."

],

correct:0

},



{
question:
"Why does your employer contribute to superannuation?",

answers:[

"It helps save money for your future.",

"It replaces your normal pay.",

"It is extra spending money immediately."

],

correct:0

},



{
question:
"What is the most responsible thing to do after receiving your first pay?",

answers:[

"Understand your payslip and keep your records.",

"Ignore your payslip.",

"Spend everything immediately."

],

correct:0

}

];








// =====================================
// SCREEN SYSTEM
// =====================================


function nextScreen(screenID){


document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});


let screen = document.getElementById(screenID);


if(screen){

screen.classList.add("active");

}

}








// =====================================
// PROGRESS
// =====================================


function updateProgress(amount,stage){


let bar =
document.getElementById("progressBar");


let text =
document.getElementById("stageText");



if(bar){

bar.style.width = amount + "%";

}



if(text){

text.innerHTML =
"Stage: " + stage;

}


}








// =====================================
// START
// =====================================


function startGame(){


updateProgress(
5,
"Creating Employee Profile"
);


nextScreen("profileScreen");


}









// =====================================
// PROFILE
// =====================================


document.addEventListener(
"DOMContentLoaded",
function(){



document.querySelectorAll(".avatar").forEach(button=>{


button.onclick=function(){


avatar=this.innerHTML;



document.querySelectorAll(".avatar").forEach(a=>{

a.style.background="#eee";

});


this.style.background="#667eea";


};


});


});







function createProfile(){



playerName =
document.getElementById("playerName").value;



if(playerName.trim()===""){


alert("Please enter your name!");

return;


}




document.getElementById("welcomeMessage").innerHTML =


avatar + 
" Welcome " +
playerName +
"! Your first job journey begins now.";



updateProgress(
10,
"Learning Workplace Basics"
);



nextScreen("welcomeScreen");


}









// =====================================
// TFN QUIZ
// =====================================


function answerTFN(correct){



let feedback =
document.getElementById("tfnFeedback");



if(correct){


xp +=10;



addBadge(
"📄 TFN Starter",
"You learnt why a TFN is important."
);



feedback.innerHTML =

"🟩 Correct! A TFN helps manage your tax information.";



updateProgress(
35,
"Choosing Your First Job"
);



setTimeout(()=>{


nextScreen("jobScreen");


},2000);



}

else{


feedback.innerHTML =

"🟥 Not quite. A TFN is used for tax purposes.";


}


}









// =====================================
// JOB CHOICE
// =====================================


function chooseJob(job,pay){



playerJob = job;

playerPay = pay;



document.getElementById("jobMessage").innerHTML =


"Congratulations! You have been accepted as a " +
job + ".";



updateProgress(
45,
"Starting Your First Shift"
);



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


workXP +=5;

energy -=5;



feedback.innerHTML =

"🟩 Great choice! You showed teamwork and customer service skills.";



}



else if(choice===2){


workXP +=3;

energy -=8;



feedback.innerHTML =

"🟩 Good choice! Asking for help is responsible.";



}



else{


energy -=15;



feedback.innerHTML =

"🟥 Ignoring customers can create problems at work.";


}



document.getElementById("money").innerHTML =
money;


document.getElementById("workXP").innerHTML =
workXP;


document.getElementById("energy").innerHTML =
energy;



updateProgress(
60,
"Receiving Your Payslip"
);



setTimeout(()=>{


nextScreen("phoneScreen");


},2000);



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
"You learnt how to understand your pay information."
);



updateProgress(
70,
"Understanding Tax"
);



nextScreen("payslipScreen");


}









// =====================================
// TAX QUIZ
// =====================================


function answerTax(correct){



let feedback =
document.getElementById("taxFeedback");



if(correct){


xp +=10;



addBadge(
"💰 Tax Explorer",
"You understand why tax is collected."
);



feedback.innerHTML =

"🟩 Correct! Tax helps fund community services.";



updateProgress(
85,
"Learning Superannuation"
);



setTimeout(()=>{


nextScreen("superScreen");


},2000);



}

else{


feedback.innerHTML =

"🟥 Not quite. Tax helps pay for services like schools and hospitals.";


}


}









// =====================================
// SUPER QUIZ
// =====================================


function answerSuper(correct){



let feedback =
document.getElementById("superFeedback");



if(correct){


xp +=10;



addBadge(
"🏦 Future Planner",
"You understand superannuation."
);



feedback.innerHTML =

"🟩 Correct! Superannuation helps save money for your future.";



updateProgress(
100,
"Final Employee Challenge"
);



setTimeout(()=>{


document.getElementById("challengeName").innerHTML =
playerName;


nextScreen("challengeIntroScreen");


},2000);



}

else{


feedback.innerHTML =

"🟥 Not quite. Superannuation is for your future.";


}


}









// =====================================
// FINAL TEST
// =====================================


function startFinalTest(){


currentQuestion = 0;

testScore = 0;


nextScreen("finalTestScreen");


showQuestion();


}







function showQuestion(){



let question =
finalQuestions[currentQuestion];



document.getElementById("questionNumber").innerHTML =

"Question " +
(currentQuestion+1) +
"/5";



document.getElementById("finalQuestion").innerHTML =

question.question;



let answers = "";



question.answers.forEach((answer,index)=>{


answers +=

`
<button onclick="checkAnswer(${index})">

${answer}

</button>
`;


});



document.getElementById("finalAnswers").innerHTML =
answers;



document.getElementById("testFeedback").innerHTML="";


}







function checkAnswer(answer){



let question =
finalQuestions[currentQuestion];



let feedback =
document.getElementById("testFeedback");



if(answer===question.correct){


testScore++;


feedback.innerHTML =
"🟩 Correct! Great understanding.";


}

else{


feedback.innerHTML =

"🟥 Incorrect. Keep learning workplace skills.";


}



setTimeout(()=>{


currentQuestion++;



if(currentQuestion < finalQuestions.length){


showQuestion();


}

else{


finishGame();


}



},2000);



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



if(!area) return;



area.innerHTML="";



badges.forEach(b=>{


area.innerHTML +=


`
<div class="badge">

${b.title}

<br>

<small>
${b.description}
</small>

</div>
`;


});


}









// =====================================
// FINAL CERTIFICATE
// =====================================


function finishGame(){



document.getElementById("certificateName").innerHTML =
playerName;



document.getElementById("testScore").innerHTML =
testScore;



let rank;



if(testScore===5){


rank="🏆 READY FOR YOUR FIRST JOB";


}

else if(testScore>=3){


rank="⭐ WORKPLACE READY";


}

else{


rank="📚 KEEP LEARNING";


}



document.getElementById("finalRank").innerHTML =
rank;



displayBadges();



updateProgress(
100,
"Completed"
);



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

avatar="😀";

badges=[];

testScore=0;

currentQuestion=0;



document.getElementById("playerName").value="";



document.getElementById("xp").innerHTML="0";

document.getElementById("money").innerHTML="0";

document.getElementById("workXP").innerHTML="0";

document.getElementById("energy").innerHTML="100";



updateProgress(
0,
"Starting Journey"
);



nextScreen("homeScreen");


}
