import * as React from 'react';


const TodoInput: React.FC = () => {
    return (
        <div>
            <input type="text" placeholder='할일을 입력하세요' />
            <button type='button'>저장</button>
        </div>
    )
}
export default TodoInput