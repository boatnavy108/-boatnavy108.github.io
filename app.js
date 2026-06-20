// ==========================================
// 1. QUESTION DATABASE (20 Thai AirAsia Cabin Crew Qs)
// ==========================================
const questions = [
    {
        id: 1,
        question: "Primary communication after flight deck locked?",
        options: {
            A: "ACARS",
            B: "VHF Radio",
            C: "Interphone",
            D: "SATCOM"
        },
        correct: "C",
        category: "A: In-Flight Comm",
        explanation: "หลังจากประตูกลุ่มห้องนักบิน (Flight Deck) ปิดล็อกแล้ว ช่องทางหลักสำหรับการสื่อสารระหว่างนักบินและลูกเรือคือระบบ Interphone เพื่อความปลอดภัยและความเป็นส่วนตัวสูงสุด"
    },
    {
        id: 2,
        question: "Standard language between crew?",
        options: {
            A: "Thai",
            B: "Native Language",
            C: "English",
            D: "Any Language"
        },
        correct: "C",
        category: "A: In-Flight Comm",
        explanation: "ภาษาอังกฤษ (English) เป็นมาตรฐานสากลตามข้อกำหนดความปลอดภัยการบินในการสื่อสารระหว่างลูกเรือขณะปฏิบัติหน้าที่ เพื่อหลีกเลี่ยงความเข้าใจผิดในการประสานงาน"
    },
    {
        id: 3,
        question: "Passenger abnormality information should be reported to?",
        options: {
            A: "Ground Staff",
            B: "SCC only",
            C: "Flight Deck",
            D: "Dispatcher"
        },
        correct: "C",
        category: "A: In-Flight Comm",
        explanation: "ข้อมูลพฤติกรรมผิดปกติหรือเหตุผิดปกติของผู้โดยสาร (Passenger Abnormality) จะต้องรายงานให้นักบิน (Flight Deck) ทราบโดยตรงและรวดเร็ว เพื่อการวางแผนความปลอดภัยและการแจ้งหอบังคับการ"
    },
    {
        id: 4,
        question: "Correct SCC feedback phrase?",
        options: {
            A: "Roger Captain",
            B: "Loud and Clear",
            C: "Captain/FO, announcement loud and clear",
            D: "Message received"
        },
        correct: "C",
        category: "A: In-Flight Comm",
        explanation: "การขานรับรายงานของหัวหน้าลูกเรือ (SCC) เมื่อได้ยินประกาศจากห้องนักบินชัดเจน จะใช้ประโยคยืนยันที่เป็นทางการ เช่น 'Captain/FO, announcement loud and clear'"
    },
    {
        id: 5,
        question: "Completion report phrase?",
        options: {
            A: "Cabin Ready",
            B: "Security Check Complete",
            C: "Safety equipment, cabin systems and security check completed",
            D: "Aircraft Ready"
        },
        correct: "C",
        category: "B: Safety & Security",
        explanation: "รายงานที่เป็นทางการเมื่อตรวจสอบความปลอดภัยเสร็จสิ้นคือ 'Safety equipment, cabin systems and security check completed' เพื่อรับรองว่าอุปกรณ์ช่วยชีวิต ระบบในเคบิน และการตรวจสอบความปลอดภัยเรียบร้อยแล้ว"
    },
    {
        id: 6,
        question: "Who reports to PIC?",
        options: {
            A: "P2",
            B: "P3",
            C: "P4",
            D: "SCC"
        },
        correct: "D",
        category: "B: Safety & Security",
        explanation: "หัวหน้าลูกเรือ (SCC: Senior Cabin Crew) จะเป็นผู้รวบรวมรายงานความปลอดภัยทั้งหมดจากลูกเรือทุกคน ก่อนจะทำการประสานงานรายงานให้กัปตัน/ผู้ควบคุมเครื่องบิน (PIC) ทราบเป็นขั้นตอนสุดท้าย"
    },
    {
        id: 7,
        question: "First person to report damaged equipment?",
        options: {
            A: "Ground Staff",
            B: "SCC",
            C: "Dispatcher",
            D: "Security"
        },
        correct: "B",
        category: "B: Safety & Security",
        explanation: "เมื่อพบอุปกรณ์ชำรุดหรือวัตถุต้องสงสัยในเคบิน ลูกเรือต้องรายงานต่อหัวหน้าลูกเรือ (SCC) ก่อนเป็นอันดับแรก เพื่อให้ SCC ประเมินสถานการณ์และตัดสินใจตามขั้นตอนปฏิบัติ"
    },
    {
        id: 8,
        question: "Who initiates interphone check?",
        options: {
            A: "SCC",
            B: "P2",
            C: "Engineer",
            D: "Flight Deck"
        },
        correct: "D",
        category: "B: Safety & Security",
        explanation: "ฝ่ายบินหรือนักบินในห้องควบคุม (Flight Deck) จะเป็นผู้ริเริ่มการทดสอบระบบสื่อสารอินเตอร์โฟน (Interphone check) ก่อนทำการบินเสมอ"
    },
    {
        id: 9,
        question: "Minimum flight crew in cockpit?",
        options: {
            A: "0",
            B: "1",
            C: "2",
            D: "3"
        },
        correct: "B",
        category: "C: Embarkation",
        explanation: "ในระหว่างช่วงที่ผู้โดยสารขึ้นเครื่อง (Embarkation) จะต้องมีนักบิน (Flight Crew) ปฏิบัติหน้าที่อยู่ในห้องนักบินอย่างน้อย 1 คน เพื่อเฝ้าระวังระบบและพร้อมรับสถานการณ์ฉุกเฉิน"
    },
    {
        id: 10,
        question: "Cabin crew task during embarkation?",
        options: {
            A: "Check boarding pass",
            B: "Monitor suspicious passengers",
            C: "Monitor baggage",
            D: "All"
        },
        correct: "D",
        category: "C: Embarkation",
        explanation: "หน้าที่ของลูกเรือระหว่างรับผู้โดยสารขึ้นเครื่อง (Embarkation) รวมถึงการตรวจบัตรขึ้นเครื่อง (Boarding pass), การสังเกตและเฝ้าระวังผู้โดยสารที่มีพฤติกรรมต้องสงสัย และตรวจสอบสัมภาระถือขึ้นเครื่องให้เป็นระเบียบเรียบร้อย"
    },
    {
        id: 11,
        question: "Passenger requiring monitoring?",
        options: {
            A: "Intoxicated",
            B: "Unruly",
            C: "Drug/alcohol influence",
            D: "All"
        },
        correct: "D",
        category: "C: Embarkation",
        explanation: "ผู้โดยสารกลุ่มที่ต้องได้รับการเฝ้าระวังเป็นพิเศษ ได้แก่ ผู้โดยสารที่มีอาการมึนเมา (Intoxicated), ผู้โดยสารที่ไม่อยู่ในระเบียบ (Unruly) และผู้โดยสารที่อยู่ภายใต้ฤทธิ์ของสารเสพติด/แอลกอฮอล์"
    },
    {
        id: 12,
        question: "Cabin light setting?",
        options: {
            A: "OFF",
            B: "DIM",
            C: "BRIGHT",
            D: "NIGHT"
        },
        correct: "C",
        category: "C: Embarkation",
        explanation: "การตั้งค่าไฟในห้องโดยสารระหว่างช่วงขึ้นเครื่อง (Embarkation) ต้องเปิดสว่างสูงสุด (BRIGHT) เพื่อความปลอดภัยในการเคลื่อนย้ายตัวของผู้โดยสาร และความสะดวกในการสังเกตการณ์ของลูกเรือ"
    },
    {
        id: 13,
        question: "Exit row briefing completed before?",
        options: {
            A: "Pushback/Taxi",
            B: "Takeoff",
            C: "Cruise",
            D: "Landing"
        },
        correct: "A",
        category: "D: Exit Row Brief",
        explanation: "การบรรยายสรุปแก่ผู้โดยสารที่นั่งแถวประตูทางออกฉุกเฉิน (Exit Row Briefing) จะต้องเสร็จสิ้นสมบูรณ์ก่อนที่เครื่องบินจะทำการดันตัวออกจากหลุมจอดหรือเคลื่อนตัวไปตามทางขับ (Pushback/Taxi)"
    },
    {
        id: 14,
        question: "Check before briefing?",
        options: {
            A: "Seat Belt",
            B: "Manifest",
            C: "Safety Card",
            D: "Life Vest"
        },
        correct: "C",
        category: "D: Exit Row Brief",
        explanation: "ก่อนทำการบรรยายทางออกฉุกเฉิน ลูกเรือต้องตรวจสอบให้มั่นใจว่าผู้โดยสารได้รับและกำลังตรวจสอบแผ่นพับข้อมูลความปลอดภัย (Safety Card) ประจำที่นั่ง"
    },
    {
        id: 15,
        question: "Exit row passenger must?",
        options: {
            A: "Frequent Flyer",
            B: "Willing and able to assist",
            C: "Member card holder",
            D: "Over 50"
        },
        correct: "B",
        category: "D: Exit Row Brief",
        explanation: "ผู้โดยสารที่นั่งบริเวณทางออกฉุกเฉินจะต้องมีความยินยอมสมัครใจและมีความพร้อมทางร่างกายที่จะช่วยควบคุมประตูปฏิบัติการอพยพในกรณีเกิดเหตุฉุกเฉิน (Be willing and able to assist)"
    },
    {
        id: 16,
        question: "If not qualified?",
        options: {
            A: "Leave seated",
            B: "Inform PIC",
            C: "Reseat passenger",
            D: "Record later"
        },
        correct: "C",
        category: "D: Exit Row Brief",
        explanation: "หากผู้โดยสารไม่เข้าเกณฑ์เงื่อนไขในการนั่งแถวทางออกฉุกเฉิน (เช่น อายุต่ำกว่าเกณฑ์, เจ็บป่วย) ลูกเรือต้องทำการย้ายที่นั่งผู้โดยสารไปยังที่นั่งปกติทันทีเพื่อความปลอดภัย"
    },
    {
        id: 17,
        question: "Phrase indicating possible evacuation soon?",
        options: {
            A: "PURSER TO COCKPIT PLEASE",
            B: "ATTENTION CREW! AT STATIONS!",
            C: "EVACUATE EVACUATE",
            D: "BRACE FOR IMPACT"
        },
        correct: "B",
        category: "E: Emergency Ops",
        explanation: "คำสั่งที่เป็นสัญญาณเตือนจากห้องนักบินว่าอาจมีการอพยพเกิดขึ้นในไม่ช้าคือ 'ATTENTION CREW! AT STATIONS!' เพื่อให้ลูกเรือทุกคนเตรียมพร้อมประจำตำแหน่งทางออกฉุกเฉินของตนเอง"
    },
    {
        id: 18,
        question: "Emergency call from cabin to cockpit?",
        options: {
            A: "CAPTAIN PLEASE",
            B: "EMERGENCY",
            C: "PRIO CAPT",
            D: "URGENT CALL"
        },
        correct: "C",
        category: "E: Emergency Ops",
        explanation: "สำหรับการโทรฉุกเฉินจากห้องโดยสารไปยังห้องนักบินเพื่อขอความช่วยเหลือเร่งด่วน จะใช้ปุ่มหรือสายโทรพิเศษคือ 'PRIO CAPT' (Priority Call to Captain)"
    },
    {
        id: 19,
        question: "Landing command?",
        options: {
            A: "Prepare Landing",
            B: "Standby",
            C: "Cabin Crew, be seated for landing",
            D: "Secure Cabin"
        },
        correct: "C",
        category: "E: Emergency Ops",
        explanation: "เมื่อเครื่องบินพร้อมสำหรับการลงจอด นักบินจะส่งคำสั่งอย่างเป็นทางการผ่านเสียงประกาศว่า 'Cabin Crew, be seated for landing' เพื่อให้ลูกเรือนั่งประจำที่รัดเข็มขัดนิรภัยให้เรียบร้อย"
    },
    {
        id: 20,
        question: "Cabin crew initiate evacuation?",
        options: {
            A: "No",
            B: "SCC only",
            C: "Yes if unmistakably necessary",
            D: "Engines off only"
        },
        correct: "C",
        category: "E: Emergency Ops",
        explanation: "ลูกเรือสามารถริเริ่มการอพยพผู้โดยสารได้ด้วยตนเองโดยไม่ต้องรอคำสั่งจากห้องนักบิน หากเห็นว่าสถานการณ์ฉุกเฉินรุนแรงและจำเป็นอย่างชัดเจนที่สุด (เช่น เกิดไฟไหม้ใหญ่ในเคบินหรือเครื่องตกน้ำ)"
    }
];

