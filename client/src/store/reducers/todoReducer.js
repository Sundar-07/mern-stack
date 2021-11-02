const todoReducer = (state=[],action) => {
    switch (action.key) {
        case "ADD_TODO":
            //console.log(action.todo);
            return[action.todo.data,...state];
        default:
            return state
    }
}

export default todoReducer;