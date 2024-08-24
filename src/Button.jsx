import React from 'react'

const Button = ({buttonTitle,reqType,setReqType}) => {
  return (
    <button
        className={buttonTitle===reqType?"selected":null}
        type = "button"
        onClick={()=> setReqType(buttonTitle)}
    >
        {buttonTitle}
    </button>

  )
}

export default Button