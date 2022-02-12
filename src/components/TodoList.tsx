import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, ToggleComplete } from '../store/todoRedux';
import { TodoItem } from '../type';
import { setTodoList } from '../utils/localStore';
import TodoItemComponent from './TodoItem';

const TodoList:React.FC = () => {
    const todoList = useSelector((state: RootState) => (state.todoList));
    const dispatch = useDispatch();
    
    const onCheck = (e:React.ChangeEvent<HTMLInputElement>, id: number):void => {
        const newList = [...todoList];
        const isCompleted = e.target.checked;
        dispatch(ToggleComplete(id, isCompleted));
    }

    return (
        <div>
            {
                todoList.length > 0 && todoList.map((item: TodoItem) => {
                    return (<TodoItemComponent {...item} onCheck={(e) => {onCheck(e, item.id)}} key={item.id}/>)
                })
            }
        </div>
    )
}

export default TodoList;