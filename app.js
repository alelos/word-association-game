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
let clicked = []
scoreDisplay.textContent = score;

function populateQuestions() {
    questions.forEach((question) => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "🍀"
        questionBox.append(logoDisplay)

        question.quiz.forEach((tip) => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        const questionButtons = document.createElement('button')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.option.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option
            questionButtons.append(questionButton)

            questionButton.addEventListener('click', () => checkAnswer(questionBox,questionButton, option, optionIndex + 1, question.correct))
        })

        const displayAnswer = document.createElement('div')
        displayAnswer.classList.add('display-answer')

        questionBox.append(displayAnswer)
        questionDisplay.append(questionBox)


    })
}
populateQuestions()

function checkAnswer(questionBox,questionButton, option, optionIndex, correctAnswer)
{
    console.log('OPTION', option)
    console.log(optionIndex)

    if (optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, 'Correct!','correct') 
    }
    else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, 'Wrong!', 'wrong') 
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
} 

function addResult( questionBox,answer,className) {
  const displayAnwer =  questionBox.querySelector('.display-answer')
  displayAnwer.classList.remove('wrong')
  displayAnwer.classList.remove('correct')
  displayAnwer.classList.add(className)
  displayAnwer.textContent = answer
}