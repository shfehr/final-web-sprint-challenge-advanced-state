// ❗ You don't need to add extra action types to achieve MVP

import axios from "axios"
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'

export const moveClockwise = () => {
    return ({type: MOVE_CLOCKWISE})
}

export const moveCounterClockwise = () => {
    return ({type: MOVE_COUNTERCLOCKWISE})
}

export const setQuizIntoState = () => {
    return ({type: SET_QUIZ_INTO_STATE})
}

export const setSelectedAnswer = () => {
    return ({type: SET_SELECTED_ANSWER})
}

export const setInfoMessage = () => {
    return ({type: SET_INFO_MESSAGE})
}

export const inputChange = () => {
    return ({type: INPUT_CHANGE})
}

export const resetForm = () => {
    return ({type: RESET_FORM})
}