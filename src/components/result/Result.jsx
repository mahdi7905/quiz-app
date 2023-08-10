import React, {useContext} from 'react'
import { QuizContext } from '../../context/QuizContext'
import './style.css'

const Result = () => {
    const [state, dispach] = useContext(QuizContext)
  return (
    <div className='result-page'>
        {state.score >= 11 && <h1>Congratulations!!!</h1>}
        {state.score <= 10 && <h1>Test Completed!</h1>}
        <h2>You have aced {state.score} questions out of {state.questions.length}</h2>
        {state.score <= 10 && <p>Try harder next time.</p>}
        <button onClick={() => dispach({type: 'RESTART'})} className='restart-button'>Restart</button>
    </div>
  )
}

export default Result