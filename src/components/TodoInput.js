import React, {useState} from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState('')
  return (
    <div>

        <input type='text' className='input-todo' value={inputText} placeholder='Enter Your To-do' onChange={(e)=>setInputText(e.target.value)} />
        <button className='btn-submit'  onClick={
            ()=>{props.addList(inputText)
            setInputText('')
        }}>
            Add
            </button>

        
        </div>
  )

}

export default TodoInput