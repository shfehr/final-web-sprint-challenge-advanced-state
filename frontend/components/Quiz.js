import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Quiz(props) {
  const { selectedAnswer, selectAnswer, postAnswer, fetchQuiz, quiz } = props

  const handleSubmit = () => {
      postAnswer()
  }

  useEffect (() => {
      fetchQuiz()
  },[])

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        // update below so that the jsx shows quiz.something
        // pay attention to answers and arrays and indices
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${selectedAnswer === quiz.answers[0].answer_id ? ' selected' : ''}`}
                   onClick={() => selectAnswer(quiz.answers[0].answer_id)}>
                   {quiz.answers[0].text}       
                <button>
                   {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${selectedAnswer === quiz.answers[1].answer_id ? ' selected' : ''}`}
                   onClick={() => selectAnswer(quiz.answers[1].answer_id)}>
                   {quiz.answers[1].text}
                <button>
                   {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn"
                    disabled = {selectedAnswer === null} 
                    onSubmit={handleSubmit}  
            >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  quiz: state.quiz
})

export default connect(mapStateToProps, actionCreators)(Quiz)
