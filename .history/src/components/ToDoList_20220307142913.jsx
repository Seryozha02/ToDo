import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodo] = useState([])

    function handleChangeInputText(e){
        setInputText(e.target.value);
        
    }

    return (
        <div>
            <h1>ToDo</h1>
            <div>
                <input type="text" value={inputText} placeholder = "Add to list" onChange = {(e) => {
                    handleChangeInputText(e);
                }}/>
                <button> Add </button>
            </div>


            <div>
                <p>{inputText}</p>
            </div>
        </div>
    );
}

export default Todolist;


