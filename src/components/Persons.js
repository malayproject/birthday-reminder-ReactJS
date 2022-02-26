import React from 'react'

const Persons = ({persons}) => {
  return (
    <div className='persons'>
        {
            persons.map(
                person => {
                    const {id, name, age, image} = person
                    return (
                        <div className='person' key={id}>
                            <img src={image} alt={name}></img>
                            <div className='nameAge'>
                                <h4>{name}</h4>
                                <h5>{age} years</h5>
                            </div>
                        </div>
                    )       
                }
            )
        }
    </div>
  )
}

export default Persons