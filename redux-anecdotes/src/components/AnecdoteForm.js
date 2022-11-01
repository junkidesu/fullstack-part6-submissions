import { connect } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
    const addAnecdote = async event => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log(`add anecdote '${content}'`)

        props.createAnecdote(content)
        event.target.anecdote.value = ''

        props.setNotification(`add anecdote '${content}'`, 5)
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

export default connect(
    null,
    { createAnecdote, setNotification }
)(AnecdoteForm)