import React from 'react';
import {useTodos} from './useTodos'
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];




function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
} = useTodos();

return (
    <React.Fragment>
    <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
    />
    <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
    />
    <TodoList
        error={error}
        oloading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={()=> <TodosError/> }
        onLoading={()=> <TodosLoading/> }
        onEmptyTodos={()=> <EmptyTodos/> }
        onEmptySearchResults={(searchText)=> <p>No hay resultados para {searchText} </p>}
        render={todo=> (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}/>
                )
        }
    />
    {/* <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/> }

        {searchedTodos.map(todo=> (
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}/>
            )
        )
        }
    </TodoList> */}

    {!!openModal && (
        <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
        </Modal>
    )}        
    <CreateTodoButton
        setOpenModal={setOpenModal}
    />
    </React.Fragment>
)
}

export default App;