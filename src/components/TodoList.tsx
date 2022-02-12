import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, ToggleComplete } from '../store/todoRedux';
import { TodoItem } from '../type';
import { getTodoList, setTodoList } from '../utils/localStore';
import TodoItemComponent from './TodoItem';

const TodoList:React.FC = () => {
    const list = getTodoList();
    const todoList = useSelector((state: RootState) => (state.todoList));
    const dispatch = useDispatch();
    
    const onCheck = (e:React.ChangeEvent<HTMLInputElement>, index: number):void => {
        const newList = [...todoList];
        const isCompleted = e.target.checked;
        dispatch(ToggleComplete(index, isCompleted));
        newList[index].isCompleted = isCompleted;
        setTodoList(newList);
    }

    return (
        <div>
            {
                todoList.length > 0 && todoList.map((item: TodoItem, index: number) => {
                    return (<TodoItemComponent {...item} onCheck={(e) => {onCheck(e, index)}} key={index}/>)
                })
            }
        </div>
    )
}

export default TodoList;