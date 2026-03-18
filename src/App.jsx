import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { todo: '할일1', completed: true },
        { todo: '할일2', completed: false },
        { todo: '할일3', completed: false },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.todo.value.length === 0) {
            alert('할 일을 입력해주세요')
            return
        }

        setTodos([{ todo: form.todo.value, completed: false }, ...todos])
    }
    const deleteTodo = (selectedIndex) => {
        const nextState = todos.filter((todo, index) => index !== selectedIndex)
        setTodos(nextState)
    }

    const toggleTodo = (selectedIndex) => {
        const nextState = todos.map((todo, index) =>
            index === selectedIndex ? { ...todo, completed: !todo.completed } : todo,
        )
        setTodos(nextState)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>추가</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {JSON.stringify(todo.completed)}
                        <input type="checkbox" onChange={() => toggleTodo(index)} checked={todo.completed} />
                        <span>{todo.todo}</span>
                        <button onClick={() => deleteTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
