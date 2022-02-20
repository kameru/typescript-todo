import { TodoItem, TodoListItem } from "../type"

const KEY = 'TODO_LIST_KEY'

export const setTodoItem = (item: TodoItem): void => {
    const list = getTodoList()
    list.push(item)
    localStorage.setItem(KEY, JSON.stringify(list))
}

export const setTodoList = (list: TodoListItem[]): void => {
    localStorage.setItem(KEY, JSON.stringify(list))
}

export const getTodoList = (): TodoListItem[] => {
    const jsonString = localStorage.getItem(KEY)
    const list: TodoListItem[] = jsonString ? JSON.parse(jsonString) as TodoListItem[] : []
    return list
}