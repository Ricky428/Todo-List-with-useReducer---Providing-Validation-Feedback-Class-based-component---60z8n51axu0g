import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [todo,dispatch] = useReducer(todoReducer,{todo:[]})
  
 
  return (
    <div id="main">
      <AddTodo dispatch={dispatch} todo={todo}/>
      <Todo dispatch={dispatch} todo={todo}/>
     {/* Render list of Todo Components here */}
    </div>
  )
}


export default App;
