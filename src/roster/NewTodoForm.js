import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createTodo } from './actions';


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('default')
    return (
        <>
            <h1>Todo Form</h1>
            <aside className="container row m-4">
                <input
                    className="col-9"
                    type="text"
                    placeholder="Enter new todo"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button
                    className="submit col"
                    onClick={() => {
                        const isDuplicateText =
                            todos.some(todo => todo.text === inputValue);
                        if (!isDuplicateText) {
                            onCreatePressed(inputValue);
                            setInputValue('');
                        }
                    }}
                >Create Todo</button>
            </aside>
        </>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);