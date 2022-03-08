import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])

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
                <button onClick={}> Add </button>
            </div>


           
            </div>
        </div>
    );
}

export default Todolist;


