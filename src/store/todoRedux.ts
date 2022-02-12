import TodoList from "../components/TodoList";
import { TodoItem } from "../type"
import { getTodoList, setTodoList } from "../utils/localStore"

// Action
export const ADD_TODO = 'addTodo';
export const DELETE_TODO = 'deleteTodo';
export const MODIFY_TODO = 'modifyTodo'
export const TOGGLE_COMPLETE = 'toggleComplete'

export const AddTodo = (title: string) => {
    return {
        type: 'addTodo',
        payload: { title }
    }
}

export const DeleteTodo = (id: number) => {
    return {
        type: 'deleteTodo',
        payload: { id }
    }
}

export const ModifyTodo = (id: number, title: string) => {
    return {
        type: MODIFY_TODO,
        payload: {
            id,
            title,
        }
    }
}

export const ToggleComplete = (id: number, value: boolean) => {
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
export function todoReducer(state = initialState, action) {
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
    if (action.type === DELETE_TODO) {
        const todoList = [...state.todoList];
        let index = todoList.findIndex((item) =>(item?.id === action.payload.id));
        todoList[index] = null;

        setTodoList(todoList);
        return {
            todoList
        }
    }

    if (action.type === MODIFY_TODO) {
        const { id, title } = action.payload;
        const todoList = [...state.todoList];
        const index = todoList.findIndex(todo => todo.id === id);
        todoList[index].title = title;
        setTodoList(todoList)
        return {
            todoList
        }
    }
    if (action.type === TOGGLE_COMPLETE) {
        const { id, value } = action.payload;
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