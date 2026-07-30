/* =========================================================
   MY FIRST JOB
   FULL GAME ENGINE
   VERSION 4.0
   ========================================================= */


/* =========================================================
   GAME DATA
   ========================================================= */

const game = {

    player: {
        name: "",
        avatar: "🙂",
        job: "",
        hourlyPay: 0,

        money: 0,
        xp: 0,
        reputation: 0,

        day: 1,

        tfnKnown: false,
        superKnown: false,
        taxKnown: false,
        payslipKnown: false,

        challengeScore: 0,

        badges: [],

        choices: [],

        ending: ""
    },

    jobs: {
        cafe: {
            name: "Café Assistant",
            icon: "☕",
            pay: 18,
            description: "Serve customers, prepare orders and keep the café running smoothly."
        },

        retail: {
            name: "Retail Assistant",
            icon: "🛍️",
            pay: 19,
            description: "Help customers, organise stock and work on the shop floor."
        },

        soccer: {
            name: "Sports Centre Assistant",
            icon: "⚽",
            pay: 20,
            description: "Help customers, organise equipment and support activities."
        },

        tech: {
            name: "Tech Store Assistant",
            icon: "💻",
            pay: 21,
            description: "Help customers with products and keep the store organised."
        }
    },

    days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
    ]

};


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function get(id) {
    return document.getElementById(id);
}


