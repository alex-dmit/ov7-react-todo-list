import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Todo, User } from './@types'
import './App.css'
import TodoEdit from './components/TodoEdit'
import TodosList from './components/TodosList'
import UsersSelector from './components/UsersSelector'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [todos, setTodos] = useState<Todo[]>([])
  const [userId, setUserId] = useState<number>(1)
  const [editTodoId, setEditTodoId] = useState<number | null>(null)
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const todosDb = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
        setUsers(data)
        setTodos(todosDb)
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message)
        }
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      {
        editTodoId === null
          ? <>
            <UsersSelector
              users={users}
              userId={userId}
              setUserId={setUserId}
            />
            <TodosList
              todos={todos}
              setTodos={setTodos}
              userId={userId}
              setEditTodoId={setEditTodoId}
            />
          </>
          : <TodoEdit {...{ todos, setTodos, editTodoId, setEditTodoId }} />
      }
    </div>
  )
}

export default App
