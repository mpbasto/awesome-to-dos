import React from 'react'
import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../../features/todoSlice';

const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className='todoItem'>
            {/* checkbox down goes here */}
            <Checkbox
                checked={done}
                color='primary'
                onChange={handleCheck} // cross off item from list when done
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            {/* name goes down here */}
            <p className={done ? 'todoItem--done' : undefined}>{name}</p>
        </div>
    )
}

export default TodoItem