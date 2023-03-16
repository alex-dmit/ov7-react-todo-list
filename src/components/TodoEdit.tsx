import React, { useState } from 'react'
import { Todo } from '../@types'

type Props = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    editTodoId: number | null
    setEditTodoId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function TodoEdit({ todos, setTodos, editTodoId, setEditTodoId }: Props) {
    if (editTodoId === null) return null
    const [title, setTitle] = useState(todos.find(todo => todo.id === editTodoId)?.title ?? '')
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTodos(prevTodos => {
            return prevTodos.map(todo => todo.id === editTodoId 
                ? {...todo, title}
                : todo)
        })
        setEditTodoId(null)
    }

    return (
        <>
            <h2>TodoEdit</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title-id'>Title:</label>
                <input 
                    type='text' 
                    id='title-id'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button type="submit">Edit</button>
                <input type="checkbox" />
            </form>
        </>
    )
}