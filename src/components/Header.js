import React, {useState} from 'react';
import { useStateContext } from '../context.js/stateContextProvider';


const Header = () => {

  const { addTodo} = useStateContext();

  const [inputText, setinputText] = useState("")

  const handleSubmit = (e) => { 
    e.preventDefault()
    const newTodo = {
        inputText,
        id: Math.floor(Math.random() * 1000),
        complete: false
     }
     addTodo(newTodo)
     setinputText("")
   }

  return (
    <div className='input'>
        <h3 className='input-title'>useCONTEXT + useREDUCER</h3>
        <form >
            <div className="form-control">
                <input className='input-input' type="text" placeholder='Enter a todo ...'
                       value={inputText}
                       onChange={(e)=> setinputText(e.target.value)}
                />
                <button className='submit-btn'
                        onClick={handleSubmit}
                >
                    ADD
                </button>
            </div>
        </form>
    </div>
  )
}

export default Header