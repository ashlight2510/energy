// 질문 데이터
const QUESTIONS_BASE = [
    {
        id: 1,
        question: "최근 한 달 동안, 가장 많이 신경 쓴 것은?",
        questionEn: "What have you been most concerned about in the past month?",
        options: [
            { text: "내 몸/건강/패션", textEn: "My body/health/fashion", scores: { SELF: 20 } },
            { text: "사람들과의 관계/만남", textEn: "Relationships/meetings with people", scores: { LOVE: 20 } },
            { text: "스트레스 해소/자극 찾기", textEn: "Stress relief/seeking stimulation", scores: { IMPULSE: 20 } },
            { text: "솔직히… 아무 데도 잘 못 쓰는 중", textEn: "Honestly... I'm not really using it anywhere", scores: { SELF: 10, LOVE: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 2,
        question: "하루 루틴에서 가장 비중이 큰 활동은?",
        questionEn: "What activity takes up the most time in your daily routine?",
        options: [
            { text: "운동·정리·계획 세우기", textEn: "Exercise·cleaning·planning", scores: { SELF: 20 } },
            { text: "연락·만남·대화", textEn: "Communication·meetings·conversations", scores: { LOVE: 20 } },
            { text: "유튜브·게임·쇼츠·웹툰", textEn: "YouTube·games·shorts·webtoons", scores: { IMPULSE: 20 } },
            { text: "일단 버티기…", textEn: "Just hanging in there...", scores: { SELF: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 3,
        question: "돈이 생기면 어디에 먼저 쓰는 편인가?",
        questionEn: "When you get money, where do you usually spend it first?",
        options: [
            { text: "헬스/옷/스킨케어 같은 자기관리", textEn: "Self-care like gym/clothes/skincare", scores: { SELF: 20 } },
            { text: "친구/연인/만남/술자리", textEn: "Friends/lovers/meetings/drinking", scores: { LOVE: 20 } },
            { text: "관심 생긴 것 바로 사버림", textEn: "Buy whatever catches my interest right away", scores: { IMPULSE: 20 } },
            { text: "모아두지만 금방 사라짐", textEn: "Save it but it disappears quickly", scores: { SELF: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 4,
        question: "감정적으로 힘들 때 나의 반응은?",
        questionEn: "How do you react when emotionally difficult?",
        options: [
            { text: "루틴을 더 단단히 지키려고 한다", textEn: "Try to stick to routines even more firmly", scores: { SELF: 20 } },
            { text: "누군가와 대화하고 연결을 찾는다", textEn: "Talk to someone and seek connection", scores: { LOVE: 20 } },
            { text: "자극적 콘텐츠·폭식·쇼핑으로 넘긴다", textEn: "Get through it with stimulating content·binge eating·shopping", scores: { IMPULSE: 20 } },
            { text: "그냥 멍하게 방치한다", textEn: "Just leave it blank", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 5,
        question: "요즘 내 검색/유튜브 추천 알고리즘은?",
        questionEn: "What does your search/YouTube recommendation algorithm look like these days?",
        options: [
            { text: "운동·정리·자기계발·생산성", textEn: "Exercise·cleaning·self-improvement·productivity", scores: { SELF: 20 } },
            { text: "연애·대화·소개팅·사람 심리", textEn: "Dating·conversation·blind dates·human psychology", scores: { LOVE: 20 } },
            { text: "숏폼·컨텐츠·게임·먹방", textEn: "Shorts·content·games·mukbang", scores: { IMPULSE: 20 } },
            { text: "이상하게 뒤죽박죽", textEn: "Weirdly mixed up", scores: { SELF: 10, LOVE: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 6,
        question: "하루 평균 나에게 투자하는 시간은?",
        questionEn: "How much time do you invest in yourself on average per day?",
        options: [
            { text: "1시간 이상", textEn: "More than 1 hour", scores: { SELF: 20 } },
            { text: "누군가와의 소통 시간이 더 길다", textEn: "Time communicating with others is longer", scores: { LOVE: 20 } },
            { text: "대부분 넷플릭스·게임 등 영상류", textEn: "Mostly Netflix·games and other video content", scores: { IMPULSE: 20 } },
            { text: "정확히 모르겠음", textEn: "Not sure exactly", scores: { SELF: 10 } }
        ]
    },
    {
        id: 7,
        question: "최근 가장 많이 한 행동은?",
        questionEn: "What have you been doing most recently?",
        options: [
            { text: "정리·운동·계획 같은 루틴 만들기", textEn: "Creating routines like organizing·exercise·planning", scores: { SELF: 20 } },
            { text: "연락·만남·관계 개선 노력", textEn: "Trying to improve contact·meetings·relationships", scores: { LOVE: 20 } },
            { text: "쇼츠·게임·웹툰·야식 같은 보상행동", textEn: "Reward behaviors like shorts·games·webtoons·late-night snacks", scores: { IMPULSE: 20 } },
            { text: "그냥 시간 흘려보냄", textEn: "Just passing time", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 8,
        question: "스트레스 해소 방식은?",
        questionEn: "How do you relieve stress?",
        options: [
            { text: "운동·샤워·정리·산책", textEn: "Exercise·shower·cleaning·walking", scores: { SELF: 20 } },
            { text: "대화·만남·공감·전화", textEn: "Conversation·meetings·empathy·phone calls", scores: { LOVE: 20 } },
            { text: "즉흥 지출·배달·콘텐츠 몰아보기", textEn: "Impulse spending·delivery·binge watching content", scores: { IMPULSE: 20 } },
            { text: "그냥 누워버림", textEn: "Just lie down", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 9,
        question: "미래에 대한 생각은?",
        questionEn: "What are your thoughts about the future?",
        options: [
            { text: "어떻게 성장할지 계속 고민한다", textEn: "Keep thinking about how to grow", scores: { SELF: 20 } },
            { text: "누구와 함께할지 많이 떠올린다", textEn: "Think a lot about who to be with", scores: { LOVE: 20 } },
            { text: "지금 당장 즐거운 게 더 중요하다", textEn: "What's fun right now is more important", scores: { IMPULSE: 20 } },
            { text: "솔직히 생각 안 해본 지 좀 됨", textEn: "Honestly, it's been a while since I thought about it", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 10,
        question: "하루 끝에 가장 뿌듯했던 순간은?",
        questionEn: "What moment made you most satisfied at the end of the day?",
        options: [
            { text: "운동/정리/목표 달성했을 때", textEn: "When I exercised/cleaned/achieved goals", scores: { SELF: 20 } },
            { text: "의미 있는 대화를 했을 때", textEn: "When I had meaningful conversations", scores: { LOVE: 20 } },
            { text: "재밌게 놀거나 맛있는 거 먹었을 때", textEn: "When I had fun or ate something delicious", scores: { IMPULSE: 20 } },
            { text: "아무것도 안 했는데도 평화로운 날", textEn: "A peaceful day even though I didn't do anything", scores: { SELF: 10, IMPULSE: 10 } }
        ]
    }
];

function getQuestions() {
    const isEnglish = window.currentLang === "en";
    return QUESTIONS_BASE.map(q => ({
        ...q,
        question: isEnglish ? q.questionEn : q.question,
        options: q.options.map(opt => ({
            ...opt,
            text: isEnglish ? opt.textEn : opt.text
        }))
    }));
}

// Make getQuestions globally available
window.getQuestions = getQuestions;

// 상태 관리
let currentQuestionIndex = 0;
let scores = {
    SELF: 0,
    LOVE: 0,
    IMPULSE: 0
};

// DOM 요소
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const progressBar = document.getElementById('progress-bar');
const currentQuestionSpan = document.getElementById('current-question');
const retryBtn = document.getElementById('retry-btn');
const adAfterQuestions = document.getElementById('ad-after-questions');
const adBeforeResult = document.getElementById('ad-before-result');

// 초기화
function init() {
    currentQuestionIndex = 0;
    scores = { SELF: 0, LOVE: 0, IMPULSE: 0 };
    questionContainer.innerHTML = '';
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    if (adAfterQuestions) adAfterQuestions.classList.add('hidden');
    if (adBeforeResult) adBeforeResult.classList.add('hidden');
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const questions = getQuestions();
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    progressBar.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const t = window.t || ((key, vars = {}) => key);
    if (document.getElementById('total-questions')) {
        document.getElementById('total-questions').textContent = questions.length;
    }

    questionContainer.innerHTML = `
        <div class="question-card bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                ${question.question}
            </h2>
            <div class="space-y-3">
                ${question.options.map((option, index) => `
                    <button 
                        class="option-btn w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border-2 border-gray-200 font-medium text-gray-700 transition-all duration-200"
                        onclick="selectOption(${index})"
                    >
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// 선택지 선택
function selectOption(optionIndex) {
    const questions = getQuestions();
    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[optionIndex];
    
    // 점수 추가
    Object.keys(selectedOption.scores).forEach(category => {
        scores[category] += selectedOption.scores[category];
    });

    // 다음 질문 또는 결과 표시
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        // 중간 질문들 사이에는 광고 숨김
        if (adAfterQuestions) adAfterQuestions.classList.add('hidden');
    } else {
        // 마지막 질문 후 광고 표시
        if (adAfterQuestions) adAfterQuestions.classList.remove('hidden');
        showResult();
    }
}

// 결과 표시
function showResult() {
    // result.html로 리다이렉트
    const maxScore = Math.max(scores.SELF, scores.LOVE, scores.IMPULSE, 1);
    const totalScore = scores.SELF + scores.LOVE + scores.IMPULSE;
    const maxCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const percentage = Math.round((scores[maxCategory] / totalScore) * 100);
    
    const params = new URLSearchParams({
        self: scores.SELF.toString(),
        love: scores.LOVE.toString(),
        impulse: scores.IMPULSE.toString(),
        total: totalScore.toString(),
        category: maxCategory,
        percentage: percentage.toString()
    });
    window.location.href = `result.html?${params.toString()}`;
}

// 결과 메시지 생성
function generateResultMessage() {
    const t = window.t || ((key, vars = {}) => key);
    const maxCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const maxScore = scores[maxCategory];
    const totalScore = scores.SELF + scores.LOVE + scores.IMPULSE;
    
    const percentage = Math.round((maxScore / totalScore) * 100);
    
    const messages = {
        SELF: t('resultSelf', { percentage }),
        LOVE: t('resultLove', { percentage }),
        IMPULSE: t('resultImpulse', { percentage })
    };

    return messages[maxCategory] || t('resultBalanced');
}

// 다시 테스트하기
retryBtn.addEventListener('click', () => {
    init();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Make functions globally available for i18n
window.questions = QUESTIONS_BASE;
window.currentQuestionIndex = currentQuestionIndex;
window.showQuestion = showQuestion;
window.selectOption = selectOption;
window.showResult = showResult;

// 페이지 로드 시 초기화 (i18n이 준비된 후에 실행)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // i18n 스크립트가 먼저 로드되도록 약간의 지연
    setTimeout(init, 100);
}

