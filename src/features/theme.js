import { createSlice } from '@reduxjs/toolkit'

 /**
 * create actions & reducer logic regarding dark/light mode toggle
 * @function themeSlice
 * @param {object} state
 * @param {string} action
 * @returns {object} new state
 */
const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    // reducers allows to define the actions and the reducer
    reducers: {
        toggle: (state) => {
            return state === 'light' ? 'dark' : 'light'
        },
    },
})

// export each action & reducer
export const { toggle } = themeSlice.actions
export default themeSlice.reducer