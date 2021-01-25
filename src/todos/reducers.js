import { CREATE_TODO, REMOVE_TODO, MARK_AS_COMPLETE } from './actions';

export const todos = (state = [], action) => {
    const { type, payload } = action;
    const { text } = payload || '';

    switch (type) {
        case CREATE_TODO:
            const newTodo = {
                text,
                isCompleted: false,
            }
            return state.concat(newTodo);
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