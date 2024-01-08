import React, { useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'


export function Quiz(props) {
  const { fetchQuiz, quiz } = props

  useEffect (() => {
      fetchQuiz()
  },[])

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
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
