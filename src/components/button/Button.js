import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Button = props => {
  return (
    <div>
        {
            props.targetLink ? (
                <React.Fragment>
                    {
                        props.type === "1" ? (
                            <Link  to={props.targetLink} className='type_one_btn'>
                                <span>{props.content}</span>
                            </Link>
                        ) : (
                            <Link  to={props.targetLink} className='type_one_btn'>
                                <span>{props.content}</span>
                            </Link>
                        ) && 
                        props.type === "2" ? (
                            <Link  to={props.targetLink} className='type_two_btn'>
                                <span class="hover-underline-animation"> {props.content} </span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                                {/* <span>{props.content}</span> */}
                            </Link>
                        ) : (
                            <Link  to={props.targetLink} className='type_two_btn'>
                                <span>{props.content}</span>
                            </Link>
                        ) &&
                        props.type === "3" ? (
                            <Link to={props.targetLink} className='type_two_btn'>
                                <i class={props.icon} ></i>
                                <span class="hover-underline-animation"> {props.content} </span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                                {/* <span>{props.content}</span> */}
                            </Link>
                        ) : (
                            <Link  to={props.targetLink} className='type_two_btn'>
                                <span>{props.content}</span>
                            </Link>
                        )
                    }
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {
                        props.type === "1" ? (
                            <button className='type_one_btn' onClick={props.handleClick}>
                                <span>{props.content}</span>
                            </button>
                        ) : (
                            <button className='type_one_btn' onClick={props.handleClick}>
                                <span>{props.content}</span>
                            </button>
                        ) && 
                        props.type === "2" ? (
                            <button className='type_two_btn' onClick={props.handleClick}>
                                <span class="hover-underline-animation"> {props.content} </span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                                {/* <span>{props.content}</span> */}
                            </button>
                        ) : (
                            <button className='type_two_btn' onClick={props.handleClick}>
                                <span>{props.content}</span>
                            </button>
                        ) &&
                        props.type === "3" ? (
                            <button className='type_two_btn' onClick={props.handleClick}>
                                <i class={props.icon} ></i>
                                <span class="hover-underline-animation"> {props.content} </span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                                {/* <span>{props.content}</span> */}
                            </button>
                        ) : (
                            <button className='type_two_btn' onClick={props.handleClick}>
                                <span>{props.content}</span>
                            </button>
                        )
                    }
                </React.Fragment>
            )
        }
        
    </div>
  )
}

export default Button