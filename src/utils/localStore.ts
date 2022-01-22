import { TodoItem } from "../type"

const KEY = 'TODO_LIST_KEY'

export const setTodoItem = (item: TodoItem): void => {
    const list = getTodoList()
    list.push(item)
    localStorage.setItem(KEY, JSON.stringify(list))
}

export const setTodoList = (list: TodoItem[]): void => {
    localStorage.setItem(KEY, JSON.stringify(list))
}

export const getTodoList = (): TodoItem[] => {
    const jsonString = localStorage.getItem(KEY)
    const list: TodoItem[] = jsonString ? JSON.parse(jsonString) as TodoItem[] : []
    return list
}