import React from 'react';
import { useStateContext } from '../context.js/stateContextProvider';

const TodoList = () => {

  const {todos, deleteTodo} = useStateContext();
  console.log(todos);

  return (
    <div className='list'>
      <div className="list-title">TO-DOS</div>
      <div className="list-todos">

        {todos.map( todo => {
          const {inputText,id,completed} = todo;
          return(
            <div className="todoItem">
              <div className="item text">{inputText}</div>
              <div>
                <button className="item-toggleBtn">Toogle</button>
                <button className="item-deleteBtn"
                        onClick={ () => deleteTodo(id)}
                >
                  Delete
                </button>
              </div>
         
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default TodoList