import React, { useState } from 'react';

const Inputs = () => {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = () => {
        setTodo([...todo, newTodo]);
        setNewTodo('');
    };

    return (
        <div>
            <input type='text' value={newTodo} onChange={handleChange} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todo.map((todos, index) => (
                    <li key={index}>{todos}</li>
                ))}
            </ul>
        </div>
    );
}

export default Inputs;

