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
"You receive your first payslip and notice some money was taken out as tax. Why did this happen?",

answers:
[
"Your employer kept the money as a workplace fee",

"The money was collected as tax to help fund community services",

"The money disappeared because your pay was calculated incorrectly"
],

correct:1

},



{
question:
"Why is checking your payslip important when you start working?",

answers:
[
"It helps you understand your pay, tax and superannuation information",

"It only shows your manager's details",

"It is optional and does not contain important information"
],

correct:0

},



{
question:
"Why does your employer need your Tax File Number (TFN)?",

answers:
[
"To see your personal bank account",

"To decide how many hours you can work",

"To correctly manage your tax information"
],

correct:2

},



{
question:
"Why does your employer contribute money into your superannuation?",

answers:
[
"To give you extra money to spend immediately",

"To help save money for your future",

"To replace your normal wages"
],

correct:1

},



{
question:
"What is a responsible habit when receiving your first payment?",

answers:
[
"Ignore your payslip because mistakes never happen",

"Spend all your money straight away",

"Check your payslip and understand where your money goes"
],

correct:2

}


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
