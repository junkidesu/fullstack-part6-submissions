import { useSelector, useDispatch } from "react-redux"
import { voteAnAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote, handleClick }) => (
    <div>
        <div>
            {anecdote.content}
        </div>
        <div>
            has {anecdote.votes}
            <button onClick={handleClick}>
                vote
            </button>
        </div>
    </div>
)

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        const filteredAnecdotes = anecdotes.filter(a =>
            a.content.toLowerCase().includes(filter.toLowerCase()))
        return filteredAnecdotes.sort((a1, a2) => a2.votes - a1.votes)
    })

    const vote = (anecdote) => {
        const id = anecdote.id
        const content = anecdote.content
        console.log('vote', id, content)
        dispatch(voteAnAnecdote(anecdote))
        dispatch(setNotification(`you voted '${content}'`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <div>
            {anecdotes
                .map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => vote(anecdote)} 
                />)}
        </div>
    )
}

export default AnecdoteList