// ==========================================
// 2. STATE MANAGEMENT VARIABLES
// ==========================================
let activeQuizMode = 'set-1'; // 'set-1', 'set-2', 'full', 'random'
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Logs: { questionId, selected, correct, isTimeout, timeSpent }
let timerInterval = null;
let secondsRemaining = 30;
let questionStartTime = null;
let currentSelectedOption = null;

// ==========================================
// 3. INITIALIZATION & DOMELEMENTS BINDING
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Views
    const dashboardView = document.getElementById('dashboard-view');
    const quizView = document.getElementById('quiz-view');
    const summaryView = document.getElementById('summary-view');

    // Modals
    const historyModal = document.getElementById('history-modal');
    const historyBtn = document.getElementById('history-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    // Controls
    const setCards = document.querySelectorAll('.set-card');
    const quitQuizBtn = document.getElementById('quit-quiz-btn');
    const retryBtn = document.getElementById('retry-btn');
    const goHomeBtn = document.getElementById('go-home-btn');

    // Bind Exam Set Selection
    setCards.forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.getAttribute('data-mode');
            startQuiz(mode);
        });
    });

    // Bind Option Buttons
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentSelectedOption !== null) return; // Prevent double select
            const choice = btn.getAttribute('data-choice');
            selectOption(choice, btn);
        });
    });

    // Bind Quiz Exit/Retry/Home
    quitQuizBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to exit the quiz? Your progress will be lost.")) {
            clearInterval(timerInterval);
            switchView('dashboard');
        }
    });

    retryBtn.addEventListener('click', () => {
        startQuiz(activeQuizMode);
    });

    goHomeBtn.addEventListener('click', () => {
        switchView('dashboard');
    });

    // Bind History Modal Actions
    historyBtn.addEventListener('click', () => {
        showHistoryModal();
    });

    closeModalBtn.addEventListener('click', () => {
        historyModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === historyModal) {
            historyModal.style.display = 'none';
        }
    });

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to clear all history? This action cannot be undone.")) {
            localStorage.removeItem('quiz_history');
            showHistoryModal(); // Refresh modal
            updateDashboardPerformance(); // Refresh dashboard
        }
    });

    // Load initial performance dashboard stats
    updateDashboardPerformance();

    // Bind Next Question button click for explanations
    const nextQuestionBtn = document.getElementById('next-question-btn');
    nextQuestionBtn.addEventListener('click', () => {
        document.getElementById('quiz-explanation-box').style.display = 'none';
        advanceQuestion();
    });
});

