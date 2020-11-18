import React, { useEffect, useState } from 'react';

import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

export type TodoType = {
    text: string,
    completed: boolean,
    id: number
};

export enum FilterStatus {
    Completed = 'completed',
    Uncompleted = 'uncompleted',
    All = 'all'
}

const App = (): JSX.Element => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([] as TodoType[]);
    const [status, setStatus] = useState(FilterStatus.All);
    const [filteredTodos, setFilteredTodos] = useState([] as TodoType[]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        setLocalTodos();
    }, [todos, status])

    const filterHandler = (): void => {
        switch (status) {
            case FilterStatus.Completed:
                setFilteredTodos(todos.filter(((todo) => todo.completed)))
                break;
            case FilterStatus.Uncompleted:
                setFilteredTodos(todos.filter(((todo) => !todo.completed)))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const getLocalTodos = (): void => {
        const localTodos: string | null = localStorage.getItem('todos');

        if (localTodos) {
            setTodos(JSON.parse(localTodos));
        }
    }

    const setLocalTodos = (): void => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    return (
        <header>
            <h1>todo list</h1>
            <Form
                inputText={inputText}
                todos={todos}
                setInputText={setInputText}
                setStatus={setStatus}
                setTodos={setTodos}
            />
            <TodoList
                filteredTodos={filteredTodos}
                todos={todos}
                setTodos={setTodos}
            />
        </header>
    );
}

export default App;
