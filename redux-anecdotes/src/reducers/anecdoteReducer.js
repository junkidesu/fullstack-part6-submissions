import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const changedAnecdote = action.payload
      const id = changedAnecdote.id
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    appendAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnAnecdote = (anecdote) => {
  const id = anecdote.id
  return async dispatch => {
    const toChange = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const changedAnecdote = await anecdoteServices.update(id, toChange)

    dispatch(voteAnecdote(changedAnecdote))
  }
}

export default anecdoteSlice.reducer