// ==========================================
// 4. VIEW CONTROLLER
// ==========================================
function switchView(viewName) {
    const dashboardView = document.getElementById('dashboard-view');
    const quizView = document.getElementById('quiz-view');
    const summaryView = document.getElementById('summary-view');

    dashboardView.style.display = 'none';
    quizView.style.display = 'none';
    summaryView.style.display = 'none';

    if (viewName === 'dashboard') {
        dashboardView.style.display = 'block';
        updateDashboardPerformance();
    } else if (viewName === 'quiz') {
        quizView.style.display = 'block';
    } else if (viewName === 'summary') {
        summaryView.style.display = 'block';
    }
}

// ==========================================
// 5. QUIZ ENGINE LOGIC
// ==========================================
function startQuiz(mode) {
    activeQuizMode = mode;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    currentSelectedOption = null;

    // Filter questions based on mode selection (Set 1 = Q1-12, Set 2 = Q13-20)
    if (mode === 'set-1') {
        quizQuestions = questions.slice(0, 12);
    } else if (mode === 'set-2') {
        quizQuestions = questions.slice(12, 20);
    } else if (mode === 'full') {
        quizQuestions = [...questions];
    } else if (mode === 'random') {
        // Shuffle the clone array of questions
        quizQuestions = [...questions].sort(() => Math.random() - 0.5);
    }

    document.getElementById('total-q-num').innerText = quizQuestions.length;
    switchView('quiz');
    showQuestion();
}

