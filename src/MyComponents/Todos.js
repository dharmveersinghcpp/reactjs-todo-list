import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let todosStyle = {
        minHeight:'70vh'
    };
    return (
        <div className="container my-3" style={todosStyle}>
            <hr/>
            <h3>Todos List</h3>
            <p className="text-center">{props.todos.length===0? "No Todo Availble":''}</p>
            {props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}
