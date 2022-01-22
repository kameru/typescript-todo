import * as React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App:React.FC = () => {
    return (
        <div>
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default App;