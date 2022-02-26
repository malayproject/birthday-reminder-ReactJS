import React from 'react'

const ClearList = ({persons, setPersons}) => {
    let text = 'Clear All'
    let reset = () => {
        text = persons.length === 0 ? 'Cleared' : 'Clear All'
    }
  return (
    <button className='button' onClick={() => setPersons([], reset)}>{text}</button>
  )
}

export default ClearList