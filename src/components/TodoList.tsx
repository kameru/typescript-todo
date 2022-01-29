import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/todoRedux';
import { TodoItem } from '../type';
import { getTodoList, setTodoList } from '../utils/localStore';
import TodoItemComponent from './TodoItem';

const TodoList:React.FC = () => {
    const list = getTodoList();
    const todoList = useSelector((state: RootState) => (state.todoList));
    
    const onCheck = (e:React.ChangeEvent<HTMLInputElement>, index: number):void => {
        const newList = [...todoList];
        newList[index].isCompleted = e.target.checked;
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