
import './App.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'



function App() { 

  // to delete todo list
  const handleDelete = (id) => {
    console.log(id);
    setToDos(toDos.filter((toDo) => 
      toDo.id !== id
      // console.log(toDo);
    ))
  
  }

  const [toDos, setToDos] = useState([])       //list of toDos & stored as array in an array
  const [toDo, setToDo] = useState('')        // each toDo stored as a string in an array

  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Make your day Better 🌞📅</h2>
      </div>
      <div className="input">


        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖍️ Add task..." required/>
        <i onClick={() => setToDos([...toDos, { id: uuidv4(), title: toDo, completed: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input onClick={(e) => {

                  setToDos(toDos.filter(toDosObj => {
                    if (toDosObj.id === obj.id) {
                      toDosObj.completed = e.target.checked
                    }
                    return toDosObj
                  }))
                }} value={obj.completed} type="checkbox" name="" id="" />
                <p className={obj.completed?'completed':''}>{obj.title}</p>
              </div>
              <div className='updation'>
              
              {/* <div className="right">
                <i className="fas fa-edit"></i>
              </div> */}
              <div className="rightEnd">
                <i onClick={() => handleDelete(obj.id)} className="fas fa-times"></i>
              </div>
              </div>
            </div>
          )
        })}

        {/* {toDos.map((obj)=>{
          if (obj.completed) {
              
            return(<h2>✔️ : {obj.title}</h2>)
            
          }
          return null
        })} */}


      </div>
    </div>
  );
}

export default App;
