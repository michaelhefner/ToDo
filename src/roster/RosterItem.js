import React from 'react';
import { connect } from 'react-redux';

import NewTodoForm from './NewTodoForm';
import RosterListItem from './RosterListItem';
import { markTodoComplete, removeTodo } from './actions';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RosterList = ({ roster = [], onRemovePressed, onMarkedCompletePressed }) => {
    return (
        <>
            <NewTodoForm />
            {
                roster.map(r =>
                    <RosterListItem 
                    onRemovePressed={onRemovePressed} 
                    rstr={r} 
                    onMarkedCompletePressed={onMarkedCompletePressed}/>
                )
            }
        </>
    )
}

const mapStateToProps = state => ({
    roster: state.roster,
})
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkedCompletePressed: text => dispatch(markTodoComplete(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(RosterList);