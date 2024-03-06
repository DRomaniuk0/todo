import React, {useCallback, useMemo, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/useApp.hooks'
import {addTodo, toggleTodo, setFilter, removeTodo} from './todosSlice'
import {FilterType} from "./todos.types"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import {Typography} from "@mui/material"
import FilterButton from "../../components/filter-button/FilterButton"
import {
  FiltersStatsContainer,
  ListHeadWrapper,
  TodoListItem,
  TodoListWrapper
} from "./styled"
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import {NoTaskMessage} from "../../components/NoTaskMessage"

export const TodoList: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const {todos, filter} = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  const handleAddTodo = useCallback(() => {
    if (input.trim().length > 0) {
      dispatch(addTodo(input.trim()))
      setInput('')
    }
  }, [dispatch, input])

  const visibleTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'completed') return todo.completed
      if (filter === 'current') return !todo.completed
      return true
    })
  }, [todos, filter])

  const handleFilterChange = useCallback((filter: FilterType) => {
    dispatch(setFilter(filter))
  }, [dispatch])

  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.completed).length
  }, [todos])

  const uncompletedCount = useMemo(() => {
    return todos.length - completedCount
  }, [todos, completedCount])

  return (
    <TodoListWrapper>
      <ListHeadWrapper>
        <TextField
          label="What needs to be done?"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
          sx={{width: '200px'}}
          disabled={!input.trim()}
        >
                    Add Todo
        </Button>
      </ListHeadWrapper>
      <FiltersStatsContainer>
        <Typography variant="subtitle1" color="textSecondary">
                    Filter by:
        </Typography>
        <FilterButton filter='all' currentFilter={filter} setFilter={handleFilterChange}>
                    All
        </FilterButton>
        <FilterButton filter='completed' currentFilter={filter} setFilter={handleFilterChange}>
                    Completed
        </FilterButton>
        <FilterButton filter='current' currentFilter={filter} setFilter={handleFilterChange}>
                    Current
        </FilterButton>
      </FiltersStatsContainer>
      <FiltersStatsContainer>
        <Typography variant="subtitle1" color="green">
                    Completed: {completedCount}
        </Typography>
        <Typography variant="subtitle1" color="red">
                    Uncompleted: {uncompletedCount}
        </Typography>
      </FiltersStatsContainer>
      <List>
        <Typography variant="h6" color="textSecondary" sx={{margin: '16px 16px 16px 0'}}>
                    Tasks:
        </Typography>
        {visibleTodos.length > 0 ? 
          visibleTodos.map((todo) =>
            <TodoListItem
              key={todo.id}
              onClick={() => dispatch(toggleTodo(todo.id))}
              sx={{textDecoration: todo.completed ? 'line-through' : 'none'}}
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  color="error"
                >
                  <DeleteForeverIcon/>
                </IconButton>
              }
            >
              <ListItemText primary={todo.text} sx={{flexGrow: 1}}/>
            </TodoListItem>
          )
          :
          <NoTaskMessage filter={filter}/>
        }
      </List>
    </TodoListWrapper>
  )
}