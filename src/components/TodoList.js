import React from 'react';
import { useStateContext } from '../context.js/stateContextProvider';

const TodoList = () => {

  const {todos, deleteTodo, toggleTodo} = useStateContext();

  return (
    <div className='list'>
      <div className="list-title">TO-DOS</div>
      <div className="list-todos">

        {todos.map( todo => {
          const {inputText,id,complete} = todo; //! Interesting case about destructuring
          //! if instead of complete I used completed, completed would be "undefined" but
          //! no error would be thrown.
          console.log(id)
          return(
            <div className="todoItem">
              <div className="item text" style={{color: complete ? "green" : "red"}}
              >
                {inputText}
              </div>
              <div>
                <button className="item-toggleBtn"
                        onClick={() => toggleTodo(id)}
                >
                  Toogle
                </button>
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