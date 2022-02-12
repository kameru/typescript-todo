import { TodoItem } from "../type"
import { getTodoList, setTodoList } from "../utils/localStore"

// Action
export const ADD_TODO = 'addTodo';
export const TOGGLE_COMPLETE = 'toggleComplete'

export const AddTodo = (title: string) => {
    return {
        type: 'addTodo',
        payload: {title}
    }
}
export const ToggleComplete = (id:number, value:boolean) => {
    return {
        type: 'toggleComplete',
        payload: {
            id,
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
        const newItem = {
            id: state.todoList.length,
            title: action.payload.title,
            isCompleted: false
        }
        const todoList = [...state.todoList, newItem];
        setTodoList(todoList)
        return {
            todoList
        }
    }
    if (action.type === TOGGLE_COMPLETE) {
        const {id, value} = action.payload;
        const todoList = [...state.todoList];
        const item = todoList.find((item) => item.id === id)
        item.isCompleted = value;

        setTodoList(todoList);
        return {
            todoList
        }
    }

    return state;
}

export type RootState = ReturnType<typeof todoReducer>;