function showQuestion() {
    currentSelectedOption = null;
    const qData = quizQuestions[currentQuestionIndex];

    // Reset option classes and hide explanation box
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.className = 'option-btn';
    });

    document.getElementById('quiz-explanation-box').style.display = 'none';

    // Set Text Values
    document.getElementById('current-q-num').innerText = currentQuestionIndex + 1;
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}] ${qData.question}`;
    document.getElementById('opt-A').innerText = qData.options.A;
    document.getElementById('opt-B').innerText = qData.options.B;
    document.getElementById('opt-C').innerText = qData.options.C;
    document.getElementById('opt-D').innerText = qData.options.D;

    // Restart Timer
    startQuestionTimer();
}

// Timer Functions
function startQuestionTimer() {
    clearInterval(timerInterval);
    secondsRemaining = 30;
    questionStartTime = Date.now();

    const timerTextElement = document.getElementById('timer-text');
    const timerProgressElement = document.getElementById('timer-progress');

    timerTextElement.innerText = secondsRemaining;
    timerTextElement.classList.remove('urgent');
    timerProgressElement.classList.remove('urgent');
    updateTimerProgress(100);

    timerInterval = setInterval(() => {
        secondsRemaining--;
        timerTextElement.innerText = secondsRemaining;

        // Visual warnings at remaining 5 seconds
        if (secondsRemaining <= 5) {
            timerTextElement.classList.add('urgent');
            timerProgressElement.classList.add('urgent');
        }

        const percentage = (secondsRemaining / 30) * 100;
        updateTimerProgress(percentage);

        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerProgress(percentage) {
    const timerProgressElement = document.getElementById('timer-progress');
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius; // Approx 100
    const offset = circumference - (percentage / 100) * circumference;
    timerProgressElement.style.strokeDasharray = `${percentage}, 100`;
}

// Timeout handler
function handleTimeout() {
    currentSelectedOption = "TIMEOUT";
    const qData = quizQuestions[currentQuestionIndex];
    const timeSpent = 30;

    // Log Answer
    userAnswers.push({
        questionId: qData.id,
        selected: null,
        correct: qData.correct,
        isTimeout: true,
        timeSpent: timeSpent
    });

    // Reveal correct option in green
    revealCorrectOption(qData.correct);

    // Show Explanation Box with Timeout Status
    const expBox = document.getElementById('quiz-explanation-box');
    const iconSpan = document.getElementById('ex-status-icon');
    const titleH4 = document.getElementById('ex-status-title');
    const ruleText = document.getElementById('ex-rule-text');

    expBox.className = "quiz-explanation-box timeout-style";
    iconSpan.innerHTML = '<i class="fa-solid fa-clock"></i>';
    titleH4.innerText = "Time's Up!";
    ruleText.innerHTML = `<strong>Correct Answer:</strong> Option ${qData.correct}. ${qData.options[qData.correct]}<br><br><strong>Explanation:</strong> ${qData.explanation}`;
    
    expBox.style.display = 'flex';
}

// Handle Option Button Clicks
function selectOption(choice, btnElement) {
    clearInterval(timerInterval);
    currentSelectedOption = choice;
    const qData = quizQuestions[currentQuestionIndex];
    const timeSpent = Math.min(30, (Date.now() - questionStartTime) / 1000);
    const isCorrect = choice === qData.correct;

    if (isCorrect) score++;

    // Log Answer
    userAnswers.push({
        questionId: qData.id,
        selected: choice,
        correct: qData.correct,
        isTimeout: false,
        timeSpent: parseFloat(timeSpent.toFixed(1))
    });

    // Highlight selection
    if (isCorrect) {
        btnElement.classList.add('selected-correct');
        // Auto-advance after 1 second if correct
        setTimeout(() => {
            advanceQuestion();
        }, 1000);
    } else {
        btnElement.classList.add('selected-incorrect');
        revealCorrectOption(qData.correct);

        // Show Explanation Box with Incorrect Status
        const expBox = document.getElementById('quiz-explanation-box');
        const iconSpan = document.getElementById('ex-status-icon');
        const titleH4 = document.getElementById('ex-status-title');
        const ruleText = document.getElementById('ex-rule-text');

        expBox.className = "quiz-explanation-box incorrect-style";
        iconSpan.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        titleH4.innerText = "Incorrect";
        ruleText.innerHTML = `<strong>Correct Answer:</strong> Option ${qData.correct}. ${qData.options[qData.correct]}<br><br><strong>Explanation:</strong> ${qData.explanation}`;
        
        expBox.style.display = 'flex';
    }
}

function revealCorrectOption(correctChoice) {
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        if (btn.getAttribute('data-choice') === correctChoice) {
            btn.classList.add('selected-correct');
        }
    });
}

function advanceQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showQuizSummary();
    }
}

// ==========================================
// 6. QUIZ SUMMARY GENERATOR
// ==========================================
function showQuizSummary() {
    switchView('summary');

    // Title Title
    let titleStr = "Completed: ";
    if (activeQuizMode === 'set-1') titleStr += "Cabin Crew Set 1";
    else if (activeQuizMode === 'set-2') titleStr += "Cabin Crew Set 2";
    else if (activeQuizMode === 'full') titleStr += "Full Knowledge Test";
    else if (activeQuizMode === 'random') titleStr += "Random Mode";
    document.getElementById('summary-set-title').innerText = titleStr;

    // Scores & Percentages
    const totalQCount = quizQuestions.length;
    const accuracyPercent = Math.round((score / totalQCount) * 100);

    document.getElementById('final-score').innerText = score;
    document.getElementById('final-total').innerText = `/${totalQCount}`;
    
    // Animate radial progress ring
    const scoreProgress = document.getElementById('score-progress');
    setTimeout(() => {
        scoreProgress.style.strokeDasharray = `${accuracyPercent}, 100`;
    }, 100);

    // Score Evaluation Message
    const evalTitle = document.getElementById('evaluation-title');
    const evalDesc = document.getElementById('evaluation-desc');
    if (accuracyPercent >= 80) {
        evalTitle.innerText = "Outstanding!";
        evalTitle.className = "text-green";
        evalDesc.innerText = "Excellent safety skills! You have a great grasp of Cabin Crew operations.";
    } else if (accuracyPercent >= 50) {
        evalTitle.innerText = "Good Job!";
        evalTitle.className = "text-yellow";
        evalDesc.innerText = "Solid effort. Reviewing your incorrect answers will help secure a top score.";
    } else {
        evalTitle.innerText = "Need Practice";
        evalTitle.className = "text-red";
        evalDesc.innerText = "Study the cabin crew rules and emergency guidelines below and try again!";
    }

    // Stats Grid Calculation
    const totalTimeSpent = userAnswers.reduce((sum, item) => sum + item.timeSpent, 0);
    const avgTimeSpent = totalTimeSpent / totalQCount;

    document.getElementById('stat-accuracy').innerText = `${accuracyPercent}%`;
    document.getElementById('stat-total-time').innerText = `${Math.round(totalTimeSpent)}s`;
    document.getElementById('stat-avg-time').innerText = `${avgTimeSpent.toFixed(1)}s`;

    // Category Breakdown Calculation
    const categoryStats = calculateCategoryAccuracy(userAnswers);
    renderCategoryBreakdownBars(categoryStats);

    // Detailed Review List Binding
    renderDetailedReviewList();

    // Save Attempt to History
    saveQuizAttempt({
        date: new Date().toISOString(),
        mode: titleStr.replace("Completed: ", ""),
        score: score,
        total: totalQCount,
        accuracy: accuracyPercent,
        timeSpent: totalTimeSpent,
        categoryStats: categoryStats
    });
}

function calculateCategoryAccuracy(answersList) {
    const stats = {};
    
    answersList.forEach(ans => {
        const q = questions.find(item => item.id === ans.questionId);
        if (!q) return;

        if (!stats[q.category]) {
            stats[q.category] = { correct: 0, total: 0 };
        }
        stats[q.category].total++;
        if (!ans.isTimeout && ans.selected === ans.correct) {
            stats[q.category].correct++;
        }
    });

    // Convert to percentages
    const result = {};
    for (let cat in stats) {
        result[cat] = {
            percentage: Math.round((stats[cat].correct / stats[cat].total) * 100),
            ratio: `${stats[cat].correct}/${stats[cat].total}`
        };
    }
    return result;
}

function renderCategoryBreakdownBars(categoryStats) {
    const listElement = document.getElementById('category-bars-list');
    listElement.innerHTML = '';

    for (let cat in categoryStats) {
        const stats = categoryStats[cat];
        const row = document.createElement('div');
        row.className = 'category-bar-row';
        row.innerHTML = `
            <div class="cat-bar-header">
                <span class="cat-name">${cat}</span>
                <span class="cat-ratio">${stats.ratio} (${stats.percentage}%)</span>
            </div>
            <div class="cat-bar-track">
                <div class="cat-bar-fill" style="width: 0%;"></div>
            </div>
        `;
        listElement.appendChild(row);

        // Animation fill delay
        setTimeout(() => {
            row.querySelector('.cat-bar-fill').style.width = `${stats.percentage}%`;
        }, 150);
    }
}

function renderDetailedReviewList() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    userAnswers.forEach((ans, idx) => {
        const q = questions.find(item => item.id === ans.questionId);
        if (!q) return;

        const isCorrect = !ans.isTimeout && ans.selected === ans.correct;
        const reviewItem = document.createElement('div');
        
        let itemClass = 'review-item ';
        let statusBadge = '';
        let userAnsDisplay = '';

        if (ans.isTimeout) {
            itemClass += 'timeout';
            statusBadge = '<span class="status-badge timeout">Timed Out</span>';
            userAnsDisplay = '<span class="ans-text timeout-color">No Answer (Time expired)</span>';
        } else if (isCorrect) {
            itemClass += 'correct';
            statusBadge = '<span class="status-badge correct">Correct</span>';
            userAnsDisplay = `<span class="ans-text correct-color">${ans.selected}. ${q.options[ans.selected]}</span>`;
        } else {
            itemClass += 'incorrect';
            statusBadge = '<span class="status-badge incorrect">Incorrect</span>';
            userAnsDisplay = `<span class="ans-text incorrect-color">${ans.selected}. ${q.options[ans.selected]}</span>`;
        }

        reviewItem.className = itemClass;
        reviewItem.innerHTML = `
            <div class="review-item-header">
                <span class="review-number">Question ${idx + 1} (${q.category})</span>
                ${statusBadge}
            </div>
            <p class="review-question">${q.question.replace('_____', '______')}</p>
            <div class="review-answers-compare">
                <div class="ans-box">
                    <span class="ans-label">Your Choice:</span>
                    ${userAnsDisplay}
                </div>
                <div class="ans-box">
                    <span class="ans-label">Correct Answer:</span>
                    <span class="ans-text correct-color">${q.correct}. ${q.options[q.correct]}</span>
                </div>
            </div>
            <div class="review-explanation">
                <strong>Rule:</strong> ${q.explanation}
            </div>
        `;
        reviewList.appendChild(reviewItem);
    });
}

// ==========================================
// 7. LOCALSTORAGE HISTORY STORAGE & SYNC
// ==========================================
function saveQuizAttempt(attempt) {
    let history = JSON.parse(localStorage.getItem('quiz_history')) || [];
    history.push(attempt);
    if (history.length > 50) history.shift();
    localStorage.setItem('quiz_history', JSON.stringify(history));
}

function showHistoryModal() {
    const historyModal = document.getElementById('history-modal');
    const emptyView = document.getElementById('history-empty');
    const listView = document.getElementById('history-list');
    const tbody = document.getElementById('history-table-body');

    tbody.innerHTML = '';
    const history = JSON.parse(localStorage.getItem('quiz_history')) || [];

    if (history.length === 0) {
        emptyView.style.display = 'block';
        listView.style.display = 'none';
    } else {
        emptyView.style.display = 'none';
        listView.style.display = 'flex';

        // Display in reverse order (newest first)
        [...history].reverse().forEach(item => {
            const dateObj = new Date(item.date);
            const dateStr = dateObj.toLocaleDateString('th-TH', { hour: '2-digit', minute: '2-digit' });
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${dateStr}</td>
                <td>${item.mode}</td>
                <td><strong class="${item.accuracy >= 80 ? 'text-green' : item.accuracy >= 50 ? 'text-yellow' : 'text-red'}">${item.score}/${item.total}</strong></td>
                <td>${(item.timeSpent / item.total).toFixed(1)}s / Q</td>
            `;
            tbody.appendChild(tr);
        });
    }

    historyModal.style.display = 'flex';
}

