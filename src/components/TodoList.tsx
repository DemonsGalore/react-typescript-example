import React from 'react';

import Todo from './Todo';
import { TodoType } from '../App';

type TodoListProps = {
    filteredTodos: TodoType[],
    todos: TodoType[],
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
};

const TodoList = ({ filteredTodos, todos, setTodos }: TodoListProps): JSX.Element => {
    return(
        <ul>
            {filteredTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
        </ul>
    );
}

export default TodoList;
