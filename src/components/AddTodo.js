import React, { useState } from "react"

const AddTodo = ({ dispatch }) => {
    const[value,setValue] = useState("");
    const[dateId, setDateId] = useState(Date.now());

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setDateId(Date.now().toString());
        dispatch({type:"ADD",payload:{title:value,id:dateId}});
        setValue("");
    }

    return (
        <>
        <form id="todo-form" onSubmit={handleSubmit}>
            <input type="text" id="todo-input" onChange={handleChange}/>
            <button type="submit"></button>
        </form>
        </>
    )
}

export { AddTodo }