// ==========================================
// 8. DASHBOARD GRAPH & STATS SYNC
// ==========================================
function updateDashboardPerformance() {
    const history = JSON.parse(localStorage.getItem('quiz_history')) || [];
    const noDataView = document.getElementById('no-performance-data');
    const hasDataView = document.getElementById('has-performance-data');

    if (history.length === 0) {
        noDataView.style.display = 'block';
        hasDataView.style.display = 'none';
        return;
    }

    noDataView.style.display = 'none';
    hasDataView.style.display = 'block';

    // 1. Calculate General Summary Stats
    const totalTaken = history.length;
    const totalScorePercent = history.reduce((sum, item) => sum + item.accuracy, 0);
    const avgScore = Math.round(totalScorePercent / totalTaken);
    const bestScore = Math.max(...history.map(item => item.accuracy));

    document.getElementById('perf-total-quizzes').innerText = totalTaken;
    document.getElementById('perf-avg-score').innerText = `${avgScore}%`;
    document.getElementById('perf-best-score').innerText = `${bestScore}%`;

    // 2. Aggregate Category Performance across all attempts
    const categoryTotals = {};
    const categoryHits = {};

    history.forEach(attempt => {
        if (!attempt.categoryStats) return;
        for (let cat in attempt.categoryStats) {
            const stats = attempt.categoryStats[cat];
            const [correct, total] = stats.ratio.split('/').map(Number);
            
            categoryTotals[cat] = (categoryTotals[cat] || 0) + total;
            categoryHits[cat] = (categoryHits[cat] || 0) + correct;
        }
    });

    const categories = [
        "A: In-Flight Comm",
        "B: Safety & Security",
        "C: Embarkation",
        "D: Exit Row Brief",
        "E: Emergency Ops"
    ];
    const categoryAverages = {};
    const chartData = {};

    categories.forEach(cat => {
        const total = categoryTotals[cat] || 0;
        const hits = categoryHits[cat] || 0;
        const accuracy = total > 0 ? hits / total : 0;
        
        categoryAverages[cat] = accuracy;
        chartData[cat] = accuracy;
    });

    // Determine strongest & weakest
    let strongest = null;
    let weakest = null;
    let maxAcc = -1;
    let minAcc = 2;

    for (let cat in categoryAverages) {
        const acc = categoryAverages[cat];
        const total = categoryTotals[cat] || 0;
        if (total > 0) {
            if (acc > maxAcc) {
                maxAcc = acc;
                strongest = cat;
            }
            if (acc < minAcc) {
                minAcc = acc;
                weakest = cat;
            }
        }
    }

    document.getElementById('strongest-category').innerText = strongest ? `${strongest} (${Math.round(maxAcc * 100)}%)` : '-';
    document.getElementById('weakest-category').innerText = weakest ? `${weakest} (${Math.round(minAcc * 100)}%)` : '-';

    // 3. Draw Radar Chart using Canvas API
    const canvas = document.getElementById('categoryChart');
    if (canvas) {
        drawRadarChart(canvas, chartData);
    }
}

