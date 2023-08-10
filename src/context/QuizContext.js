import { createContext, useReducer } from "react";
import { questions } from "../data";
import { AnswerShuffler } from "../helpers/shuffler";

export const QuizContext = createContext()

const initialValue = {
    questions,
    currentQuestionIndex: 0,
    score: 0,
    answers: AnswerShuffler(questions[0]),
    showResult: false,
    currentAnswer: ''
}

const reducer = (state, action) =>{
    switch(action.type){
        case "SELECT_ANSWER": {
            return {...state, currentAnswer:action.payload}
        }
        case "NEXT_QUESTION" : {
            const score = state.currentAnswer === state.questions[state.currentQuestionIndex].correctAnswer? state.score +1 : state.score;
            const showResult = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResult ? 
            state.currentQuestionIndex : 
            state.currentQuestionIndex + 1;
            return {...state, 
                currentQuestionIndex,
                answers: AnswerShuffler(questions[currentQuestionIndex]),
                score,
                showResult,
                currentAnswer: ''
            } 
        }
        case "RESTART" : {
            return initialValue
        }
        default: {return state}
    }

}

const QuizContextProvider = ({children}) => {
    const value = useReducer(reducer, initialValue)

    return(
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider