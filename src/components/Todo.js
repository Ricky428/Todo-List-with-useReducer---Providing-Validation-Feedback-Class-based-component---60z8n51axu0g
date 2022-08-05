import React from 'react';
const Todo = ({dispatch,todo}) => {
   
    return (
        <div className='todo'>
        {todo.map((item)=> {
            return(
            <div className="title">
                {item}
                <button onClick={()=> dispatch({type:"DELETE",payload:{title:item.title,id:item.id}})} 
                className="todo-delete">Delete</button>
            </div>
            )
        })};
        </div>
    )
}


export { Todo }

