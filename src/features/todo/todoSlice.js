import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:JSON.parse(localStorage.getItem('todos'))
}

const addToLocalStorage = (todos)=>{
    const jsonTodo = JSON.stringify(todos);
    localStorage.removeItem('todos');
    localStorage.setItem('todos',jsonTodo)
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                todo:action.payload,
                completed:false
            }

            if(state.todos)
                state.todos.push(todo)
            else{
                state.todos=[]
                state.todos.push(todo)
            }
            
            addToLocalStorage(state.todos);
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            addToLocalStorage(state.todos);
        },
        editTodo: (state, action)=>{
            state.todos = state.todos.map((todo)=>todo.id!==action.payload.id? todo:{...todo , todo: action.payload.todo})
            addToLocalStorage(state.todos);
        },
        toogleCompleted: (state, action)=>{
            state.todos = state.todos.map((todo)=>todo.id!==action.payload? todo : {...todo , completed: !todo.completed})
            addToLocalStorage(state.todos);
        }
    }
})

export const {addTodo, removeTodo, editTodo , toogleCompleted} = todoSlice.actions
export default todoSlice.reducer