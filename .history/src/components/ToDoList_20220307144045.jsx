import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])

    function handleChangeInputText(e){
        setInputText(e.target.value);
        
    }

    function handleToDoAdd(){
        const todo = {
            id: Math.random()
        }
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
                        return <li>{}</li>
                    })}
                </ul>
               
            </div>
        </div>
    );
}

export default Todolist;


