import React from 'react';

function TodoHeader({children, loading}){
    return (
        <header>
            {
                React.Children.toArray(children).map(
                    children => React.cloneElement(children, {loading}))
            }
        </header>
    )
}

export {TodoHeader}