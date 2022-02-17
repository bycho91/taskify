import React, {useState, useRef, useEffect} from 'react';
import {Todo} from './model';
import {FiDelete, FiEdit, FiCheckSquare} from 'react-icons/fi';

interface Props {
    task: Todo;
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}


const TodoCard:React.FC<Props> = ({task, todos, setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(task.todo);

    const handleDone = (id:number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone:!todo.isDone} : todo ))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();

        setTodos(todos.map(todo => todo.id === id ? {...todo, todo: editText} : todo));

        setEdit(false);

    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="todoCard" onSubmit={e => handleEdit(e, task.id)}>
            {
                edit ? (
                    <input value={editText} onChange={e => setEditText(e.target.value)} className='todo__single--edit' ref={inputRef} />
                ) : (
                    task.isDone ? (
                        <div className='task strike'>{task.todo}</div>
                    ) : (
                        <div className='task'>{task.todo}</div>
                    )
                )
            }
          
            <div className="icons">
                <div className="icon" onClick={(e) => {
                         if(!edit && !task.isDone) {
                            setEdit(!edit);
                        }
                }}><FiEdit /></div>
                <div className="icon" onClick={() => handleDelete(task.id)}><FiDelete /></div>
                <div className="icon" onClick={() => handleDone(task.id)}><FiCheckSquare /></div>
            </div>
        </form>
    );
}

export default TodoCard;