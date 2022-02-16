import React from 'react';
import './styles.css';
import {Todo} from './model';
import TodoCard from './TodoCard';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className='todos'>
            {todos.map(t => <TodoCard task={t} key={t.id} todos={todos} setTodos={setTodos} />)}
        </div>
    )
}

export default TodoList;