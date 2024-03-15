import { useSelector } from "react-redux"
import Todo from "./Todo"

export default function TodosListing() {
    const todos = useSelector(state=>state.todos)
  return (
    <>
      <div className="w-full lg:px-72 md:px-48 px-10">
        <ul className="flex gap-2 flex-col">
        {todos && todos.map((todo) => (
          <li
            key={todo.id}
          >
            <div className="flex items-center justify-between  px-4 py-2 rounded-md border border-slate-300 bg-slate-700 text-lg">
              <Todo todo={todo}/>  
            </div>
          </li>
        ))}
        </ul>
      </div>
    </>
  )
}
