// import React from "react";
// import './App.css';
// import Todos from "./components/Todos";

// function App() {

//   // fetch("http://localhost:8004/todos")
//   //   .then((r) => r.json())
//   //   .then((d) => {
//   //     console.log(d);
//   //   });

//   return (
//     <div className="App">
//       <Todos/>
      
//     </div>
//   );
// }

// export default App;


import React,{ useState } from 'react';
import './App.css';
import Todos from './components/Todos';


function App() {

  const handleDelete = (id) => {
    let updated = todoArr.filter((el) => el.id!==id)
    setTodoArr(updated);
  }

  const [todoArr, setTodoArr] = useState([]);

  return (
      <div className='App'>
        <Todos todoArr={todoArr} setTodoArr={setTodoArr} handleDelete={handleDelete} />
      </div>
  )
}

export default App;


