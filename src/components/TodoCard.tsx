import React from 'react';
import {Todo} from './model';
import {FiDelete, FiEdit, FiCheckSquare} from 'react-icons/fi';

interface Props {
    task: Todo;
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoCard:React.FC<Props> = ({task, todos, setTodos}) => {

    const handleDone = (id:number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone:!todo.isDone} : todo ))
    }

    return (
        <div className="todoCard">
            <div className="task">
                {task.todo}
            </div>
            <div className="icons">
                <div className="icon"><FiEdit /></div>
                <div className="icon"><FiDelete /></div>
                <div className="icon" onClick={() => handleDone(task.id)}><FiCheckSquare /></div>
            </div>
        </div>
    );
}

export default TodoCard;