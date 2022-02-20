import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodo, ModifyTodo, RootState, ToggleComplete } from '../store/todoRedux';
import { TodoItem } from '../type';
import TodoItemComponent from './TodoItem';

const TodoList: React.FC = () => {
    const todoList = useSelector((state: RootState) => (state.todoList));
    const dispatch = useDispatch();

    const onCompleteChange = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
        const isCompleted = e.target.checked;
        dispatch(ToggleComplete(id, isCompleted));
    }

    const onDelete = (id: number) => {
        dispatch(DeleteTodo(id))
    }
    
    const onModify = (item: TodoItem): void => {
        dispatch(ModifyTodo(item.id, item.title));
    }

    return (
        <div>
            {
                todoList.length > 0 && todoList.map((item: TodoItem) => {
                    return (
                        <TodoItemComponent
                            {...item}
                            onCompleteChange={(e) => { onCompleteChange(e, item.id) }}
                            onModify={onModify}
                            onDelete={(e) => { onDelete(item.id) }}
                            key={item.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;