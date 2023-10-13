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
    try {
      const response = await fetch(`${api_url}/todosroutes/gettodos/`)
      const data = await response.json()
      // console.log(data)
      setTodos(data.todos)
    } catch (err) {
      console.error(err.message)
    }
  }

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`${api_url}/todosroutes/deletetodo/${id}`, {
        method: 'DELETE'
      })
      const data = await deleteTodo.json()
      alert(data.message)
      fetchTodos()
    } catch (err) {
      console.error(err.message)
    }
  }

  const [newTodo, setNewTodo] = useState({
    title: "",
    description: ""
  })

  const createTodo = async (e) => {
    if (newTodo.title === "") {
      alert("Title is Required")
    }

    e.preventDefault()
    try {
      const response = await fetch(`${api_url}/todosroutes/createtodos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      const data = await response.json()
      alert(data.message)
      fetchTodos()
    } catch (error) {
      console.error(error.message)
    }

  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      {
        todos.map(todo => {
          return (
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
              <br />
            </div>
          )
        })
      }

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Create Todo</h1>
      <form>
        <input type="text" placeholder="Title" 
          onChange={(e) => setNewTodo({
            ...newTodo,
            title: e.target.value
          })} 
        />
        <br />
        <input type="text" placeholder="Description"
          onChange={(e) => setNewTodo({
            ...newTodo,
            description: e.target.value
          })}
        />
        <br />
        <button onClick={createTodo}>Create</button>
      </form>

    </div>
  );
}

export default App;
