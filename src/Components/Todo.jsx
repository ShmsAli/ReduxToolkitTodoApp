import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTodo, removeTodo, toogleCompleted } from "../features/todo/todoSlice"

export default function Todo({ todo }) {
    const [editable, setEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const dispatch = useDispatch()
    const handleEdit = (e) => {
        e.preventDefault()
        if (!editable) {
            setEditable((prev) => (!prev))
        }
        else {
            dispatch(editTodo({ id: todo.id, todo: todoMsg }))
            setEditable((prev) => (!prev))
        }
    }
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeTodo(todo.id))
    }

    const handleToogleCompleted = () => {
        dispatch(toogleCompleted(todo.id))
        // console.log(Date.now()+'---'+todo.completed)
    }

    return (
        <>
            <div className="w-full mr-3">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToogleCompleted}
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                    <input
                        className={`focus:outline-none bg-slate-700 text-white w-full
                        ${todo.completed?'line-through':''}`}
                        value={todoMsg}
                        type="text"
                        onChange={(e) => setTodoMsg(e.target.value)}
                        readOnly={!editable}
                    />
                </div>
            </div>
            <div className="flex gap-3">
                <button
                    className="bg-slate-400 p-1 rounded enabled:hover:bg-slate-500 disabled:opacity-30"
                    onClick={handleEdit}
                    disabled={todo.completed}>
                    {!editable ? '✏' : '📁'}
                </button>
                <button
                    className="bg-slate-400 p-1 rounded enabled:hover:bg-slate-500 disabled:opacity-30"
                    disabled={editable}
                    onClick={handleDelete}
                >
                    ❌
                </button>
            </div>

        </>
    )
}
