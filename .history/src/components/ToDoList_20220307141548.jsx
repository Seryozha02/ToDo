import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <h1>ToDo</h1>
            <div>
                <input type="text" placeholder = "Add to list" on/>
                <button> Add </button>
            </div>
        </div>
    );
}

export default Todolist;


