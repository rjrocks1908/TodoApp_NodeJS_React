import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const api_url = process.env.REACT_APP_API_URL
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try{
      const response = await fetch(`${api_url}/todosroutes/gettodos/`)
      const data = await response.json()
      // console.log(data)
      setTodos(data.todos)
    }catch(err){
      console.error(err.message)
    }
  }

  const deleteTodo = async (id) => {
    try{
      const deleteTodo = await fetch(`${api_url}/todosroutes/deletetodo/${id}`, {
        method: 'DELETE'
      })
      fetchTodos()
      // setTodos(todos.filter(todo => todo.todo_id !== id))
    }catch(err){
      console.error(err.message)
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      {
        todos.map(todo => {
          return(
            <div key={todo._id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p>
                {
                  todo.completed ? 'Completed' : 'Not Completed'
                }
              </p>
              <button
                onClick={() => deleteTodo(todo._id)}
              >Delete</button>
              <br/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
