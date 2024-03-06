import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FilterType, TodosState} from "./todos.types"

const savedTodos = localStorage.getItem('todos')

const initialState: TodosState = {
  todos: savedTodos ? JSON.parse(savedTodos) : [],
  filter: 'all',
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const nextId = state.todos.length + 1
      const text = action.payload.trim()
      if (text && text.length <= 50) {
        state.todos.push({id: nextId, text, completed: false})
      }
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    //TODO: Implement an edit functionality
    editTodo: (state, action: PayloadAction<{ id: number, text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
})

export const {addTodo, toggleTodo, setFilter, removeTodo, editTodo} = todosSlice.actions

export default todosSlice.reducer
