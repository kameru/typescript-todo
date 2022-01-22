import * as React from 'react';
import { TodoItem } from '../type';
import * as localStore from '../utils/localStore'


const TodoInput: React.FC = () => {
    const [title, setTitle] = React.useState<string>('');

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    };

    const onSave = (): void => {
        console.log('onSave')
        const newItem: TodoItem = {
            title,
            isCompleted: false
        }
        localStore.setTodoItem(newItem)
        location.reload();
    };

    return (
        <div>
            <input type="text" placeholder='할일을 입력하세요' onChange={onChangeTitle} />
            <button type='button' onClick={onSave}>저장</button>
        </div>
    )
}
export default TodoInput