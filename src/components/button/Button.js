import React from 'react'
import './button.css'

const Button = props => {
  return (
    <div>
        <button>
            <span>{props.content}</span>
        </button>
    </div>
  )
}

export default Button