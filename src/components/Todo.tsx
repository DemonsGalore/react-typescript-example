import React from 'react';

import { TodoType } from '../App';

type TodoProps = {
    todo: TodoType,
    todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
};

const Todo = ({ todo, todos, setTodos }: TodoProps): JSX.Element => {
    const deleteHandler = (): void => {
        setTodos(todos.filter((_todo) => _todo.id !== todo.id));
    };

    const completeHandler = (): void => {
        setTodos(todos.map((_todo) => {
            if (_todo.id === todo.id) {
                return {
                    ..._todo,
                    completed: !_todo.completed
                };
            }

            return _todo;
        }));
    };

    return(
        <li className={`${todo.completed ? 'completed' : ''}`}>
            <span>{todo.text} {todo.id} {todo.completed ? 'completed' : 'uncompleted'}</span>
            <button onClick={deleteHandler}>DELETE</button>
            <button onClick={completeHandler}>CHECK</button>
        </li>
    );
}

export default Todo;
