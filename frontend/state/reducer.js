// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, SET_SELECTED_ANSWER, INPUT_CHANGE, RESET_FORM} from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case(MOVE_CLOCKWISE): {
      return state === 5 ? 0 : state += 1;
      }
      case(MOVE_COUNTERCLOCKWISE): {
        return state === 0 ? 5 : state -= 1;        
      }
      default:
            return(state);
    }
  }

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case(SET_QUIZ_INTO_STATE):
      return action.payload
    default: 
      return(state)  
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case(SET_SELECTED_ANSWER):
      return action.payload
    default:
      return (state)
  }
}


const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case(SET_INFO_MESSAGE):
      return action.payload
    case(SET_SELECTED_ANSWER):
      return ''
    default: 
      return(state) 
  }
}

const initialFormState = {
  newTrueAnswer: '',
  newFalseAnswer: '',
  newQuestion: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case(INPUT_CHANGE):
       return ({...state, [action.payload.id]:action.payload.value})
    case(RESET_FORM):
      return state = initialFormState
    default:
      return(state)
  }
 
}

 export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
