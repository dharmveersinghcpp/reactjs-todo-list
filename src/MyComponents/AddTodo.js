// import React from 'react'
import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be blank.');
        }
        else{
        addTodo(title,desc);
        setTitle('');
        setDesc('');
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <div className="row">
                <div className='col-sm-6'>
                    <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
                    </form>
                </div>
                <div className="col-sm-6">
                    <h4 className="text-center">Welcome in Todos</h4>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}
