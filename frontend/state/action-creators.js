import axios from 'axios'
import * as types from './action-types'

// ❗ You don't need to add extra action creators to achieve MVP
export const moveClockwise = () => {
  return ({type: types.MOVE_CLOCKWISE})
}

export const moveCounterClockwise = () => {
  return ({type: types.MOVE_COUNTERCLOCKWISE})
}

export const setQuiz = (payload) => { 
  return ({type: types.SET_QUIZ_INTO_STATE, payload: payload })
}

export function selectAnswer(payload) {
  return ({type: types.SET_SELECTED_ANSWER, payload: payload}) 
}

export function setMessage(payload) { 
  return ({type: types.SET_INFO_MESSAGE, payload: payload})
}

export function inputChange(id, value) {
  return({type: types.INPUT_CHANGE, payload:{id, value}})
 }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {

  return function (dispatch) {
    dispatch(setQuiz(null))
    axios.get('http://localhost:9000/api/quiz/next')

         .then(res => {
          dispatch(setQuiz(res.data))
          console.log(res.data)
         })
         .catch(err => {
          console.error(err)
         })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    // const postData = {
    //   quiz_id ,
    //   answer_id
    // }
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id, answer_id}
    )
          .then(res => {
          dispatch(selectAnswer(null))
          dispatch(setMessage(res.data.message))
          dispatch(fetchQuiz())
    })
    .catch(err => {
      console.error(err)
    })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(question_text, true_answer_text, false_answer_text) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', {question_text, true_answer_text, false_answer_text}
    )
          .then(res => {
          dispatch(setMessage(res.data.message))
          // dispatch(resetForm())
    })
    .catch(err => {
      console.error(err)
    })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
