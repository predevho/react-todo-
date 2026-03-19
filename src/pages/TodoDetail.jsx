import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TodoDetail() {
    const { id } = useParams()

    const [todo, setTodos] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((res) => setTodos(res))
    }, [])

    return (
        <ul>
            <li>{todo.id}</li>
            <li>{todo.todo}</li>
            <li>{todo.completed ? '✅' : '❌'}</li>
        </ul>
    )
}

export default TodoDetail
