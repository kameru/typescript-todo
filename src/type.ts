export interface TodoItem {
    id:number,
    title: string,
    isCompleted: boolean
}

export type TodoListItem = TodoItem | null;