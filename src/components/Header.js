import React from 'react'

const Header = () => {
  return (
    <div className='input'>
        <h3 className='input-title'>useCONTEXT + useREDUCER</h3>
        <form >
            <div className="form-control">
                <input className='input-input' type="text" placeholder='Enter a todo ...'
                    // TODO
                />
                <button className='submit-btn'
                    // TODO
                >
                    ADD
                </button>
            </div>
        </form>
    </div>
  )
}

export default Header