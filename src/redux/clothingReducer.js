import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shirts: [],
    pants: [],
    shoes: []
};

export const clothingSlice = createSlice({
    name: 'clothing',
    initialState,
    reducers: {
        pickingShirt: (state, action) => {
            const newState = state.shirts.filter((element) => {
                return element.id !== action.payload.id;
            });
            state.shirts = newState
        },
        returningShirt: (state, action) => {
            state.shirts.push(action.payload)
        },
        pickingPants: (state, action) => {
            const newState = state.pants.filter((element) => {
                return element.id !== action.payload.id;
            });
            state.pants = newState
        },
        returningPants: (state, action) => {
            state.pants.push(action.payload)
        },
        pickingShoes: (state, action) => {
            const newState = state.shoes.filter((element) => {
                return element.id !== action.payload.id;
            });
            state.shoes = newState
        },
        returningShoes: (state, action) => {
            state.shoes.push(action.payload)
        },
        initializingClothes: (state, action) => {
            const shirts = action.payload.filter((element) => {
                return element.type === 'shirt';
            });
            const pants = action.payload.filter((element) => {
                return element.type === 'pants';
            });
            const shoes = action.payload.filter((element) => {
                return element.type === 'shoes';
            });
            state.shirts = shirts
            state.pants = pants
            state.shoes = shoes
        }
    },
})

export const {
    pickingShirt,
    returningShirt,
    pickingPants,
    returningPants,
    pickingShoes,
    returningShoes,
    initializingClothes
} = clothingSlice.actions

export const selectShirts = (state) => state.clothing.shirts;
export const selectPants = (state) => state.clothing.pants;
export const selectShoes = (state) => state.clothing.shoes;

export default clothingSlice.reducer