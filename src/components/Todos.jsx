// import React, { useEffect, useState } from 'react';

// const Todos = () => {

//     const [newTodo, setNewTodo] = useState("");
//     const [todoArr, setTodoArr] = useState([]);

    

//     useEffect(() => {
//         fetch("http://localhost:8004/todos")
//         .then((r) => r.json())
//         .then((d) => {
//         // console.log(d);
//           setTodoArr(d);
//         });
//     }, []);

//     const saveInfo = () => {
//         fetch("http://localhost:8004/todos", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//             },
//             body: JSON.stringify({
//                 value: newTodo,
//                 isCompleted: false,
//             }),
//         })
//           .then((r) => r.json())
//           .then((d) => {
//               setTodoArr([...todoArr, d]);
//               setNewTodo("");
//           });
        
//     };

//   return (
//     <div>Todos
//         <div>
//             <div>
//                 <input type="text" onChange={({target}) => setNewTodo(target.value)}/>
//                 <button onClick={saveInfo}>+</button>
//             </div>
//             {todoArr.map((el) => (
//             <div key={el.id}>{el.value}</div>
//         ))}
//         </div>
//     </div>
//   )
// };

// export default Todos;



import React, { useState, useEffect } from 'react'

const Todos = ({todoArr, setTodoArr, handleDelete}) => {

    
    const [newTodo, setNewTodo] = useState("");

    
    useEffect(() => {
        
        fetch("http://localhost:7004/todos")
        .then((res) => res.json())
        .then((data) => {
            // console.log(d);
            
            setTodoArr(data);
            // setNewTodo("");
        })
        
    }, [])

    const setInfo = () => {
        fetch("http://localhost:7004/todos", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                value: newTodo,
                isCompleted: false,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            setTodoArr([...todoArr, data]);
            setNewTodo("");
        });
    }

  
    
    
  return (
    <div>Todos
        <div>
            <div>
                <input type="text" onChange={({target}) => setNewTodo(target.value)}/>
                <button onClick={setInfo}>+</button>
            </div>
           { todoArr.map((el) => (
               <div key={el.id} className="flex-div">
                    <div key={el.id}>{el.value}</div>
                    <button className='dlt-btn' >dlt</button>
               </div>
           ))}
            
        </div>
    </div>
  )
};

export default Todos;

