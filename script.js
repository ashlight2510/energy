// 질문 데이터
const questions = [
    {
        id: 1,
        question: "최근 한 달 동안, 가장 많이 신경 쓴 것은?",
        options: [
            { text: "내 몸/건강/패션", scores: { SELF: 20 } },
            { text: "사람들과의 관계/만남", scores: { LOVE: 20 } },
            { text: "스트레스 해소/자극 찾기", scores: { IMPULSE: 20 } },
            { text: "솔직히… 아무 데도 잘 못 쓰는 중", scores: { SELF: 10, LOVE: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 2,
        question: "하루 루틴에서 가장 비중이 큰 활동은?",
        options: [
            { text: "운동·정리·계획 세우기", scores: { SELF: 20 } },
            { text: "연락·만남·대화", scores: { LOVE: 20 } },
            { text: "유튜브·게임·쇼츠·웹툰", scores: { IMPULSE: 20 } },
            { text: "일단 버티기…", scores: { SELF: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 3,
        question: "돈이 생기면 어디에 먼저 쓰는 편인가?",
        options: [
            { text: "헬스/옷/스킨케어 같은 자기관리", scores: { SELF: 20 } },
            { text: "친구/연인/만남/술자리", scores: { LOVE: 20 } },
            { text: "관심 생긴 것 바로 사버림", scores: { IMPULSE: 20 } },
            { text: "모아두지만 금방 사라짐", scores: { SELF: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 4,
        question: "감정적으로 힘들 때 나의 반응은?",
        options: [
            { text: "루틴을 더 단단히 지키려고 한다", scores: { SELF: 20 } },
            { text: "누군가와 대화하고 연결을 찾는다", scores: { LOVE: 20 } },
            { text: "자극적 콘텐츠·폭식·쇼핑으로 넘긴다", scores: { IMPULSE: 20 } },
            { text: "그냥 멍하게 방치한다", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 5,
        question: "요즘 내 검색/유튜브 추천 알고리즘은?",
        options: [
            { text: "운동·정리·자기계발·생산성", scores: { SELF: 20 } },
            { text: "연애·대화·소개팅·사람 심리", scores: { LOVE: 20 } },
            { text: "숏폼·컨텐츠·게임·먹방", scores: { IMPULSE: 20 } },
            { text: "이상하게 뒤죽박죽", scores: { SELF: 10, LOVE: 10, IMPULSE: 10 } }
        ]
    },
    {
        id: 6,
        question: "하루 평균 나에게 투자하는 시간은?",
        options: [
            { text: "1시간 이상", scores: { SELF: 20 } },
            { text: "누군가와의 소통 시간이 더 길다", scores: { LOVE: 20 } },
            { text: "대부분 넷플릭스·게임 등 영상류", scores: { IMPULSE: 20 } },
            { text: "정확히 모르겠음", scores: { SELF: 10 } }
        ]
    },
    {
        id: 7,
        question: "최근 가장 많이 한 행동은?",
        options: [
            { text: "정리·운동·계획 같은 루틴 만들기", scores: { SELF: 20 } },
            { text: "연락·만남·관계 개선 노력", scores: { LOVE: 20 } },
            { text: "쇼츠·게임·웹툰·야식 같은 보상행동", scores: { IMPULSE: 20 } },
            { text: "그냥 시간 흘려보냄", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 8,
        question: "스트레스 해소 방식은?",
        options: [
            { text: "운동·샤워·정리·산책", scores: { SELF: 20 } },
            { text: "대화·만남·공감·전화", scores: { LOVE: 20 } },
            { text: "즉흥 지출·배달·콘텐츠 몰아보기", scores: { IMPULSE: 20 } },
            { text: "그냥 누워버림", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 9,
        question: "미래에 대한 생각은?",
        options: [
            { text: "어떻게 성장할지 계속 고민한다", scores: { SELF: 20 } },
            { text: "누구와 함께할지 많이 떠올린다", scores: { LOVE: 20 } },
            { text: "지금 당장 즐거운 게 더 중요하다", scores: { IMPULSE: 20 } },
            { text: "솔직히 생각 안 해본 지 좀 됨", scores: { IMPULSE: 10 } }
        ]
    },
    {
        id: 10,
        question: "하루 끝에 가장 뿌듯했던 순간은?",
        options: [
            { text: "운동/정리/목표 달성했을 때", scores: { SELF: 20 } },
            { text: "의미 있는 대화를 했을 때", scores: { LOVE: 20 } },
            { text: "재밌게 놀거나 맛있는 거 먹었을 때", scores: { IMPULSE: 20 } },
            { text: "아무것도 안 했는데도 평화로운 날", scores: { SELF: 10, IMPULSE: 10 } }
        ]
    }
];

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

// 초기화
function init() {
    currentQuestionIndex = 0;
    scores = { SELF: 0, LOVE: 0, IMPULSE: 0 };
    questionContainer.innerHTML = '';
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    progressBar.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

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
    } else {
        showResult();
    }
}

// 결과 표시
function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    // 점수 업데이트
    document.getElementById('self-score').textContent = scores.SELF;
    document.getElementById('love-score').textContent = scores.LOVE;
    document.getElementById('impulse-score').textContent = scores.IMPULSE;

    // 최대 점수 계산 (정규화용)
    const maxScore = Math.max(scores.SELF, scores.LOVE, scores.IMPULSE, 1);
    const totalScore = scores.SELF + scores.LOVE + scores.IMPULSE;

    // 프로그레스 바 애니메이션
    setTimeout(() => {
        const selfBar = document.querySelector('[data-category="SELF"] .bg-gradient-to-r');
        const loveBar = document.querySelector('[data-category="LOVE"] .bg-gradient-to-r');
        const impulseBar = document.querySelector('[data-category="IMPULSE"] .bg-gradient-to-r');

        selfBar.style.width = `${(scores.SELF / maxScore) * 100}%`;
        loveBar.style.width = `${(scores.LOVE / maxScore) * 100}%`;
        impulseBar.style.width = `${(scores.IMPULSE / maxScore) * 100}%`;
    }, 100);

    // 결과 메시지 생성
    const resultMessage = generateResultMessage();
    document.querySelector('#result-message p').textContent = resultMessage;

    // 스크롤을 결과로 이동
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 결과 메시지 생성
function generateResultMessage() {
    const maxCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const maxScore = scores[maxCategory];
    const totalScore = scores.SELF + scores.LOVE + scores.IMPULSE;
    
    const percentage = Math.round((maxScore / totalScore) * 100);
    
    const messages = {
        SELF: `당신의 에너지는 주로 자기관리와 성장에 집중되어 있네요! (${percentage}%) 체계적인 루틴과 자기계발에 힘쓰는 모습이 인상적입니다. 💪`,
        LOVE: `당신의 에너지는 관계와 소통에 많이 투자되고 있어요! (${percentage}%) 사람들과의 연결을 소중히 여기는 따뜻한 마음을 가지고 계시네요. ❤️`,
        IMPULSE: `당신의 에너지는 즉각적인 만족과 자극을 추구하는 경향이 있어요! (${percentage}%) 지금 당장의 즐거움을 중시하는 자유로운 영혼이시네요. ⚡`
    };

    return messages[maxCategory] || "에너지가 고르게 분산되어 있네요! 다양한 영역에 관심을 가지고 계시는군요. 🌈";
}

// 다시 테스트하기
retryBtn.addEventListener('click', () => {
    init();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 페이지 로드 시 초기화
init();

