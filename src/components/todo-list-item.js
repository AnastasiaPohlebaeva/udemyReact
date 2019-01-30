import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ ...props }) => {
    const style = {
        color: props.important ? 'tomato' : 'black'
    };
    return (
        <span className="todo-list-item"
              style={style}>
            { props.label }
        </span>
    )
};

export default TodoListItem;