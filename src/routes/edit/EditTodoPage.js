import React from 'react';
import { useParams } from 'react-router-dom';
import {TodoForm} from '../../ui/TodoForm'
import { useTodos } from '../useTodos';


function EditTodoPage() {

    const params = useParams();
    const id = Number(params.id)

    const {stateUpdaters} = useTodos();

    const {editTodo} = stateUpdaters

    return(
        <TodoForm
            label="Edit TODO"
            submitText="Edit"
            submitEvent={(newText) => editTodo(id, newText)}
            // addTodo={addTodo}
        />
    )
}

export {EditTodoPage}