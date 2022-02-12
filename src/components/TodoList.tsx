import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodo, RootState, ToggleComplete } from '../store/todoRedux';
import { TodoItem } from '../type';
import TodoItemComponent from './TodoItem';

const TodoList:React.FC = () => {
    const todoList = useSelector((state: RootState) => (state.todoList));
    const dispatch = useDispatch();
    
    const onCheck = (e:React.ChangeEvent<HTMLInputElement>, id: number):void => {
        const isCompleted = e.target.checked;
        dispatch(ToggleComplete(id, isCompleted));
    }

    const onDelete = (id: number) => {
        dispatch(DeleteTodo(id))
    }

    return (
        <div>
            {
                todoList.length > 0 && todoList.map((item: TodoItem) => {
                    return item ? (<TodoItemComponent {...item} onCheck={(e) => {onCheck(e, item.id)}} onDelete={(e) => {onDelete(item.id)}} key={item.id}/>) : null;
                })
            }
        </div>
    )
}

export default TodoList;