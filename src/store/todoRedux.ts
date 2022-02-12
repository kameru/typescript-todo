import { TodoItem } from "../type"
import { getTodoList } from "../utils/localStore"

// Action
export const ADD_TODO = 'addTodo';
export const TOGGLE_COMPLETE = 'toggleComplete'

export const AddTodo = (todo: TodoItem) => {
    return {
        type: 'addTodo',
        payload: todo
    }
}
export const ToggleComplete = (index:number, value:boolean) => {
    return {
        type: 'toggleComplete',
        payload: {
            index,
            value
        }
    }
}

// Reducer
const initialState = {
    todoList: getTodoList()
}
export function todoReducer(state=initialState, action) {
    if (action.type === ADD_TODO) {
        return {
            todoList: [...state.todoList, action.payload]
        }
    }
    if (action.type === TOGGLE_COMPLETE) {
        const {index, value} = action.payload;
        const todoList = [...state.todoList];
        todoList[index].isCompleted = value;
        return {
            todoList
        }
    }

    return state;
}

export type RootState = ReturnType<typeof todoReducer>;