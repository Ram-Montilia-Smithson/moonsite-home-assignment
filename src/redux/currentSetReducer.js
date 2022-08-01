import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shirt: {},
    pants: {},
    shoes: {},
    currentClothingType: ''
};

export const currentSetSlice = createSlice({
    name: 'currentSet',
    initialState,
    reducers: {
        changeShirt: (state, action) => {
            state.shirt = action.payload
        },
        changePants: (state, action) => {
            state.pants = action.payload
        },
        changeShoes: (state, action) => {
            state.shoes = action.payload
        },
        changeCurrentClothingType: (state, action) => {
            state.currentClothingType = action.payload
        },
    },
})

export const { changeShirt, changePants, changeShoes, changeCurrentClothingType } = currentSetSlice.actions

export const selectShirt = (state) => state.currentSet.shirt;
export const selectPants = (state) => state.currentSet.pants;
export const selectShoes = (state) => state.currentSet.shoes;
export const selectCurrentClothingType = (state) => state.currentSet.currentClothingType;

export default currentSetSlice.reducer