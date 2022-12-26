import React from 'react';
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos,loading}) {
    return (
        <h2 className={`TodoCounter  ${!!loading && "TodoCounter--loading"}`}>You maked {completedTodos} of {totalTodos} TODOs</h2>
    )
}

export { TodoCounter }