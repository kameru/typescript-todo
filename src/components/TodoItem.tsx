import * as React from 'react';
import { TodoItem } from '../type';

interface TodoItemProps extends TodoItem {
    onCheck: (e:React.ChangeEvent<HTMLInputElement>) => void,
    onDelete?: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const TodoItemComponent:React.FC<TodoItemProps> = (props:TodoItemProps) => {
    return (
        <div >
            <input type='checkbox' checked={props.isCompleted} onChange={props.onCheck}/>
            <span style={props.isCompleted ? {color: '#777', textDecoration: 'line-through'} : undefined}>{props.title}</span>
            <button onClick={props.onDelete}>삭제</button>
        </div>
    )
}

export default TodoItemComponent;