import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"
import anecdoteServices from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async event => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log(`add anecdote '${content}'`)

        const newAnecdote = await anecdoteServices.createNew(content)
        dispatch(createAnecdote(newAnecdote))

        dispatch(setNotification(`you added '${content}'`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <div>
            <h2>create new</h2>

            <form onSubmit={addAnecdote}>
                <div>
                    <input
                        name='anecdote'
                    />
                </div>
                <button type='submit'>
                    create
                </button>
            </form>
        </div>
    )
}

export default AnecdoteForm