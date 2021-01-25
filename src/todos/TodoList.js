import React from 'react';
import { connect } from 'react-redux';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { markTodoComplete, removeTodo } from './actions';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({ todos = [], onRemovePressed, onMarkedCompletePressed }) => {
    return (
        <>
            <NewTodoForm />
            {
                todos.map(todo =>
                    <TodoListItem 
                    onRemovePressed={onRemovePressed} 
                    todo={todo} 
                    onMarkedCompletePressed={onMarkedCompletePressed}/>
                )
            }
        </>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkedCompletePressed: text => dispatch(markTodoComplete(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);