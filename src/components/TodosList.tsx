import React, { memo, useMemo } from 'react'
import { Todo } from '../@types'

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    userId: number
    setEditTodoId: React.Dispatch<React.SetStateAction<number | null>>
}

function TodosList({todos, setTodos, userId, setEditTodoId}: Props) {
  return (
    <div>
        <ul>
            {
                todos.filter(todo => todo.userId === userId).map(todo => {
                    return <li key={todo.id}>{todo.title} <button onClick={e => {
                        setEditTodoId(todo.id)
                    }}>Edit</button></li>
                })
            }
        </ul>
    </div>
  )
}
const memoTodosList = memo(TodosList)
export default memoTodosList