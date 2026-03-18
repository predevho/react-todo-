import { useRef, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: '할일1', completed: true },
        { id: 2, todo: '할일2', completed: false },
        { id: 3, todo: '할일3', completed: false },
    ])
    let lastId = useRef(4)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.todo.value.length === 0) {
            alert('할 일을 입력해주세요')
            return
        }

        setTodos([...todos, { id: lastId.current, todo: form.todo.value, completed: false }])
        lastId.current++
    }
    const deleteTodo = (selectedId) => {
        const nextState = todos.filter((todo) => todo.id !== selectedId)
        setTodos(nextState)
    }

    const toggleTodo = (selectedId) => {
        const nextState = todos.map((todo) => (todo.id === selectedId ? { ...todo, completed: !todo.completed } : todo))
        setTodos(nextState)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>추가</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {JSON.stringify(todo.completed)}
                        <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
                        <span>
                            /{todo.id}/{todo.todo}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
