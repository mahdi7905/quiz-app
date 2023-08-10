import React, { useContext} from 'react'
import './style.css'
import { QuizContext } from '../../context/QuizContext'
import Answer from '../answer/Answer'

const Question = () => {
    const [state, dispatch] = useContext(QuizContext)
    const currentQuestion = state.questions[state.currentQuestionIndex]
    const disabled = state.currentAnswer === ''


    const submitAnswer = () =>{
        dispatch({type: 'NEXT_QUESTION'})

    }
    
  return (
    <>
    <div className='question'>
        {currentQuestion.question}
    </div>
    <div className="ans">
        {
            state.answers.map((answer, index) => 
            <Answer 
            key={index} 
            answerText={answer}
            dispatch={dispatch}
            currentAnswer={state.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            />
            )
        }
    </div>
    
    <button className='button-submit' onClick={submitAnswer} disabled={disabled}>Submit</button>
    </>
  )
}

export default Question