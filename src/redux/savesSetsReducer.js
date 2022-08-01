import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    savedSets: []
};

export const savedSetSlice = createSlice({
    name: 'savedSets',
    initialState,
    reducers: {
        addNewSet: (state, action) => {
            state.savedSets.push(action.payload)
        },
        removeSet: (state, action) => {
            const newState = state.savedSets.filter((element) => {
                return element.id !== action.payload.id;
            });
            state.savedSets = newState
        }
    },
})

export const { addNewSet, removeSet } = savedSetSlice.actions

export const selectSavedSets = (state) => state.savedSets.savedSets;

export default savedSetSlice.reducer