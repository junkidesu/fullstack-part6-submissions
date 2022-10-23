import reducer from './anecdoteReducer'
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
    test('returns new state with action VOTE', () => {
        const state = initialState
        const action = {
            type: 'VOTE',
            data: {
                id: state[0].id
            }
        }

        deepFreeze(state)

        const newState = reducer(state, action)

        expect(newState[0]).toEqual({
            content: 'Some software anecdote',
            id: 10,
            votes: 1
        })
    })
})