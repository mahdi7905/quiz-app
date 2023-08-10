
import './style.css'

const Answer = ({answerText, dispatch, correctAnswer, currentAnswer}) => {
  const isCorrect = currentAnswer && answerText === correctAnswer
  const isWrong = currentAnswer === answerText && currentAnswer !== correctAnswer
  const correct = isCorrect ? "correct" : ""
  const wrong = isWrong ? "wrong" : ""
  const disabled = currentAnswer !== ''

  const onSelectAnswer = () => {
    dispatch({type: 'SELECT_ANSWER', payload: answerText})
  }
    
  return (
    <button className={`answerWrapper ${correct} ${wrong}`} onClick={onSelectAnswer} disabled={disabled}>{answerText}</button>
  )
}

export default Answer