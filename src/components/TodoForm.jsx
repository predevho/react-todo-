export default function TodoForm(handleOnSubmit) {
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" />
            <button>추가</button>
        </form>
    )
}
