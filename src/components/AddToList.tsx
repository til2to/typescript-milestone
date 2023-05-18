import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: '',
    note: '',
    url: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleClick = (): void => {
    if(!input.name || !input.age || !input.url){
      return
    }
    setPeople(prevPeople => [...prevPeople, 
      {
        name: input.name, 
        age: parseInt(input.age), 
        url: input.url
      }
    ])
  }

  return (
    <div className='AddToList'>
      <input 
        type="text"
        className='AddToList-input'
        name='name'
        placeholder='Name'
        value={input.name}
        onChange={handleChange}
      />
      <input 
        type="number"
        className='AddToList-input'
        name='age'
        placeholder='Age'
        value={input.age}
        onChange={handleChange}
      />
      <input 
        type="text"
        className='AddToList-input'
        name='url'
        placeholder='Image url'
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        className='AddToList-input'
        name='note'
        placeholder='Note'
        value={input.note}
        onChange={handleChange}
      />
      <button 
        className='AddToList-btn'
        onClick={handleClick}
      >
        Add to list
      </button>
    </div>
  )
}

export default AddToList