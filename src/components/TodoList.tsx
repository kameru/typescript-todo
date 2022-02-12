import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModifyTodo, RootState, ToggleComplete } from '../store/todoRedux';
import { TodoItem } from '../type';
import TodoItemComponent from './TodoItem';

const TodoList: React.FC = () => {
    const todoList = useSelector((state: RootState) => (state.todoList));
    const dispatch = useDispatch();

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
        const isCompleted = e.target.checked;
        dispatch(ToggleComplete(id, isCompleted));
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
                            onCheck={(e) => { onCheck(e, item.id) }}
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