const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD" :
            return [...state,action.payload.title];
            case "DELETE" :
                return (
                    state.filter((item)=> {
                        if(item.id !=action.payload.id) {
                            return state;
                        }
                    })
                )
            default :
            return state;
    }
}

export { todoReducer }