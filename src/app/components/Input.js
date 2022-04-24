import React, { useState } from 'react'
import './Input.css'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'

const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    /* Function to add item to list */
    const addItem = () => {
        console.log(`Adding ${input}...`)
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
        setInput('');
    }

    return (
        /* Input area to type a new item and add to the to-do list */
        <div className='input'>
            <input type='text' value={input} onChange={ev => setInput(ev.target.value)} />
            {/* button will trigger a function that will add item to the list & clearn input */}
            <button onClick={addItem}>Add item</button>
        </div>
    )
}

export default Input