function showScreen(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = get(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateHeader();
}


function setHTML(id, html) {

    const element = get(id);

    if (element) {
        element.innerHTML = html;
    }
}


function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   HEADER
   ========================================================= */

function updateHeader() {

    const dayLabel = get("dayLabel");

    if (dayLabel) {

        if (game.player.day >= 1 && game.player.day <= 5) {
            dayLabel.textContent =
                game.days[game.player.day - 1].toUpperCase();
        } else {
            dayLabel.textContent = "MY FIRST JOB";
        }
    }

    const moneyElement = get("moneyDisplay");

    if (moneyElement) {
        moneyElement.textContent =
            "$" + game.player.money.toFixed(2);
    }

    const xpElement = get("xpDisplay");

    if (xpElement) {
        xpElement.textContent =
            game.player.xp + " XP";
    }

    updateCareerBar();
}


function updateCareerBar() {

    const fill = get("careerProgress");

    if (!fill) return;

    let progress = 0;

    progress += game.player.xp * 0.7;
    progress += game.player.reputation * 1.5;

    progress = Math.min(progress, 100);

    fill.style.width = progress + "%";
}


/* =========================================================
   START GAME
   ========================================================= */

function startGame() {

    resetPlayer();

    showScreen("profileScreen");

    renderProfileScreen();

}


function resetPlayer() {

    game.player = {

        name: "",
        avatar: "🙂",
        job: "",
        hourlyPay: 0,

        money: 0,
        xp: 0,
        reputation: 0,

        day: 1,

        tfnKnown: false,
        superKnown: false,
        taxKnown: false,
        payslipKnown: false,

        challengeScore: 0,

        badges: [],

        choices: [],

        ending: ""
    };
}


/* =========================================================
   PROFILE / CHARACTER CREATION
   ========================================================= */

function renderProfileScreen() {

    setHTML("profileScreen", `

        <div class="day-badge">STEP 1 • CREATE YOUR EMPLOYEE</div>

        <h1>Welcome to the workforce 👋</h1>

        <p>
            Before your first day, create your employee profile.
            Your choices will follow you throughout the week.
        </p>

        <div class="info-card">

            <h3>What's your name?</h3>

            <input
                id="playerName"
                class="text-input"
                type="text"
                maxlength="18"
                placeholder="Enter your name"
            >

        </div>


        <div class="info-card">

            <h3>Choose your avatar</h3>

            <p>Pick the one that represents you.</p>

            <div class="avatar-grid">

                <button
                    class="avatar-option selected"
                    onclick="chooseAvatar('🙂', this)"
                >🙂</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('😎', this)"
                >😎</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('🧑‍💻', this)"
                >🧑‍💻</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('🧑‍🍳', this)"
                >🧑‍🍳</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('⚽', this)"
                >⚽</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('🎨', this)"
                >🎨</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('🧠', this)"
                >🧠</button>

                <button
                    class="avatar-option"
                    onclick="chooseAvatar('🚀', this)"
                >🚀</button>

            </div>

        </div>


        <button
            class="primary-button"
            onclick="finishProfile()"
        >
            Continue →
        </button>

    `);

    showScreen("profileScreen");
}


function chooseAvatar(avatar, button) {

    game.player.avatar = avatar;

    document
        .querySelectorAll(".avatar-option")
        .forEach(option => option.classList.remove("selected"));

    if (button) {
        button.classList.add("selected");
    }
}


function finishProfile() {

    const input = get("playerName");

    let name = input ? input.value.trim() : "";

    if (!name) {
        name = "Employee";
    }

    game.player.name = name;

    showWelcome();

}


/* =========================================================
   WELCOME
   ========================================================= */

function showWelcome() {

    setHTML("welcomeScreen", `

        <div class="day-badge">
            MONDAY • YOUR FIRST DAY
        </div>

        <div class="manager-avatar">
            👩‍💼
        </div>

        <div class="speech-card">

            <span class="speaker-name">
                Your Manager
            </span>

            <p>
                "Hey ${escapeHTML(game.player.name)}!
                Welcome to the team ${game.player.avatar}.
                Before we get you working, there's something
                really important you need to understand."
            </p>

        </div>


        <div class="info-card">

            <h3>💡 Your mission</h3>

            <p>
                Over the next five days you'll learn how your
                first job actually works — including your TFN,
                tax, superannuation and payslip.
            </p>

        </div>


        <div class="info-card">

            <h3>🎮 How the game works</h3>

            <p>
                Make decisions, answer questions, earn XP,
                build your reputation and try to finish the
                week as a workplace-ready employee.
            </p>

        </div>


        <button
            class="primary-button"
            onclick="startTraining()"
        >
            Start Monday →
        </button>

    `);

    showScreen("welcomeScreen");

}


/* =========================================================
   TRAINING HUB
   ========================================================= */

function startTraining() {

    game.player.day = 1;

    renderTraining();

    showScreen("trainingScreen");

}


function renderTraining() {

    setHTML("trainingScreen", `

        <div class="day-badge">
            MONDAY • GETTING STARTED
        </div>

        <h1>Your first shift starts here.</h1>

        <p>
            Your manager gives you a quick introduction to
            some important things every employee should know.
        </p>


        <div class="info-card">

            <h3>🪪 1. Tax File Number</h3>

            <p>
                A Tax File Number, or TFN, is a personal number
                used by the Australian Taxation Office to identify
                you for tax and superannuation purposes.
            </p>

        </div>


        <div class="info-card">

            <h3>🏦 2. Superannuation</h3>

            <p>
                Superannuation is money your employer generally
                pays into your super fund for your future.
                It is separate from the money you receive
                in your bank account.
            </p>

        </div>


        <div class="info-card">

            <h3>💰 3. Tax</h3>

            <p>
                Tax is money collected by the government to
                help fund services and infrastructure.
                Depending on your circumstances, some tax may
                be taken from your pay.
            </p>

        </div>


        <button
            class="primary-button"
            onclick="trainingQuiz()"
        >
            I've read this — test me →
        </button>

    `);

}


/* =========================================================
   TRAINING QUIZ
   ========================================================= */

function trainingQuiz() {

    setHTML("trainingScreen", `

        <div class="day-badge">
            MONDAY • QUICK CHECK
        </div>

        <h1>Let's see what you picked up.</h1>

        <div class="question-card">

            <h3>
                Why might an employer ask for your TFN?
            </h3>

            <button
                class="choice-button"
                onclick="answerTraining(this, false)"
            >
                <strong>A</strong>
                <span>
                    So they can use it as your employee password.
                </span>
            </button>

            <button
                class="choice-button"
                onclick="answerTraining(this, true)"
            >
                <strong>B</strong>
                <span>
                    So your tax and employment records can be
                    handled correctly.
                </span>
            </button>

            <button
                class="choice-button"
                onclick="answerTraining(this, false)"
            >
                <strong>C</strong>
                <span>
                    So you can automatically receive a promotion.
                </span>
            </button>

        </div>

        <div id="trainingFeedback"></div>

    `);

}


function answerTraining(button, correct) {

    document
        .querySelectorAll(".choice-button")
        .forEach(btn => btn.classList.add("disabled"));

    if (correct) {

        button.classList.add("correct");

        game.player.xp += 10;
        game.player.tfnKnown = true;

        setHTML("trainingFeedback", `

            <div class="feedback-box correct">

                <strong>✓ Correct!</strong>

                <br><br>

                Your TFN helps identify you for tax and
                superannuation purposes and helps your employer
                handle the relevant records.

            </div>

            <button
                class="primary-button"
                onclick="chooseJob()"
            >
                Continue →
            </button>

        `);

    } else {

        button.classList.add("wrong");

        setHTML("trainingFeedback", `

            <div class="feedback-box wrong">

                <strong>✕ Not quite.</strong>

                <br><br>

                A TFN is connected with your tax and
                superannuation records. It isn't a workplace
                password or a promotion requirement.

            </div>

            <button
                class="primary-button"
                onclick="chooseJob()"
            >
                Continue →
            </button>

        `);

    }

    updateHeader();

}


/* =========================================================
   JOB SELECTION
   ========================================================= */

function chooseJob() {

    setHTML("jobScreen", `

        <div class="day-badge">
            MONDAY • JOB BOARD
        </div>

        <h1>Choose your first job.</h1>

        <p>
            Every job gives you a different workplace
            experience. Pick carefully — your choice affects
            your week.
        </p>


        ${createJobCard("cafe")}
        ${createJobCard("retail")}
        ${createJobCard("soccer")}
        ${createJobCard("tech")}

    `);

    showScreen("jobScreen");

}


function createJobCard(id) {

    const job = game.jobs[id];

    return `

        <div class="job-card">

            <div class="job-icon">
                ${job.icon}
            </div>

            <div class="job-info">

                <h3>${job.name}</h3>

                <p>${job.description}</p>

                <strong>
                    $${job.pay}/hour
                </strong>

            </div>

            <button
                class="job-select"
                onclick="selectJob('${id}')"
            >
                Choose
            </button>

        </div>

    `;

}


function selectJob(id) {

    const job = game.jobs[id];

    game.player.job = job.name;

    game.player.hourlyPay = job.pay;

    game.player.reputation += 5;

    game.player.choices.push({
        type: "job",
        value: job.name
    });

    showShiftIntro();

}


/* =========================================================
   SHIFT INTRO
   ========================================================= */

function showShiftIntro() {

    setHTML("shiftScreen", `

        <div class="day-badge">
            MONDAY • FIRST SHIFT
        </div>

        <div class="work-card">

            <div class="work-icon">
                ${game.player.avatar}
            </div>

            <h2>
                First shift at ${game.player.job}
            </h2>

            <p>
                Your hourly rate is
                <strong>$${game.player.hourlyPay}</strong>.
            </p>

        </div>


        <div class="info-card">

            <h3>📋 Your first task</h3>

            <p>
                Your manager asks you to make sure your
                employment information is ready.
            </p>

        </div>


        <div class="info-card">

            <h3>🪪 Employee paperwork</h3>

            <p>
                This is where your TFN becomes important.
                Giving the correct information helps your
                employer handle your employment records.
            </p>

        </div>


        <button
            class="primary-button"
            onclick="finishMonday()"
        >
            Finish Monday →
        </button>

    `);

    showScreen("shiftScreen");

}


/* =========================================================
   MONDAY → TUESDAY
   ========================================================= */

function finishMonday() {

    game.player.xp += 10;

    game.player.badges.push("firstDay");

    showTuesday();

}


function showTuesday() {

    game.player.day = 2;

    setHTML("careerScreen", `

        <div class="day-badge">
            TUESDAY • YOUR PAY
        </div>

        <h1>
            You survived day one. 💪
        </h1>

        <p>
            Now it's time to understand where your money
            actually goes.
        </p>


        <div class="notification-preview payslip-notification">

            <strong>📄 NEW PAYSLIP</strong>

            <p>
                Your first payslip is available to view.
            </p>

        </div>


        <div class="info-card">

            <h3>🤔 Your question</h3>

            <p>
                "Wait... why isn't all of the money I earned
                appearing in my bank account?"
            </p>

        </div>


        <button
            class="primary-button"
            onclick="showTaxLesson()"
        >
            Find out why →
        </button>

    `);

    showScreen("careerScreen");

    updateHeader();

}


/* =========================================================
   TAX LESSON
   ========================================================= */

function showTaxLesson() {

    setHTML("careerScreen", `

        <div class="day-badge">
            TUESDAY • TAX
        </div>

        <div class="story-icon">
            💰
        </div>

        <h1>
            So... what is tax?
        </h1>

        <p>
            You notice that some money has been taken from
            your pay before it reaches your bank account.
        </p>


        <div class="speech-card">

            <span class="speaker-name">
                You
            </span>

            <p>
                "Why did some of my money disappear?"
            </p>

        </div>


        <div class="info-card">

            <h3>💡 The answer</h3>

            <p>
                Tax is money collected by the Australian
                government. It helps fund things such as
                public services and infrastructure.
            </p>

            <br>

            <p>
                The amount of tax taken from your pay depends
                on your circumstances and income.
            </p>

        </div>


        <div class="tax-explanation">

            <div class="tax-item">
                💵
                <span>Money earned</span>
            </div>

            <div class="tax-item">
                🏛️
                <span>Tax withheld</span>
            </div>

            <div class="tax-item">
                🏦
                <span>Money received</span>
            </div>

            <div class="tax-item">
                📊
                <span>Recorded on payslip</span>
            </div>

        </div>


        <button
            class="primary-button"
            onclick="showPayslip()"
        >
            View your payslip →
        </button>

    `);

}


/* =========================================================
   PAYSLIP
   ========================================================= */

function showPayslip() {

    const hours = 8;

    const earned = hours * game.player.hourlyPay;

    /*
       Educational game values.
       These are simplified values for gameplay,
       not a real Australian payroll calculation.
    */

    const tax = Math.round(earned * 0.08 * 100) / 100;

    const superAmount =
        Math.round(earned * 0.12 * 100) / 100;

    const received =
        Math.round((earned - tax) * 100) / 100;

    game.player.money = received;

    setHTML("careerScreen", `

        <div class="day-badge">
            TUESDAY • PAYSLIP
        </div>

        <h1>
            Your first payslip 🧾
        </h1>

        <p>
            This document shows what happened to your pay.
        </p>


        <div class="payslip">

            <div class="payslip-header">

                <strong>
                    ${escapeHTML(game.player.job)}
                </strong>

                <span>
                    Week 1
                </span>

            </div>


            <div class="payslip-row">

                <span>
                    Hours worked
                </span>

                <strong>
                    ${hours} hrs
                </strong>

            </div>


            <div class="payslip-row">

                <span>
                    Pay
                </span>

                <strong>
                    $${earned.toFixed(2)}
                </strong>

            </div>


            <div class="payslip-row tax-row">

                <span>
                    Tax withheld
                </span>

                <strong>
                    -$${tax.toFixed(2)}
                </strong>

            </div>


            <div class="payslip-divider"></div>


            <div class="payslip-row total-row">

                <span>
                    Paid to you
                </span>

                <strong>
                    $${received.toFixed(2)}
                </strong>

            </div>


            <div class="payslip-divider"></div>


            <div class="payslip-row super-row">

                <span>
                    Employer super contribution
                </span>

                <strong>
                    $${superAmount.toFixed(2)}
                </strong>

            </div>

        </div>


        <div class="info-card">

            <h3>⚠️ Important</h3>

            <p>
                Superannuation is not the same as money
                deposited into your everyday bank account.
                It is generally paid into your super fund
                for your future.
            </p>

        </div>


        <button
            class="primary-button"
            onclick="taxQuestion()"
        >
            Continue →
        </button>

    `);

    game.player.taxKnown = true;
    game.player.payslipKnown = true;

    game.player.xp += 10;

}


/* =========================================================
   TAX QUESTION
   ========================================================= */

function taxQuestion() {

    setHTML("careerScreen", `

        <div class="day-badge">
            TUESDAY • WORKPLACE DECISION
        </div>

        <div class="question-card">

            <h3>
                You look at your payslip and notice tax
                has been withheld. What is the best
                explanation?
            </h3>


            <button
                class="choice-button"
                onclick="answerTax(this, false)"
            >
                <strong>A</strong>

                <span>
                    Your employer is keeping the money as
                    a bonus for themselves.
                </span>

            </button>


            <button
                class="choice-button"
                onclick="answerTax(this, false)"
            >
                <strong>B</strong>

                <span>
                    Tax means you have been charged a fee
                    for having a job.
                </span>

            </button>


            <button
                class="choice-button"
                onclick="answerTax(this, true)"
            >
                <strong>C</strong>

                <span>
                    It is money withheld from your pay
                    for tax purposes and recorded on your
                    payslip.
                </span>

            </button>

        </div>

        <div id="taxFeedback"></div>

    `);

}


function answerTax(button, correct) {

    document
        .querySelectorAll(".choice-button")
        .forEach(btn => btn.classList.add("disabled"));

    if (correct) {

        button.classList.add("correct");

        game.player.xp += 15;
        game.player.reputation += 5;

        setHTML("taxFeedback", `

            <div class="feedback-box correct">

                <strong>✓ Exactly.</strong>

                <br><br>

                Your payslip shows the amount of tax
                withheld from your pay.

            </div>

            <button
                class="primary-button"
                onclick="showSuperLesson()"
            >
                Continue →
            </button>

        `);

    } else {

        button.classList.add("wrong");

        setHTML("taxFeedback", `

            <div class="feedback-box wrong">

                <strong>✕ Not quite.</strong>

                <br><br>

                Tax withheld is money taken from your pay
                for tax purposes. Your payslip records it.

            </div>

            <button
                class="primary-button"
                onclick="showSuperLesson()"
            >
                Continue →
            </button>

        `);

    }

    updateHeader();

}


/* =========================================================
   SUPER LESSON
   ========================================================= */

function showSuperLesson() {

    setHTML("eventScreen", `

        <div class="day-badge">
            WEDNESDAY • SUPERANNUATION
        </div>

        <div class="story-icon">
            🏦
        </div>

        <h1>
            Where does super go?
        </h1>

        <p>
            Your manager explains another part of your
            employment that you might not see directly
            in your bank account.
        </p>


        <div class="speech-card">

            <span class="speaker-name">
                Your Manager
            </span>

            <p>
                "Your employer may make superannuation
                contributions for you. That money is generally
                paid into your super fund for your future."
            </p>

        </div>


        <div class="responsibility-list">

            <div class="responsibility-item mastered">

                <div class="responsibility-check">
                    ✓
                </div>

                <div>

                    <strong>
                        TFN
                    </strong>

                    <p>
                        Important for tax and employment records.
                    </p>

                </div>

            </div>


            <div class="responsibility-item mastered">

                <div class="responsibility-check">
                    ✓
                </div>

                <div>

                    <strong>
                        Tax
                    </strong>

                    <p>
                        Some tax may be withheld from your pay.
                    </p>

                </div>

            </div>


            <div class="responsibility-item mastered">

                <div class="responsibility-check">
                    ✓
                </div>

                <div>

                    <strong>
                        Superannuation
                    </strong>

                    <p>
                        Employer contributions can be paid
                        into your super fund.
                    </p>

                </div>

            </div>

        </div>


        <button
            class="primary-button"
            onclick="superQuestion()"
        >
            Check your knowledge →
        </button>

    `);

    showScreen("eventScreen");

}


/* =========================================================
   SUPER QUESTION
   ========================================================= */

function superQuestion() {

    setHTML("eventScreen", `

        <div class="day-badge">
            WEDNESDAY • QUICK DECISION
        </div>

        <div class="question-card">

            <h3>
                Your payslip lists a super contribution.
                Which statement best describes it?
            </h3>


            <button
                class="choice-button"
                onclick="answerSuper(this, true)"
            >

                <strong>A</strong>

                <span>
                    It is generally an employer contribution
                    made to your super fund for your future.
                </span>

            </button>


            <button
                class="choice-button"
                onclick="answerSuper(this, false)"
            >

                <strong>B</strong>

                <span>
                    It is extra spending money that should
                    automatically appear in your everyday bank account.
                </span>

            </button>


            <button
                class="choice-button"
                onclick="answerSuper(this, false)"
            >

                <strong>C</strong>

                <span>
                    It is the same thing as the tax taken
                    from your pay.
                </span>

            </button>

        </div>

        <div id="superFeedback"></div>

    `);

}


function answerSuper(button, correct) {

    document
        .querySelectorAll(".choice-button")
        .forEach(btn => btn.classList.add("disabled"));

    if (correct) {

        button.classList.add("correct");

        game.player.xp += 15;
        game.player.reputation += 5;
        game.player.superKnown = true;

        unlockBadge("superSmart");

        setHTML("superFeedback", `

            <div class="feedback-box correct">

                <strong>✓ Correct!</strong>

                <br><br>

                Superannuation is generally paid into
                your super fund rather than being added
                directly to your everyday spending money.

            </div>

            <button
                class="primary-button"
                onclick="showThursday()"
            >
                Continue →
            </button>

        `);

    } else {

        button.classList.add("wrong");

        setHTML("superFeedback", `

            <div class="feedback-box wrong">

                <strong>✕ Not quite.</strong>

                <br><br>

                Super is different from your normal
                take-home pay and from tax withheld.

            </div>

            <button
                class="primary-button"
                onclick="showThursday()"
            >
                Continue →
            </button>

        `);

    }

    updateHeader();

}


/* =========================================================
   THURSDAY
   ========================================================= */

function showThursday() {

    game.player.day = 4;

    setHTML("eventScreen", `

        <div class="day-badge">
            THURSDAY • WORKPLACE SKILLS
        </div>

        <h1>
            Your manager gives you a challenge.
        </h1>

        <p>
            You're asked to help a new employee understand
            their first payslip.
        </p>


        <div class="interview-card">

            <div class="manager-small">
                👩‍💼
            </div>

            <p>
                "Imagine someone has never had a job before.
                What are the three things you'd tell them
                to pay attention to?"
            </p>

        </div>


        <div class="info-card">

            <h3>🎯 Your choices matter</h3>

            <p>
                Pick the response that would actually help
                a new employee.
            </p>

        </div>


        <button
            class="choice-button"
            onclick="workplaceChoice(this, true)"
        >
            <strong>A</strong>

            <span>
                Tell them to check their personal details,
                pay information, tax and super information
                on their payslip.
            </span>

        </button>


        <button
            class="choice-button"
            onclick="workplaceChoice(this, false)"
        >
            <strong>B</strong>

            <span>
                Tell them the payslip isn't important because
                their bank balance is all that matters.
            </span>

        </button>


        <button
            class="choice-button"
            onclick="workplaceChoice(this, false)"
        >
            <strong>C</strong>

            <span>
                Tell them to ignore everything except the
                number of hours they worked.
            </span>

        </button>


        <div id="workplaceFeedback"></div>

    `);

    showScreen("eventScreen");

}


function workplaceChoice(button, correct) {

    document
        .querySelectorAll(".choice-button")
        .forEach(btn => btn.classList.add("disabled"));

    if (correct) {

        button.classList.add("correct");

        game.player.xp += 15;
        game.player.reputation += 10;

        setHTML("workplaceFeedback", `

            <div class="feedback-box correct">

                <strong>✓ Great workplace decision.</strong>

                <br><br>

                Understanding a payslip helps employees
                keep track of their employment information,
                tax and superannuation.

            </div>

            <button
                class="primary-button"
                onclick="prepareChallenge()"
            >
                Continue →
            </button>

        `);

    } else {

        button.classList.add("wrong");

        game.player.xp += 3;

        setHTML("workplaceFeedback", `

            <div class="feedback-box wrong">

                <strong>✕ Think again.</strong>

                <br><br>

                A payslip contains useful information about
                your employment and pay, so it's worth
                checking rather than ignoring it.

            </div>

            <button
                class="primary-button"
                onclick="prepareChallenge()"
            >
                Continue →
            </button>

        `);

    }

    updateHeader();

}


/* =========================================================
   FINAL CHALLENGE INTRO
   ========================================================= */

function prepareChallenge() {

    game.player.day = 5;

    setHTML("eventScreen", `

        <div class="day-badge">
            FRIDAY • FINAL CHALLENGE
        </div>

        <div class="story-icon">
            🎯
        </div>

        <h1>
            Great job this week.
        </h1>

        <p>
            You've learned the basics. Now your manager
            wants to see whether you can actually apply them.
        </p>


        <div class="info-card">

            <h3>
                🧠 This time it's different.
            </h3>

            <p>
                These questions won't simply repeat the
                examples you've already seen.
                You'll need to think about what you've learned.
            </p>

        </div>


        <div class="challenge-topics">

            <span>TFN</span>
            <span>TAX</span>
            <span>SUPER</span>
            <span>PAYSLIP</span>
            <span>WORKPLACE</span>

        </div>


        <div class="info-card">

            <h3>🏆 Your goal</h3>

            <p>
                Get as many correct as possible to improve
                your career score and unlock the best ending.
            </p>

        </div>


        <button
            class="primary-button"
            onclick="startChallenge()"
        >
            Start Final Challenge →
        </button>

    `);

    showScreen("eventScreen");

}


/* =========================================================
   FINAL CHALLENGE DATA
   ========================================================= */

const challengeQuestions = [

    {
        question:
            "Your employer asks you to provide your TFN when completing your employment information. Why is this relevant?",

        answers: [

            "It helps your employer handle relevant tax and employment records correctly.",

            "It guarantees that you will never have tax withheld from your pay.",

            "It is mainly used to calculate how many hours you work.",

            "It is a password that allows you to access your workplace."
        ],

        correct: 0
    },


    {
        question:
            "You receive less money in your bank account than the amount shown as your pay before tax. What could explain this difference?",

        answers: [

            "Your employer has automatically converted part of your pay into super.",

            "Tax may have been withheld before the remaining amount was paid to you.",

            "Your TFN has been removed from your employee record.",

            "Your payslip is only an estimate and never reflects real pay."
        ],

        correct: 1
    },


    {
        question:
            "A friend says, 'My super is missing because I can't see it in my everyday bank account.' What would you tell them?",

        answers: [

            "Superannuation is generally paid into a super fund rather than being normal spending money.",

            "Super is the same as the tax shown on a payslip.",

            "Super should always appear immediately in your everyday bank account.",

            "Super only exists for people who work full-time."
        ],

        correct: 0
    },


    {
        question:
            "Which action would be the most useful habit when you receive a payslip?",

        answers: [

            "Ignore it unless your bank balance looks wrong.",

            "Only look at the final amount and ignore everything else.",

            "Check the information on it so you can understand your pay and deductions.",

            "Delete it immediately because your employer already has a copy."
        ],

        correct: 2
    },


    {
        question:
            "Imagine you start a new job and are unsure about something on your payslip. What is a responsible response?",

        answers: [

            "Guess what the amount means and tell your friends.",

            "Ignore it because payslips are only for managers.",

            "Ask your employer or another appropriate source for clarification.",

            "Change the amount yourself before your next shift."
        ],

        correct: 2
    }

];


let challengeIndex = 0;


/* =========================================================
   START CHALLENGE
   ========================================================= */

function startChallenge() {

    challengeIndex = 0;

    game.player.challengeScore = 0;

    renderChallengeQuestion();

}


/* =========================================================
   RENDER CHALLENGE
   ========================================================= */

function renderChallengeQuestion() {

    const q = challengeQuestions[challengeIndex];

    const total = challengeQuestions.length;

    setHTML("eventScreen", `

        <div class="day-badge">
            FRIDAY • CHALLENGE
        </div>


        <div class="question-progress">

            <span>
                Question ${challengeIndex + 1} of ${total}
            </span>

            <div class="progress-track">

                <div
                    class="progress-fill"
                    style="width:${((challengeIndex) / total) * 100}%"
                ></div>

            </div>

        </div>


        <div class="question-card">

            <h3>
                ${escapeHTML(q.question)}
            </h3>


            ${q.answers.map((answer, index) => `

                <button
                    class="choice-button"
                    onclick="answerChallenge(this, ${index})"
                >

                    <strong>
                        ${String.fromCharCode(65 + index)}
                    </strong>

                    <span>
                        ${escapeHTML(answer)}
                    </span>

                </button>

            `).join("")}

        </div>


        <div id="challengeFeedback"></div>

    `);

    showScreen("eventScreen");

}


/* =========================================================
   ANSWER CHALLENGE
   ========================================================= */

function answerChallenge(button, selectedIndex) {

    const q = challengeQuestions[challengeIndex];

    const buttons =
        document.querySelectorAll(".choice-button");

    buttons.forEach(btn =>
        btn.classList.add("disabled")
    );

    const correct =
        selectedIndex === q.correct;

    if (correct) {

        button.classList.add("correct");

        game.player.challengeScore++;

        game.player.xp += 20;

        game.player.reputation += 8;

        setHTML("challengeFeedback", `

            <div class="feedback-box correct">

                <strong>✓ Correct!</strong>

                <br><br>

                That's the kind of reasoning your manager
                was looking for.

            </div>

            <button
                class="primary-button"
                onclick="nextChallengeQuestion()"
            >
                ${challengeIndex === challengeQuestions.length - 1
                    ? "See My Results →"
                    : "Next Question →"}
            </button>

        `);

    } else {

        button.classList.add("wrong");

        buttons[q.correct].classList.add("correct");

        game.player.xp += 5;

        setHTML("challengeFeedback", `

            <div class="feedback-box wrong">

                <strong>✕ Not quite.</strong>

                <br><br>

                The correct answer was highlighted above.
                The important thing is understanding why.

            </div>

            <button
                class="primary-button"
                onclick="nextChallengeQuestion()"
            >
                ${challengeIndex === challengeQuestions.length - 1
                    ? "See My Results →"
                    : "Next Question →"}
            </button>

        `);

    }

    updateHeader();

}


/* =========================================================
   NEXT CHALLENGE QUESTION
   ========================================================= */

function nextChallengeQuestion() {

    challengeIndex++;

    if (challengeIndex >= challengeQuestions.length) {

        finishChallenge();

        return;
    }

    renderChallengeQuestion();

}


/* =========================================================
   CHALLENGE RESULTS
   ========================================================= */

function finishChallenge() {

    const score = game.player.challengeScore;

    const total = challengeQuestions.length;

    let message = "";

    if (score === total) {

        message =
            "Perfect score. You absolutely nailed it.";

        unlockBadge("challengeMaster");

    } else if (score >= 4) {

        message =
            "Excellent work. You clearly understand the basics.";

        unlockBadge("workplaceReady");

    } else if (score >= 3) {

        message =
            "Solid result. You've got a good foundation.";

    } else {

        message =
            "You made it through the challenge. There are still a few things to keep learning.";

    }


    setHTML("eventScreen", `

        <div class="day-badge">
            FRIDAY • RESULTS
        </div>

        <div class="story-icon">
            ${score >= 4 ? "🏆" : "🎯"}
        </div>

        <h1>
            Challenge complete!
        </h1>

        <div class="responsibility-card">

            <div class="check-icon">
                ${score >= 4 ? "✓" : "!"}
            </div>

            <h2>
                ${score}/${total}
            </h2>

            <p>
                ${message}
            </p>

        </div>


        <div class="info-card">

            <h3>📊 What you demonstrated</h3>

            <p>
                You were tested on TFNs, tax, superannuation,
                payslips and responsible workplace decisions.
            </p>

        </div>


        <button
            class="primary-button"
            onclick="showFinalCareer()"
        >
            See My Career Results →
        </button>

    `);

    showScreen("eventScreen");

}


/* =========================================================
   CAREER RESULTS
   ========================================================= */

function showFinalCareer() {

    const score = game.player.challengeScore;

    let rank;

    if (score === 5 && game.player.reputation >= 30) {

        rank = "Future Leader";

    } else if (score >= 4) {

        rank = "Workplace Ready";

    } else if (score >= 3) {

        rank = "Promising Employee";

    } else {

        rank = "Getting Started";

    }


    setHTML("endingScreen", `

        <div class="day-badge">
            WEEK 1 • CAREER REPORT
        </div>

        <h1>
            Your week at work 📊
        </h1>


        <div class="report-card">

            <div class="report-row">

                <span>
                    Employee
                </span>

                <strong>
                    ${escapeHTML(game.player.name)}
                </strong>

            </div>


            <div class="report-row">

                <span>
                    Job
                </span>

                <strong>
                    ${escapeHTML(game.player.job)}
                </strong>

            </div>


            <div class="report-row">

                <span>
                    Final XP
                </span>

                <strong>
                    ${game.player.xp}
                </strong>

            </div>


            <div class="report-row">

                <span>
                    Reputation
                </span>

                <strong>
                    ${game.player.reputation}
                </strong>

            </div>


            <div class="report-row">

                <span>
                    Challenge
                </span>

                <strong>
                    ${score}/5
                </strong>

            </div>


            <div class="report-row">

                <span>
                    Career Level
                </span>

                <strong>
                    ${rank}
                </strong>

            </div>

        </div>


        <div class="manager-feedback">

            <div class="manager-small">
                👩‍💼
            </div>

            <p>
                ${getManagerFeedback(score)}
            </p>

        </div>


        <button
            class="primary-button"
            onclick="showEnding()"
        >
            See My Ending →
        </button>

    `);

    showScreen("endingScreen");

}


/* =========================================================
   MANAGER FEEDBACK
   ========================================================= */

function getManagerFeedback(score) {

    if (score === 5) {

        return `
            "Outstanding work, ${escapeHTML(game.player.name)}.
            You didn't just memorise the information —
            you understood it."
        `;

    }

    if (score >= 4) {

        return `
            "Great job. You've shown that you're ready
            to handle the basics of starting work."
        `;

    }

    if (score >= 3) {

        return `
            "You've built a solid foundation. Keep asking
            questions and checking your payslips."
        `;

    }

    return `
        "Everyone starts somewhere. You've learned the
        basics, and now you know what areas to improve."
    `;

}


/* =========================================================
   MULTIPLE ENDINGS
   ========================================================= */

function showEnding() {

    const score = game.player.challengeScore;

    let endingTitle = "";
    let endingIcon = "";
    let endingText = "";
    let endingClass = "";

    if (score === 5 && game.player.reputation >= 30) {

        endingTitle = "THE FUTURE LEADER";
        endingIcon = "🏆";

        endingText = `
            You finished your first week with an excellent
            understanding of your responsibilities.

            Your manager is impressed by your knowledge,
            decision-making and willingness to learn.

            Your career is off to an amazing start.
        `;

        game.player.ending = "Future Leader";

    } else if (score >= 4) {

        endingTitle = "WORKPLACE READY";
        endingIcon = "⭐";

        endingText = `
            You made it through your first week and proved
            that you understand the most important basics
            of starting work.

            Your manager thinks you're ready for more
            responsibility.
        `;

        game.player.ending = "Workplace Ready";

    } else if (score >= 3) {

        endingTitle = "PROMISING START";
        endingIcon = "📈";

        endingText = `
            Your first week was a learning experience.

            You understand the basics and know what you
            need to keep improving.

            Every great career starts somewhere.
        `;

        game.player.ending = "Promising Start";

    } else {

        endingTitle = "BACK TO TRAINING";
        endingIcon = "💪";

        endingText = `
            You completed your first week, but there are
            still some important things to practise.

            The good news?

            Now you know what to work on.
        `;

        game.player.ending = "Back to Training";

    }


    unlockBadge("weekOne");

    setHTML("endingScreen", `

        <div class="day-badge">
            FRIDAY • FINAL RESULT
        </div>


        <div class="certificate">

            <div class="certificate-top">
                ${endingIcon}
            </div>

            <div class="certificate-small">
                MY FIRST JOB
            </div>

            <h1>
                ${endingTitle}
            </h1>

            <p>
                This certificate recognises
            </p>

            <h2>
                ${escapeHTML(game.player.name)}
            </h2>

            <p>
                for completing their first simulated
                week of employment.
            </p>


            <div class="certificate-list">

                ✓ Understanding TFNs<br>

                ✓ Understanding tax<br>

                ✓ Understanding superannuation<br>

                ✓ Reading a payslip<br>

                ✓ Workplace decision-making

            </div>


            <div class="certificate-status">

                🏅 ${game.player.ending}

            </div>


            <div class="certificate-date">
                WEEK 1 COMPLETE
            </div>

        </div>


        <div class="info-card">

            <h3>
                Your story
            </h3>

            <p>
                ${endingText}
            </p>

        </div>


        <button
            class="primary-button"
            onclick="showBadges()"
        >
            View Badges →
        </button>


        <button
            class="secondary-button"
            onclick="restartGame()"
        >
            🔄 Play Again
        </button>

    `);

    showScreen("endingScreen");

}


/* =========================================================
   BADGES
   ========================================================= */

const badgeData = {

    firstDay: {
        icon: "🌟",
        name: "First Day",
        description: "Completed your first day at work."
    },

    superSmart: {
        icon: "🏦",
        name: "Super Smart",
        description: "Successfully understood superannuation."
    },

    challengeMaster: {
        icon: "🧠",
        name: "Challenge Master",
        description: "Scored 5/5 in the final challenge."
    },

    workplaceReady: {
        icon: "💼",
        name: "Workplace Ready",
        description: "Scored highly in the final challenge."
    },

    weekOne: {
        icon: "🏅",
        name: "Week One Complete",
        description: "Completed your first simulated work week."
    }

};


function unlockBadge(id) {

    if (!game.player.badges.includes(id)) {

        game.player.badges.push(id);

    }

}


function showBadges() {

    const badgesHTML =
        Object.entries(badgeData)
            .map(([id, badge]) => {

                const unlocked =
                    game.player.badges.includes(id);

                return `

                    <div class="achievement ${unlocked ? "unlocked" : ""}">

                        <span>
                            ${unlocked ? badge.icon : "🔒"}
                        </span>

                        <div>

                            <strong>
                                ${badge.name}
                            </strong>

                            <p>
                                ${unlocked
                                    ? badge.description
                                    : "Keep playing to unlock this badge."}
                            </p>

                        </div>

                    </div>

                `;

            })
            .join("");


    setHTML("endingScreen", `

        <div class="day-badge">
            ACHIEVEMENTS
        </div>

        <h1>
            Your badges 🏅
        </h1>

        <p>
            You've earned
            <strong>
                ${game.player.badges.length}
            </strong>
            badge${game.player.badges.length === 1 ? "" : "s"}.
        </p>


        <div class="achievement-list">

            ${badgesHTML}

        </div>


        <button
            class="primary-button"
            onclick="showEnding()"
        >
            Back to Results
        </button>


        <button
            class="secondary-button"
            onclick="restartGame()"
        >
            🔄 Play Again
        </button>

    `);

    showScreen("endingScreen");

}


/* =========================================================
   RESTART
   ========================================================= */

function restartGame() {

    resetPlayer();

    challengeIndex = 0;

    renderProfileScreen();

    showScreen("profileScreen");

}


/* =========================================================
   NOTIFICATION SYSTEM
   ========================================================= */

function showNotification(title, message, icon = "📱") {

    const old =
        document.querySelector(".notification");

    if (old) {
        old.remove();
    }


    const notification =
        document.createElement("div");

    notification.className =
        "notification";

    notification.innerHTML = `

        <div class="notification-icon">
            ${icon}
        </div>

        <div>

            <strong>
                ${escapeHTML(title)}
            </strong>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>

    `;


    const phone =
        document.querySelector(".phone");

    if (phone) {

        phone.appendChild(notification);

        setTimeout(() => {

            notification.style.opacity = "0";

            notification.style.transform =
                "translateY(-15px)";

            setTimeout(() => {

                notification.remove();

            }, 300);

        }, 3500);

    }

}


/* =========================================================
   GAME EVENTS
   ========================================================= */

function notifyPayslip() {

    showNotification(
        "New Payslip",
        "Your weekly payslip is ready to view.",
        "🧾"
    );

}


function notifyBadge(badge) {

    const data = badgeData[badge];

    if (!data) return;

    showNotification(
        "Badge Unlocked!",
        data.name,
        data.icon
    );

}


/* =========================================================
   SAVE GAME
   ========================================================= */

function saveGame() {

    try {

        localStorage.setItem(
            "myFirstJobSave",
            JSON.stringify(game.player)
        );

    } catch (error) {

        console.log("Save unavailable.");

    }

}


/* =========================================================
   LOAD GAME
   ========================================================= */

function loadGame() {

    try {

        const saved =
            localStorage.getItem("myFirstJobSave");

        if (!saved) return false;

        const player =
            JSON.parse(saved);

        if (!player || !player.name) {
            return false;
        }

        game.player = player;

        return true;

    } catch (error) {

        return false;

    }

}


/* =========================================================
   AUTOMATIC SAVE
   ========================================================= */

setInterval(() => {

    saveGame();

}, 5000);


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        const active =
            document.querySelector(".screen.active");

        if (!active) return;

        const button =
            active.querySelector(
                ".primary-button"
            );

        if (button) {
            button.click();
        }

    }

});


