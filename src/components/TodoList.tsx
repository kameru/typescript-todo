import * as React from 'react';
import { TodoItem } from '../type';
import { getTodoList, setTodoList as setLocalTodoList } from '../utils/localStore';
import TodoItemComponent from './TodoItem';

const TodoList:React.FC = () => {
    const list = getTodoList();
    const [todoList, setTodoList] = React.useState<TodoItem[]>(list || []);
    
    const onCheck = (e:React.ChangeEvent<HTMLInputElement>, index: number):void => {
        const newList = [...todoList];
        newList[index].isCompleted = e.target.checked;
        setTodoList(newList);
        setLocalTodoList(newList);
    }

    return (
        <div>
            {
                todoList.length > 0 && todoList.map((item: TodoItem, index: number) => {
                    return (<TodoItemComponent {...item} onCheck={(e) => {onCheck(e, index)}}/>)
                })
            }
        </div>
    )
}

export default TodoList;