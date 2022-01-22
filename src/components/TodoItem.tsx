import * as React from 'react';
import { TodoItem } from '../type';

interface TodoItemProps extends TodoItem {
    onCheck: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const TodoItemComponent:React.FC<TodoItemProps> = (props:TodoItemProps) => {
    return (
        <div>
            <input type='checkbox' checked={props.isCompleted} onChange={props.onCheck}/>
            <span>{props.title}</span>
        </div>
    )
}

export default TodoItemComponent;