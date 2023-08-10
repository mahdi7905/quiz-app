import './App.css';
import Question from './components/question/Question';
import Result from './components/result/Result';
import Board from './components/scoreSheet/Board';

import { QuizContext } from './context/QuizContext'
import React, { useContext } from 'react'

function App() {
  const [state] = useContext(QuizContext)
  console.log(state)
  return (
    <div className="App">
      {
        state.showResult && <Result/>
      }
      {
         !state.showResult &&
        <>
          <Board/>
          <Question/>
        </>
      }
      
      

    </div>
  );
}

export default App;
