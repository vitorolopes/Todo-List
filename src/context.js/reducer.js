const reducer = (prevState,action) => {
    switch(action.type){
        case "ADD_TODO":{
            return {
                ...prevState, 
                todos: [...prevState.todos, action.payload]
            }
        }  
        case "DELETE_TODO":{
            return {
                ...prevState,
                todos: prevState.todos.filter( todo => 
                    todo.id !== action.payload    
                )
            }
        } 
        default:
        return prevState
    }
}

export default reducer