// import React, { useEffect, useState } from 'react'

// const Home = () => {

//   const [todo, setTodo] = useState("");
//   const token = localStorage.getItem("token");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const getTodos = async () => {
//       const response = await fetch("http://localhost:3001/api/read-todos",{
//         method: "GET",
//         headers: {
//           authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       setTodos(data.todos);
//     };

//     getTodos();
//   }, [todo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("http://localhost:3001/api/create-todo", {
//         method: "POST",
//         headers: {
//           authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ todo }),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//       } else {
//         console.error("Error creating todo:", response.status);
//       }
//     } catch (error) {
//       console.error("Error creating todo:", error);
//     }
  
//     setTodo("");
//   };

//   const handleEdit = async (todoId) => {
//     const updatedTodo = prompt("Update your todo");

//     const response = await fetch(`http://localhost:3001/api/update-todo/${todoId}`, {
//       method: "PATCH",
//       headers: {
//         authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({updatedTodo}),
//     });

//     const data = await response.json();
//     alert(data.message);
//   }

//   const handleDelete = async (todoId) => {
//     const response = await fetch(`http://localhost:3001/api/delete-todo/${todoId}`, {
//       method: "DELETE",
//       headers: {
//         authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     alert(data.message);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };
  
//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>My Todo App</h2>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="text"
//             placeholder="Enter a todo"
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Submit</button>
//         </form>
//         <div style={styles.todoList}>
//           {todos.map((todo) => {
//             return (
//               <div key={todo._id} style={styles.todoItem}>
//                 <span>{todo.todo}</span>
//                 <div>
//                   <button onClick={() => handleEdit(todo._id)} style={styles.smallButton}>Edit</button>
//                   <button onClick={() => handleDelete(todo._id)} style={{ ...styles.smallButton, background: '#dc2626' }}>Delete</button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//         <button onClick={handleLogout} style={{ ...styles.button, background: '#6b7280', marginTop: '20px' }}>
//           Logout
//         </button>
//       </div>
//     </section>
//   );
// }  

// const styles = {
//   section: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     background: '#f3f4f6',
//   },
//   container: {
//     width: '100%',
//     maxWidth: '500px',
//     background: '#fff',
//     padding: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 0 15px rgba(0,0,0,0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#4f46e5',
//   },
//   form: {
//     display: 'flex',
//     gap: '10px',
//     marginBottom: '20px',
//   },
//   input: {
//     flex: 1,
//     padding: '10px',
//     fontSize: '14px',
//     border: '1px solid #ccc',
//     borderRadius: '6px',
//     color: '#000',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '14px',
//     background: '#4f46e5',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//   },
//   todoList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   todoItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     background: '#f9fafb',
//     padding: '10px 15px',
//     borderRadius: '6px',
//     border: '1px solid #e5e7eb',
//     color: '#111827', 
//   },
  
//   smallButton: {
//     marginLeft: '8px',
//     padding: '6px 12px',
//     fontSize: '12px',
//     background: '#10b981',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default Home;

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('http://localhost:3001/api/read-todos', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setTodos(data.todos);
    };

    getTodos();
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/create-todo', {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todo }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        console.error('Error creating todo:', response.status);
      }
    } catch (error) {
      console.error('Error creating todo:', error);
    }

    setTodo('');
  };

  const handleEdit = async (todoId) => {
    const updatedTodo = prompt('Update your todo');

    const response = await fetch(`http://localhost:3001/api/update-todo/${todoId}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedTodo }),
    });

    const data = await response.json();
    alert(data.message);
  };

  const handleDelete = async (todoId) => {
    const response = await fetch(`http://localhost:3001/api/delete-todo/${todoId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    alert(data.message);
  };

  const handleToggleComplete = async (todoId, currentStatus) => {
    try {
      const response = await fetch(`http://localhost:3001/api/toggle-todo/${todoId}`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !currentStatus }),
      });
  
      const data = await response.json();
      alert(data.message);
  
      // Trigger re-fetch by modifying state
      setTodo((prev) => prev + ' ');
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Todo App</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
  
        <div style={styles.todoList}>
          <h3>Active Todos</h3>
          {todos.filter((todo) => !todo.completed).map((todo) => (
            <div key={todo._id} style={styles.todoItem}>
              <span>{todo.todo}</span>
              <div>
                <button
                  onClick={() => handleToggleComplete(todo._id, todo.completed)}
                  style={{ ...styles.smallButton, background: '#10b981' }}
                >
                  Mark Completed
                </button>
                <button
                  onClick={() => handleEdit(todo._id)}
                  style={styles.smallButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo._id)}
                  style={{ ...styles.smallButton, background: '#dc2626' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
  
          <h3 style={{ marginTop: '20px' }}>Completed Todos</h3>
          {todos.filter((todo) => todo.completed).map((todo) => (
            <div
              key={todo._id}
              style={{ ...styles.todoItem, background: '#d1fae5', textDecoration: 'line-through' }}
            >
              <span>{todo.todo}</span>
              <div>
                <button
                  onClick={() => handleToggleComplete(todo._id, todo.completed)}
                  style={{ ...styles.smallButton, background: '#f59e0b' }}
                >
                  Mark Incomplete
                </button>
                <button
                  onClick={() => handleDelete(todo._id)}
                  style={{ ...styles.smallButton, background: '#dc2626' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
  
        <button
          onClick={handleLogout}
          style={{ ...styles.button, background: '#6b7280', marginTop: '20px' }}
        >
          Logout
        </button>
      </div>
    </section>
  );
  
};

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f3f4f6',
  },
  container: {
    width: '100%',
    maxWidth: '500px',
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#4f46e5',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    color: '#000',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    background: '#4f46e5',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  todoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f9fafb',
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    color: '#111827',
  },
  smallButton: {
    marginLeft: '8px',
    padding: '6px 12px',
    fontSize: '12px',
    background: '#10b981',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
