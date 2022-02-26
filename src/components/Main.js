import React, {useState} from 'react'
import Persons from './Persons'
import Count from './Count'
import ClearList from './ClearList'
import Data from './Data'


const Main = () => {
    const [persons, setPersons] = useState(Data)
    return (
        <main className='main'>
            <Count count={persons.length}/>
            <Persons persons={persons}/>
            <ClearList persons={persons} setPersons={setPersons}/>
        </main>
    )
}

export default Main