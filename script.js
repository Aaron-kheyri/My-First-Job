// =====================================
// MY FIRST JOB SIMULATOR v4.0
// GAME ENGINE
// PART 1
// =====================================


// PLAYER DATA

let playerName = "";

let avatar = "😀";

let playerJob = "";

let playerPay = 0;


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


updateProgress(
5,
"Creating Employee Profile"
);



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



if(playerName === ""){


alert("Please enter your name!");

return;


}




document.getElementById("welcomeMessage").innerHTML =


avatar +
" Welcome " +
playerName +
"! Your career journey begins now.";



updateStats();



updateProgress(
15,
"Workplace Training"
);



nextScreen("welcomeScreen");


}









// =====================================
// TRAINING
// =====================================


function completeTraining(){


xp += 20;



addBadge(
"📚 Training Complete",
"You completed workplace training."
);



updateStats();



updateProgress(
30,
"Choosing Your First Job"
);



nextScreen("jobScreen");


}









// =====================================
// JOB SYSTEM
// =====================================


function chooseJob(job,pay){


playerJob = job;

playerPay = pay;



money += 50;

xp += 10;



addBadge(
"💼 First Job",
"You accepted your first job."
);



updateStats();



updateProgress(
45,
"Starting First Shift"
);



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




if(choice === 1){



workXP +=20;

reputation +=15;

xp +=10;



feedback.innerHTML =

"🟩 Great choice! You showed excellent customer service.";



}





else if(choice === 2){



workXP +=15;

reputation +=10;

xp +=8;



feedback.innerHTML =

"🟩 Good choice! Asking your manager for help is responsible.";



}






else{



workXP -=5;

reputation -=10;

energy -=20;



feedback.innerHTML =

"🟥 Ignoring customers can damage your workplace reputation.";



}





updateStats();



updateProgress(
60,
"Career Progress"
);



setTimeout(()=>{


nextScreen("careerScreen");


showCareer();


},2000);



}









// =====================================
// CAREER
// =====================================


function showCareer(){



if(workXP >= 60){


careerLevel = 3;


}

else if(workXP >= 30){


careerLevel = 2;


}



let title =
"Employee";



if(careerLevel === 2){


title =
"⭐ Experienced Worker";


}



if(careerLevel === 3){


title =
"🏆 Team Leader";


}




document.getElementById("careerTitle").innerHTML =
title;



document.getElementById("careerLevel").innerHTML =
careerLevel;



document.getElementById("careerXP").innerHTML =
workXP;



document.getElementById("careerMessage").innerHTML =


"You are a level " +
careerLevel +
" employee working as a " +
playerJob +
".";

}






// =====================================
// RANDOM EVENTS
// =====================================


function nextEvent(){


nextScreen("eventScreen");


generateEvent();


}



let events = [


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

text:"Your manager asks you to help train a new employee.",

choice1:"Help your teammate",

choice2:"Refuse",

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
// =====================================
// EVENT CHOICES
// =====================================


function eventChoice(choice){


let event =
events[currentEvent];



if(choice === event.good){


reputation +=20;

xp +=15;



addBadge(
"⭐ Great Employee",
"You made a positive workplace decision."
);



}

else{


reputation -=10;


}



updateStats();



finishCareer();


}









// =====================================
// ENDINGS
// =====================================


function finishCareer(){



let title = "";

let text = "";




if(reputation >= 50 && workXP >= 50){



title =
"🏆 Employee of the Year";



text =
"You became one of the best employees at your workplace. Your dedication and teamwork earned you a promotion.";



}



else if(money >= 300){



title =
"💰 Smart Worker";



text =
"You learnt how to earn money, build skills and manage your first job responsibly.";



}



else{



title =
"📚 Career Starter";



text =
"You completed your first job journey and gained valuable workplace experience.";



}




document.getElementById("endingTitle").innerHTML =
title;



document.getElementById("endingText").innerHTML =
text;



displayBadges();



updateProgress(
100,
"Career Completed"
);



nextScreen("endingScreen");


}









// =====================================
// STATS
// =====================================


function updateStats(){



let stats = {


"xp": xp,

"money": money,

"energy": energy,

"reputation": reputation,

"shiftMoney": money,

"workXP": workXP,

"shiftRep": reputation


};





for(let id in stats){



let element =
document.getElementById(id);



if(element){


element.innerHTML =
stats[id];


}



}


}









// =====================================
// BADGES
// =====================================


function addBadge(title,description){



if(!badges.some(b=>b.title === title)){



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
// RESET GAME
// =====================================


function restartGame(){



playerName = "";

avatar = "😀";

playerJob = "";

playerPay = 0;


money = 0;

xp = 0;

workXP = 0;

reputation = 0;

energy = 100;


careerLevel = 1;


badges = [];


document.getElementById("playerName").value = "";



updateStats();



updateProgress(
0,
"Starting Journey"
);



nextScreen("homeScreen");


}
