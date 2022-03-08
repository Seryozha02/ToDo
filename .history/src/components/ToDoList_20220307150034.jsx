import React from 'react';
import { useState } from 'react';
import "./ToDoList.css"


const Todolist = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])

    function handleChangeInputText(e){
        setInputText(e.target.value);
        
    }

    function handleToDoAdd(){
        if(!inputText){
             return;
        const todo = {
            id: Math.random(),
            value: inputText,
            isChecked: false
        }
        setTodos([...todos,todo])
        setInputText(""
        )
    }

    return (
        <div>
            <h1>ToDo</h1>
            <div>
                <input type="text" value={inputText} placeholder = "Add to list" onChange = {(e) => {
                    handleChangeInputText(e);
                }}/>
                <button onClick={() =>{
                    handleToDoAdd();
                }}> Add </button>
            </div>


            <div>
                <ul>
                    {todos.map((todo) =>{
                        return <li><li key={todo.id}>{todo.value}</li></li>
                    })}
                </ul>
               
            </div>
        </div>
    );
}

export default Todolist;


