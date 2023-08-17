import React, { useState } from 'react'
import Todos from './Todos';

const AddTodo = ({addtodo, todos, onDelete}) => {
 
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) => {
       e.preventDefault();
       if(!title || !desc){
        alert("Title and descritpion cannot be blank");
       }else{
       addtodo({title,desc});
       setTitle("");
       setDesc("");}
    }

  return (
    <>
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} className="form-control" placeholder='Please enter the title' id="title" aria-describedby="emailHelp" onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} className="form-control" placeholder='Please enter the descritption' id="desc" onChange={(e)=>{setDesc(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
    <Todos todos={todos} onDelete={onDelete}/>
    </>
  )
}

export default AddTodo