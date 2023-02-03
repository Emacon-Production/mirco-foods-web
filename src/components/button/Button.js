import React from 'react'
import './button.css'

const Button = props => {
  return (
    <div>
        {
            props.type === "1" ? (
                <button className='type_one_btn'>
                    <span>{props.content}</span>
                </button>
            ) : (
                <button className='type_one_btn'>
                    <span>{props.content}</span>
                </button>
            ) && 
            props.type === "2" ? (
                <button className='type_two_btn'>
                    <span class="hover-underline-animation"> {props.content} </span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                    {/* <span>{props.content}</span> */}
                </button>
            ) : (
                <button className='type_two_btn'>
                    <span>{props.content}</span>
                </button>
            ) &&
            props.type === "3" ? (
                <button className='type_two_btn'>
                    <i class={props.icon} ></i>
                    <span class="hover-underline-animation"> {props.content} </span>
                    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                    </svg>
                    {/* <span>{props.content}</span> */}
                </button>
            ) : (
                <button className='type_two_btn'>
                    <span>{props.content}</span>
                </button>
            )
        }
        
    </div>
  )
}

export default Button