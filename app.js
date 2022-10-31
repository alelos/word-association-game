const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        correct: 2,
        option: ['jury', 'assess'],
        quiz: ['value', 'estimate', 'evaluate'],
    },
    {
        correct: 2,
        option: ['trace', 'adjacent'],
        quiz: ['close', 'near', 'next'],
    },
    {
        correct: 2,
        option: ['mad', 'exotic'],
        quiz: ['foreign', 'national', 'ethnic'],
    },
    {
        correct: 1,
        option: ['forecast', 'sustainable'],
        quiz: ['assume', 'insight', 'weather'],
    },
    {
        correct: 2,
        option: ['charity', 'rapid'],
        quiz: ['fast', 'quick', 'prompt'],
    },
]

let score = 0
scoreDisplay.textContent = score;

function populateQuestions() {
    questions.forEach((question) => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "🍀"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        const questionBtn = document.createElement('div')
        questionBtn.classList.add('question-btn')
        questionBox.append(questionBtn)

         question.option.forEach(option => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option
            questionBtn.append(questionButton)
        })



        questionDisplay.append(questionBox)


    })
}
populateQuestions()