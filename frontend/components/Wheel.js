import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'
// import { moveClockwise, moveCounterClockwise } from '../state/action-types'
// import { useState } from 'react'

export function Wheel(props) {
  const {wheelState, moveClockwise, moveCounterClockwise} = props
  const wheelArray = [0, 1 ,2, 3, 4, 5] 
  return (
    <div id="wrapper">
      <div id="wheel">
        <div>
          {wheelArray.map((index) => (
            <div
              key={index}
              className={`cog ${index === wheelState ? 'active': ''}`}
              style={{'--i': index}}
            >
              {index === wheelState ? 'B' : ''}
            </div>
          ))}
        </div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn"
                onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn"
                onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

//create an array 0-5 to map over, pulling in props, if wheel slice of state
// is equal to the wheel spot then it become active in style
const mapStateToProps = (state) => ({
  wheelState: state.wheel,
})
export default connect(mapStateToProps, actionCreators)(Wheel)
