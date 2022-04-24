import React from 'react';
import './App.css';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="app">
      {/* to-do list */}
      <div className='app__container'>
        {
          todoList.map(item => (
            //todoComponent goes here
            <div className='app__todoContainer' key={item.id}>
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            </div>
          ))
        }
      </div>
      {/* input space to add new items */}
      <Input />
    </div>
  );
}

export default App;
