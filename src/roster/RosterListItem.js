import React from 'react';
import '../App.css';

const RosterListItem = ({ roster, onRemovePressed, onMarkedCompletePressed }) => {
    return (
        <section className="card m-3">
            <h3 className="card-header">{roster ? roster.text : ''}</h3>
            <div className="card-body">
            {roster.isCompleted
                ? null
                : <button 
                onClick={() => onMarkedCompletePressed(roster.text)}
                >Mark As Completed</button>}
                <button
                    className="submit"
                    onClick={() => onRemovePressed(roster.text)}
                >Remove</button>
            </div>
        </ section>
    )
}

export default RosterListItem;