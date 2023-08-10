export const AnswerShuffler = (question) =>{
    const answers = [...question.wrongAnswers, question.correctAnswer]
    return answers.map(answer => ({sort: Math.random(), value: answer}))
        .sort((a,b) => a.sort - b.sort)
        .map(answer => answer.value)
}