import React, { Dispatch, SetStateAction } from 'react';
import PropTypes from 'prop-types';

import { FilterStatus, TodoType } from '../App';

type FormProps = {
    inputText: string,
    todos: TodoType[],
    setInputText: Dispatch<SetStateAction<string>>,
    setStatus: React.Dispatch<React.SetStateAction<FilterStatus>>,
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
};

const Form = ({ inputText, todos, setInputText, setStatus, setTodos }: FormProps): JSX.Element => {
    const inputTextHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputText(event.target.value);
    };

    const submitTodoHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();

        const newTodo: TodoType = {
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        };

        setTodos([...todos, newTodo]);
        setInputText('');
    };

    const statusHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setStatus(event.target.value as FilterStatus);
    };

    return(
        <form>
            <input type="text" value={inputText} onChange={inputTextHandler} />
            <button type="submit" onClick={submitTodoHandler}>SUBMIT</button>
            <div>
                <select name="todos" onChange={statusHandler}>
                    <option value={FilterStatus.All}>all</option>
                    <option value={FilterStatus.Completed}>completed</option>
                    <option value={FilterStatus.Uncompleted}>uncompleted</option>
                </select>
            </div>
        </form>
    );
}

// TODO:
Form.propTypes = {
    // setInputText: PropTypes.string.isRequired
};

export default Form;
