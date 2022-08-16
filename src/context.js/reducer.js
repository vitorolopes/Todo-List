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
        case "TOGGLE_TODO":{
            return {
                ...prevState,
                todos: prevState.todos.map( todo => 
                    todo.id === action.payload 
                     ?
                      {...todo, complete: !todo.complete}
                     :
                      todo
                )
            }
        }
        default:
        return prevState
    }
}

export default reducer