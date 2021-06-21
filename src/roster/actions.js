export const ADD_ROSTER_ITEM = 'ADD_ROSTER_ITEM';
export const addRosterItem = text => ({
    type: ADD_ROSTER_ITEM,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE';
export const markTodoComplete = text => ({
    type: MARK_AS_COMPLETE,
    payload: { text },
});