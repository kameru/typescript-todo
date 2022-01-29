import { TodoItem } from "../type"
import { getTodoList } from "../utils/localStore"

// Action
export const ADD_TODO = 'addTodo';

export const AddTodo = (todo: TodoItem) => {
    return {
        type: 'addTodo',
        payload: todo
    }
}

// Reducer
const initialState = {
    todoList: getTodoList()
}
export function todoReducer(state=initialState, action) {
    if (action.type === 'addTodo') {
        return {
            todoList: [...state.todoList, action.payload]
        }
    }

    return state;
}

export type RootState = ReturnType<typeof todoReducer>;