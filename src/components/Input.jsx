import React from 'react'

const Input = ({ value, handleInput, label }) => {
  return (
    <div className='main-bar'>
      <label htmlFor='name'>
        <h4 className='card-title'>{label}</h4>
        <input
          value={value}
          onChange={handleInput}
          type='text'
          placeholder='name'
          className='name-input'
          name='name'
        />
      </label>
    </div>
  )
}

export default Input
