import React from 'react';
import '../App.css';

const TodoListItem = ({ todo, onRemovePressed, onMarkedCompletePressed }) => {
    return (
        <section className="card m-3">
            <h3 className="card-header">{todo ? todo.text : ''}</h3>
            <div className="card-body">
            {todo.isCompleted
                ? null
                : <button 
                onClick={() => onMarkedCompletePressed(todo.text)}
                >Mark As Completed</button>}
                <button
                    className="submit"
                    onClick={() => onRemovePressed(todo.text)}
                >Remove</button>
            </div>
        </ section>
    )
}

export default TodoListItem;