import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['할일1', '할일2', '할일3'])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target.todo.value
        setTodos([form.todo, value, ...todos])
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" />
                <button>추가</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}

export default App
