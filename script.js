// =====================================
// MY FIRST JOB SIMULATOR v3.3
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








// FINAL TEST QUESTIONS

const finalQuestions = [

{
question:
"It's your first day at work and your manager asks you to provide your Tax File Number (TFN) before your first pay is processed. Why is giving your employer your TFN important?",

answers:[
"It helps your employer correctly manage your tax information when you are paid.",
"It allows your employer to access your personal bank account.",
"It decides how much you will be paid each hour."
],

correct:0,

correctMessage:
"Excellent! A TFN helps your employer correctly report your income and manage your tax information.",

wrongMessage:
"Not quite. Your TFN is used for tax purposes. It does not allow your employer to access your bank account or decide your pay."
},

{
question:
"After your first shift, you notice the amount deposited into your bank account is a little lower than you expected. What is the most likely reason?",

answers:[
"The bank randomly removed some of your money.",
"Some money may have been taken as tax before you were paid.",
"Your employer forgot to pay you the full amount."
],

correct:1,

correctMessage:
"Correct! Depending on your situation, some money may be deducted as tax before your pay reaches your bank account.",

wrongMessage:
"Not quite. In many jobs, tax may be deducted before you receive your pay, which is why the amount can be lower."
},

{
question:
"A friend says they never bother reading their payslip because the money is already in their bank account. What would be the best advice to give them?",

answers:[
"Reading your payslip helps you understand your earnings, tax and super contributions.",
"You only need to read your payslip if something goes wrong.",
"Payslips are mainly for your employer, so you can ignore them."
],

correct:0,

correctMessage:
"Great answer! Checking your payslip helps you understand how you were paid and lets you spot any mistakes.",

wrongMessage:
"Not quite. Payslips contain important information about your pay, tax and super, so it's a good habit to read them."
},

{
question:
"You notice your employer has made a contribution to your superannuation fund, but that money is not in your bank account. Why?",

answers:[
"The money is being saved to help support you in the future.",
"Your employer forgot to transfer it into your account.",
"The money is kept until the end of the year before you can spend it."
],

correct:0,

correctMessage:
"Exactly! Superannuation is money set aside to help support you later in life.",

wrongMessage:
"Not quite. Super isn't spending money—it's a long-term saving for your future."
},

{
question:
"It's Friday afternoon. You've received your first pay, your payslip, and you know tax and super have been included. What is the MOST responsible thing to do next?",

answers:[
"Read your payslip, understand your tax and super information, and keep the payslip for your records.",
"Spend all your money immediately because you can always earn more next week.",
"Ignore your payslip because your employer has already paid you."
],

correct:0,

correctMessage:
"Fantastic! Understanding your payslip and keeping your records is a responsible habit when you start working.",

wrongMessage:
"Not quite. Checking your payslip and understanding your responsibilities helps you manage your money and make sure everything is correct."
}

];

];









// =====================================
// SCREEN SYSTEM
// =====================================


function nextScreen(screenID){


document.querySelectorAll(".screen").forEach(screen=>{


screen.classList.remove("active");


});


document.getElementById(screenID).classList.add("active");


}









// =====================================
// PROGRESS
// =====================================


function updateProgress(amount,stage){


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

"A TFN helps your employer and the government correctly manage your tax information.";



updateProgress(35,"Choosing Your First Job");



setTimeout(()=>{

nextScreen("jobScreen");

},2500);



}

else{


box.innerHTML =

"🟥 Not quite.<br><br>" +

"A TFN is used for tax purposes, not for accessing your bank account or setting your wage.";


}



}









// =====================================
// JOB
// =====================================


function chooseJob(job,pay){



playerJob = job;

playerPay = pay;



document.getElementById("jobMessage").innerHTML =


"Congratulations! You have been accepted as a " +

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

"🟥 Ignoring customers can create problems at work. Learn from this experience.";


}



document.getElementById("money").innerHTML = money;

document.getElementById("workXP").innerHTML = workXP;

document.getElementById("energy").innerHTML = energy;



updateProgress(60,"Receiving Your Payslip");



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
"You learnt how to understand your pay information."
);



updateProgress(70,"Understanding Tax");



nextScreen("payslipScreen");


}









// =====================================
// TAX
// =====================================


function answerTax(correct){



let box =
document.getElementById("taxFeedback");



if(correct){


xp +=10;



addBadge(
"💰 Tax Explorer",
"You understand why tax is collected."
);



box.innerHTML =

"🟩 Correct!<br><br>" +

"Tax helps pay for important community services.";



updateProgress(85,"Learning Superannuation");



setTimeout(()=>{


nextScreen("superScreen");


},2500);



}

else{


box.innerHTML =

"🟥 Not quite.<br><br>" +

"Tax is collected by the government to help provide services.";


}



}









// =====================================
// SUPER
// =====================================


function answerSuper(correct){



let box =
document.getElementById("superFeedback");



if(correct){



xp +=10;



addBadge(
"🏦 Future Planner",
"You understand superannuation."
);



box.innerHTML =

"🟩 Correct!<br><br>" +

"Superannuation helps save money for your future.";



updateProgress(100,"Final Employee Challenge");



setTimeout(()=>{

document.getElementById("challengeName").innerHTML = playerName;

nextScreen("challengeIntroScreen");

},2500);



}

else{


box.innerHTML =

"🟥 Not quite.<br><br>" +

"Superannuation is saved for your future, not immediate spending.";


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


`<button onclick="checkAnswer(${index})">

${answer}

</button>`;


});



document.getElementById("finalAnswers").innerHTML =
answers;



document.getElementById("testFeedback").innerHTML = "";


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

"🟥 Incorrect.<br><br>" +

"The correct answer was:<br>" +

question.answers[question.correct];



}



setTimeout(()=>{


currentQuestion++;



if(currentQuestion < finalQuestions.length){


showQuestion();


}

else{


finishGame();


}



},2500);



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



area.innerHTML="";



badges.forEach(b=>{


area.innerHTML +=


`

<div class="badge">

${b.title}

<br>

<small>${b.description}</small>

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

testScore=0;

currentQuestion=0;



document.getElementById("playerName").value="";



document.getElementById("xp").innerHTML="0";

document.getElementById("money").innerHTML="0";

document.getElementById("workXP").innerHTML="0";

document.getElementById("energy").innerHTML="100";



updateProgress(0,"Starting Journey");



nextScreen("homeScreen");


}






function returnHome(){


nextScreen("homeScreen");


}
