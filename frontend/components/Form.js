import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange } from '../state/action-creators'

export function Form(props) {

  const { postQuiz, form } = props

  const onChange = evt => {
    const newInputValue = evt.target.value
    console.log(evt.target)
    inputChange(newInputValue)
  }

  const onSubmit = () => {
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn"
              // disabled = {}
              onSubmit = {onSubmit}
              >Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => ({
//   quiz: state.quiz,
  form: state.form
//   postQuiz: state.postQuiz
 })
export default connect(mapStateToProps, actionCreators)(Form)


