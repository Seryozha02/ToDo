import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [inputTxt, set]

    return (
        <div>
            <h1>ToDo</h1>
            <div>
                <input type="text" placeholder = "Add to list"/>
                <button> Add </button>
            </div>
        </div>
    );
}

export default Todolist;


