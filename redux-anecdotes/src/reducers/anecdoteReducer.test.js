import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

const initialState = [
    {
        content: 'Some software anecdote',
        id: 10,
        votes: 0
    },
    {
        content: 'Another software anecdote',
        id: 11,
        votes: 0
    }
]

describe('anecdoteReducer', () => {
    test('returns new state with action anecdotes/voteAnecdote', () => {
        const state = initialState
        const action = {
            type: 'anecdotes/voteAnecdote',
            payload: state[0].id
        }

        deepFreeze(state)

        const newState = anecdoteReducer(state, action)

        expect(newState[0]).toEqual({
            content: 'Some software anecdote',
            id: 10,
            votes: 1
        })
    })

    test('returns new state with action anecdotes/createAnecdote', () => {
        const state = initialState
        const action = {
            type: 'anecdotes/createAnecdote',
            payload: {
                content: 'New software anecdote',
                id: 12,
                votes: 0
            }
        }

        deepFreeze(state)

        const newState = anecdoteReducer(state, action)

        expect(newState).toHaveLength(state.length + 1)
        expect(newState).toContainEqual({
            content: 'New software anecdote',
            id: 12,
            votes: 0
        })
    })
})