/* =========================================================
   INITIALISE GAME
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    updateHeader();

    /*
       This keeps the game on the home screen
       when the page first loads.
    */

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    const home =
        get("homeScreen");

    if (home) {

        home.classList.add("active");

    }

});


/* =========================================================
   MAKE FUNCTIONS AVAILABLE TO HTML
   ========================================================= */

window.startGame = startGame;
window.chooseAvatar = chooseAvatar;
window.finishProfile = finishProfile;

window.startTraining = startTraining;
window.trainingQuiz = trainingQuiz;
window.answerTraining = answerTraining;

window.chooseJob = chooseJob;
window.selectJob = selectJob;

window.showShiftIntro = showShiftIntro;
window.finishMonday = finishMonday;

window.showTuesday = showTuesday;
window.showTaxLesson = showTaxLesson;

window.showPayslip = showPayslip;
window.taxQuestion = taxQuestion;
window.answerTax = answerTax;

window.showSuperLesson = showSuperLesson;
window.superQuestion = superQuestion;
window.answerSuper = answerSuper;

window.showThursday = showThursday;
window.workplaceChoice = workplaceChoice;

window.prepareChallenge = prepareChallenge;
window.startChallenge = startChallenge;
window.answerChallenge = answerChallenge;
window.nextChallengeQuestion = nextChallengeQuestion;

window.finishChallenge = finishChallenge;
window.showFinalCareer = showFinalCareer;

window.showEnding = showEnding;
window.showBadges = showBadges;

window.restartGame = restartGame;

window.showNotification = showNotification;
window.notifyPayslip = notifyPayslip;


/* =========================================================
   END
   ========================================================= */
