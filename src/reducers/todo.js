const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD" :
            return {todo: [...state.todo,action.payload.title]};
            case "DELETE" :
                return{todo: state.todo.filter(item) => item.id !==action.payload.id}
            default :
            return state;
    }
}

export { todoReducer }
