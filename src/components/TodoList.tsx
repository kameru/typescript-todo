import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModifyTodo, RootState, ToggleComplete } from '../store/todoRedux';
import { TodoItem } from '../type';
import { setTodoList } from '../utils/localStore';
import TodoItemComponent from './TodoItem';

const TodoList: React.FC = () => {
    const todoList = useSelector((state: RootState) => (state.todoList));
    const dispatch = useDispatch();

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
        const newList = [...todoList];
        const isCompleted = e.target.checked;
        dispatch(ToggleComplete(index, isCompleted));
        newList[index].isCompleted = isCompleted;
        setTodoList(newList);
    }

    const onModify = (item: TodoItem): void => {
        dispatch(ModifyTodo(item.id, item.title));
    }

    return (
        <div>
            {
                todoList.length > 0 && todoList.map((item: TodoItem, index: number) => {
                    return (
                        <TodoItemComponent
                            {...item}
                            onCheck={(e) => { onCheck(e, index) }}
                            onModify={onModify}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;