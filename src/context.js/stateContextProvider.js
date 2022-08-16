import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer'

const StateContext = createContext();

const initialState = {
    todos: [] // {id:"123", text:"Some text", complete: false}
};

export const StateContextProvider = ( {children} ) => {

 const dummyValue = "This is a dummy value"

 const [state, dispatch] = useReducer(reducer,initialState)

 const addTodo = (newTodo) => {
    dispatch({type: "ADD_TODO", payload: newTodo})
 }

 const deleteTodo = (id) => { 
    dispatch({type: "DELETE_TODO", payload: id})
  }

 return(
        <StateContext.Provider
            value= {{
                dummyValue,
                addTodo,
                todos: state.todos,
                deleteTodo
            }}
        >
            {children}
        </StateContext.Provider>
 )
}

export const useStateContext = () => useContext(StateContext)