// Custom Spider / Radar Chart Drawing Function (DARK THEME STYLES)
function drawRadarChart(canvas, categoryScores) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2 + 10;
    const maxRadius = 55;
    
    const categories = [
        "A: In-Flight Comm",
        "B: Safety & Security",
        "C: Embarkation",
        "D: Exit Row Brief",
        "E: Emergency Ops"
    ];
    const numCategories = categories.length;

    // 1. Draw web grid circles (pentagon)
    ctx.strokeStyle = 'rgba(32, 47, 79, 0.5)';
    ctx.lineWidth = 1;
    ctx.font = '9px Outfit, Sarabun';

    for (let level = 1; level <= 4; level++) {
        const r = (maxRadius / 4) * level;
        ctx.beginPath();
        for (let i = 0; i < numCategories; i++) {
            const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2;
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();

        // Draw grid scale markers (25%, 50%, 75%, 100%) on the top vertical axis
        ctx.fillStyle = '#475569';
        ctx.textAlign = 'right';
        ctx.fillText(`${level * 25}%`, centerX - 4, centerY - r + 3);
    }

    // 2. Draw axes and text labels
    for (let i = 0; i < numCategories; i++) {
        const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2;
        const xOuter = centerX + maxRadius * Math.cos(angle);
        const yOuter = centerY + maxRadius * Math.sin(angle);

        // Draw axis line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(xOuter, yOuter);
        ctx.stroke();

        // Draw label text
        const labelRadius = maxRadius + 18;
        const labelX = centerX + labelRadius * Math.cos(angle);
        const labelY = centerY + labelRadius * Math.sin(angle);

        ctx.fillStyle = '#94a3b8';
        if (Math.abs(Math.cos(angle)) < 0.1) {
            ctx.textAlign = 'center';
            ctx.textBaseline = Math.sin(angle) > 0 ? 'top' : 'bottom';
        } else {
            ctx.textAlign = Math.cos(angle) > 0 ? 'left' : 'right';
            ctx.textBaseline = 'middle';
        }
        ctx.fillText(categories[i], labelX, labelY);
    }

    // 3. Draw data polygon
    const dataPoints = [];
    ctx.beginPath();
    for (let i = 0; i < numCategories; i++) {
        const val = categoryScores[categories[i]] !== undefined ? categoryScores[categories[i]] : 0;
        const r = val * maxRadius;
        const angle = (i * 2 * Math.PI) / numCategories - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        
        dataPoints.push({ x, y });
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Data Fill
    ctx.fillStyle = 'rgba(251, 191, 36, 0.22)';
    ctx.fill();

    // Data Stroke
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw circular dots at data intersections
    ctx.fillStyle = '#fbbf24';
    dataPoints.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.fill();
    });
}
