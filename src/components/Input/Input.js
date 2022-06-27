import React from 'react';
import './Input.css'

function Input(props) {
  return (
    <input onChange={props.onChange} placeholder={props.placeholder} value={props.value} type={props.type} />
  )
}

export default Input;
