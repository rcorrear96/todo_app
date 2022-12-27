import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css'

function TodoForm(props){

    const navigate = useNavigate();

    const [newTodoValue, setNewTodoValue] = React.useState(''); 

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        navigate('/')
        // setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/')
        // setOpenModal(false);
    }


    return(
        <form onSubmit={onSubmit}>
            <label> {props.label} </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Be a good developer'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className='TodoForm-button TodoForm-button--add'
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export {TodoForm};