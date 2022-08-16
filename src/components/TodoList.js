import React from 'react'

const dummyTodos=[
  {text: "Todo 1", id: 1, completed: false},
  {text: "Todo 2", id: 2, completed: false},
  {text: "Todo 3", id: 3, completed: true}
]

const TodoList = () => {
  return (
    <div className='list'>
      <div className="list-title">TO-DOS</div>
      <div className="list-todos">
      {/* // TODO */}
        {dummyTodos.map( todo => {
          const {text,id,completed} = todo;
          return(
            <div className="todoItem">
              <div className="item text">{text}</div>
              <div>
                <button className="item-toggleBtn">Toogle</button>
                <button className="item-deleteBtn">Delete</button>
              </div>
         
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default TodoList