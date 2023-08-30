import React, {useState} from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText!== "")
    setListTodo([...listTodo, inputText])
    console.log("list", inputText);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
   <div className="display-container">
   <TodoInput  addList={addList} />
      <h1>TO - Do</h1>
      <hr />
      {
        listTodo.map((listItem,i)=>{
          return(
            <TodoList  key={i} item={listItem} index={i} deleteItem={deleteListItem} />
          )
        })
      }
   </div>
     
     

     
    </div>
  );
}

export default App;
