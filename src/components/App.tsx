import * as React from 'react';
import TodoInput from './TodoInput';

const App = (props:{name: string}) => {
    return (
        <div>
            <TodoInput />
        </div>
    )
}

export default App;