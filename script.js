// =====================================
// MY FIRST JOB SIMULATOR v4.0
// GAME ENGINE
// =====================================


// PLAYER DATA

let playerName = "";
let avatar = "😀";

let playerJob = "";

let money = 0;
let xp = 0;
let workXP = 0;
let reputation = 0;

let energy = 100;

let careerLevel = 1;

let badges = [];

let currentEvent = 0;






// =====================================
// SCREEN SYSTEM
// =====================================


function nextScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{

screen.classList.remove("active");

});


document.getElementById(id).classList.add("active");


}







// =====================================
// PROGRESS
// =====================================


function updateProgress(amount,text){

document.getElementById("progressBar").style.width = amount+"%";

document.getElementById("stageText").innerHTML =
"Stage: "+text;

}







// =====================================
// START GAME
// =====================================


function startGame(){

updateProgress(5,"Creating Employee Profile");

nextScreen("profileScreen");

}







// =====================================
// PROFILE
// =====================================


function chooseAvatar(choice){

avatar = choice;

}



function createProfile(){


playerName =
document.getElementById("playerName").value;



if(playerName===""){

alert("Please enter your name!");

return;

}



document.getElementById("welcomeMessage").innerHTML =

avatar+" Welcome "+playerName+
"! Your career journey begins now.";



updateStats();


updateProgress(15,"Workplace Training");


nextScreen("welcomeScreen");


}







// =====================================
// TRAINING
// =====================================


function completeTraining(){


xp +=20;

addBadge(
"📚 Training Complete",
"You completed workplace training."
);



updateStats();


updateProgress(30,"Choosing Career");


nextScreen("jobScreen");


}







// =====================================
// JOB SELECTION
// =====================================


function chooseJob(job,pay){


playerJob = job;


money +=50;


xp +=10;


addBadge(
"💼 First Job",
"You accepted your first job."
);



updateStats();



updateProgress(45,"First Shift");


nextScreen("shiftScreen");


}







// =====================================
// SHIFT
// =====================================


function shiftChoice(choice){


let feedback =
document.getElementById("shiftFeedback");



money +=250;


energy -=10;



if(choice===1){


workXP +=20;

reputation +=15;

xp +=10;


feedback.innerHTML =
"🟩 Amazing! Customers appreciated your helpful attitude.";


}



else if(choice===2){


workXP +=15;

reputation +=10;

xp +=8;


feedback.innerHTML =
"🟩 Good decision! Managers like employees who ask questions.";


}



else{


workXP -=5;

reputation -=10;

energy -=20;


feedback.innerHTML =
"🟥 This choice damaged your reputation. Learn from mistakes.";


}



updateStats();


updateProgress(60,"Career Progress");


setTimeout(()=>{

nextScreen("careerScreen");

showCareer();

},2000);


}







// =====================================
// CAREER SYSTEM
// =====================================


function showCareer(){


if(workXP>=60){

careerLevel=3;

}


else if(workXP>=30){

careerLevel=2;

}


document.getElementById("careerLevel").innerHTML =
careerLevel;



document.getElementById("careerXP").innerHTML =
workXP;



let title="Employee";



if(careerLevel===2){

title="⭐ Experienced Worker";

}



if(careerLevel===3){

title="🏆 Team Leader";

}



document.getElementById("careerTitle").innerHTML =
title;



document.getElementById("careerMessage").innerHTML =


"You are now a level "+
careerLevel+
" employee working as a "+
playerJob+
".";

}







function nextEvent(){

nextScreen("eventScreen");


generateEvent();


}







// =====================================
// RANDOM EVENTS
// =====================================


let events=[


{

title:"😡 Difficult Customer",

text:"A customer complains about their order. What do you do?",

choice1:"Stay calm and help them",

choice2:"Argue back",

good:1

},


{

title:"⏰ Running Late",

text:"You wake up late before your shift.",

choice1:"Call your manager and explain",

choice2:"Ignore it and arrive late",

good:1

},


{

title:"👥 Team Opportunity",

text:"Your manager asks you to help train a new worker.",

choice1:"Help your teammate",

choice2:"Refuse because it is extra effort",

good:1

}


];





function generateEvent(){


currentEvent =
Math.floor(Math.random()*events.length);



let event =
events[currentEvent];



document.getElementById("eventTitle").innerHTML =
event.title;



document.getElementById("eventText").innerHTML =
event.text;



}







function eventChoice(choice){


let event =
events[currentEvent];



if(choice===event.good){


reputation+=20;

xp+=15;


addBadge(
"⭐ Great Employee",
"You made a positive workplace decision."
);



}

else{


reputation-=10;


}



updateStats();


finishCareer();


}







// =====================================
// ENDINGS
// =====================================


function finishCareer(){



let title="";

let text="";



if(reputation>=50 && workXP>=50){


title="🏆 Employee of the Year";

text=
"You became a workplace legend. Your manager promoted you because of your dedication.";


}



else if(money>=300){


title="💰 Smart Worker";

text=
"You learnt how to earn money and manage your first job responsibly.";


}



else{


title="📚 Career Starter";

text=
"You finished your first job journey and gained valuable experience.";


}




document.getElementById("endingTitle").innerHTML =
title;



document.getElementById("endingText").innerHTML =
text;



displayBadges();



nextScreen("endingScreen");


}







// =====================================
// STATS
// =====================================


function updateStats(){


let ids={

xp:xp,

money:money,

energy:energy,

reputation:reputation,

shiftMoney:money,

workXP:workXP,

shiftRep:reputation

};



for(let id in ids){


let element =
document.getElementById(id);



if(element){

element.innerHTML =
ids[id];

}


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
// RESET
// =====================================


function restartGame(){


playerName="";

avatar="😀";

playerJob="";

money=0;

xp=0;

workXP=0;

reputation=0;

energy=100;

careerLevel=1;

badges=[];



document.getElementById("playerName").value="";

updateProgress(0,"Starting Journey");


updateStats();


nextScreen("homeScreen");


}
