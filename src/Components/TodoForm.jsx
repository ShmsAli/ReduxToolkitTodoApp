import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice'
import { useState } from "react"
export default function TodoForm() {
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todoMsg === '')
            return
        dispatch(addTodo(todoMsg))
        setTodoMsg('')
    }
    return (
        <div className="w-full lg:px-72 md:px-48 px-10">
            <form className="flex justify-center items-center gap-3" onSubmit={handleSubmit}>
                <input className="block w-full px-1 py-2 ps-3 text-white border border-gray-300 rounded-lg bg-slate-700 text-lg focus:outline-none focus:ring-1 focus:ring-violet-300" type="text" value={todoMsg} placeholder="Write todo..." onChange={(e) => setTodoMsg(e.target.value)}required />
                <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md px-5 py-2 text-center border border-slate-300 text-lg" type='submit'>Save</button>
            </form>
        </div>
    )
}
