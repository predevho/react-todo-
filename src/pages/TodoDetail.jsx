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
            <li>{todo.id} 번 할일</li>
            <li>할일: {todo.todo}</li>
            <li>할일여부: {todo.completed ? '✅' : '❌'}</li>
        </ul>
    )
}

export default TodoDetail
