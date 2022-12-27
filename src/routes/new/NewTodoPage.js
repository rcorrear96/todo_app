import React from 'react';
import {TodoForm} from '../../ui/TodoForm'
import { useTodos } from '../useTodos';


function NewTodoPage() {

    const {stateUpdaters} = useTodos();

    const {addTodo} = stateUpdaters;

    return(
        <TodoForm
            label="Write your new TODO"
            submitText="Add"
            submitEvent={(text)=>addTodo(text)}
            // addTodo={addTodo}
        />
    )
}

export {NewTodoPage}