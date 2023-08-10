import React, { useContext } from 'react'
import './style.css'
import { QuizContext } from '../../context/QuizContext'

const Board = () => {
    const [state] = useContext(QuizContext)
  return (
    <div className='board'>
        <h3>Question {state.currentQuestionIndex + 1} of {state.questions.length}</h3>
        <h3>Score: {state.score}</h3>
    </div>
  )
}

export default Board