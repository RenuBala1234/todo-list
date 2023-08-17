import { useState, useEffect } from 'react';
import './App.css';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/Header';
// import Todos from './MyComponent/Todos';
import AddTodo from './MyComponent/AddTodo';
import About from './MyComponent/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }))

    /* localStorage.setItem("todos",JSON.stringify(todos)); */
  }

  const addtodo = ({title,desc}) => {
    console.log("I am adding this todo", title,desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }

  const [todos,setTodos] = useState(initTodo)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
  
    <Router>
 <Header title="My todo list" searchBar={false}/>
 <Routes>
  
  <Route exact path='/' element={<AddTodo addtodo={addtodo} todos={todos} onDelete={onDelete}/>} >

  </Route>
  <Route exact path='/about' element={<About/>}>
    {/* <About /> */}
  </Route>
 </Routes>
 <Footer />
 </Router>
 
  );
}

export default App;
