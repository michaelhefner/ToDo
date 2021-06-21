import { ADD_ROSTER_ITEM, REMOVE_TODO, MARK_AS_COMPLETE } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;
    const { text } = payload || '';

    switch (type) {
        case ADD_ROSTER_ITEM:
            const newItem = {
                text,
            }
            return state.concat(newItem);
        case REMOVE_TODO:
            return state.filter(todo => todo.text !== text);
        case MARK_AS_COMPLETE:
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        default:
            return state;
    }
}