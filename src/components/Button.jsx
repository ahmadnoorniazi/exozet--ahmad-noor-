import React from 'react'

export default function Button ({buttonText, onHandleClick, isDisable}) {
  return (
    <button
      type='button'
      onClick={onHandleClick}
      className='btn btn-pink'
      disabled={isDisable}
    >
      {buttonText}
    </button>
  )
}
