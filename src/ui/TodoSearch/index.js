import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue,loading}) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <input
            className='TodoSearch'
            placeholder="search a task..."
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        >
        </input>
    )
}

export {TodoSearch}