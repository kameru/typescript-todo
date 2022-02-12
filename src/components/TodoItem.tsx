import * as React from 'react';
import { TodoItem } from '../type';

interface TodoItemProps extends TodoItem {
    id: number
    title: string
    isCompleted: boolean
    onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void
    onModify?: (item: TodoItem) => void
    onDelete?: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const TodoItemComponent: React.FC<TodoItemProps> = ({
    id,
    title,
    isCompleted,
    onCheck,
    onDelete,
    onModify
}) => {
    const [temperalTitle, setTemperalTitle] = React.useState<string>(title);
    const [isModifyMode, setModifyMode] = React.useState(false);
    const handleStartModifying = () => {
        setModifyMode(true)
    }
    const handleApplyModifying = () => {
        onModify?.({
            id,
            title: temperalTitle,
            isCompleted,
        })
        setModifyMode(false)
    }
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemperalTitle(e.target.value)
    }
    const handleCancelModifying = () => {
        setTemperalTitle(title)
        setModifyMode(false)
    }
    return (
        <div>
            <input type='checkbox' checked={isCompleted} onChange={onCheck} />
            {
                isModifyMode ? (
                    <input type='text' value={temperalTitle} onChange={handleChangeTitle} />
                ) : (
                    <span style={isCompleted ? { color: '#777', textDecoration: 'line-through' } : undefined}>
                        {title}
                    </span>
                )
            }
            {
                isModifyMode && (
                    <>
                        <button type='button' onClick={handleApplyModifying}>확인</button>
                        <button type='button' onClick={handleCancelModifying}>취소</button>
                    </>
                )
            }
            {
                !isModifyMode && !!onModify && (
                    <button type='button' onClick={handleStartModifying}>수정</button>
                )
            }
            <button onClick={onDelete}>삭제</button>
        </div>
    )
}


export default TodoItemComponent;