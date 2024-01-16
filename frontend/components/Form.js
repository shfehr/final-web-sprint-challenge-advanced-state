import React, { useEffect } from 'react' 
import { connect, useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange } from '../state/action-creators'


export function Form(props) {

  const { postQuiz, form } = props
  
  const dispatch = useDispatch()

  useEffect (() => {
    !form && isDisabled
},[])

  const onChange = evt => {
    const newInputValue = evt.target.value
    const newInputId = evt.target.id
    // console.log(evt.target)
    dispatch(inputChange(newInputId, newInputValue))
    //was missing the dispatch of InputChange above
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer)
  }

  const isDisabled = () => {
      if (form.newQuestion.trim().length > 0 && 
          form.newTrueAnswer.trim().length > 0 && 
          form.newFalseAnswer.trim().length > 0) {
        return false
      } else return true
    //return true or false
  }
  
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn"
              disabled = {isDisabled()}
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


