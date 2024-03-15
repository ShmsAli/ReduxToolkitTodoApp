import { Provider } from "react-redux"
import { store } from "./app/store"
import TodosListing from "./Components/TodosListing"
import TodoForm from "./Components/TodoForm"
function App() {
  
  return (
    <Provider store={store}>
      {/* <h1>Hi I am from App</h1> */}
      <div className="py-10 bg-slate-800 min-h-screen flex flex-col gap-4 w-full items-center justify-start">
      <h1 className="px-10 text-xl sm:text-3xl text-white font-semibold">Todo App Using Redux Toolkit and Local Storage</h1>
      <TodoForm/>
      <TodosListing/>
      </div>
      
    </Provider>
  )
}

export default App