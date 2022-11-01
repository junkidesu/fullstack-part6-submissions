import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        setMessage(state, action) {
            return action.payload
        },
        removeMessage(state, action) {
            return null
        }
    }
})

export const { setMessage, removeMessage } = notificationSlice.actions

let timeoutID = null

export const setNotification = (message, duration) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        dispatch(setMessage(message))

        timeoutID = setTimeout(() => dispatch(removeMessage()), duration * 1000)
    }
}

export default notificationSlice.reducer