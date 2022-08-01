import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shirts: [],
    pants: [],
    shoes: [],
    savedSets: [],
    currentSet: {},
    currentClothingType: ''
};

export const clothingSlice = createSlice({
    name: 'clothing',
    initialState,
    reducers: {
        pickingItem: (state, action) => {
            switch (action.payload.type) {
                case 'shirt':
                    const newShirts = state.shirts.filter((element) => {
                        return element.id !== action.payload.id;
                    });
                    state.shirts = newShirts
                    state.currentSet['shirt'] = action.payload
                    break;
                case 'pants':
                    const newPants = state.shirts.filter((element) => {
                        return element.id !== action.payload.id;
                    });
                    state.pants = newPants
                    state.currentSet['pants'] = action.payload
                    break;
                case 'shoes':
                    const newShoes = state.shirts.filter((element) => {
                        return element.id !== action.payload.id;
                    });
                    state.shoes = newShoes
                    state.currentSet['shoes'] = action.payload
                    break;
                default:
                    break;
            }
        },
        returningItem: (state, action) => {
            switch (action.payload.type) {
                case 'shirt':
                    state.shirts.push(action.payload)
                    state.currentSet = { ...state.currentSet, shirt: false }
                    break;
                case 'pants':
                    state.pants.push(action.payload)
                    state.currentSet = { ...state.currentSet, pants: false }
                    break;
                case 'shoes':
                    state.shoes.push(action.payload)
                    state.currentSet = { ...state.currentSet, shoes: false }
                    break;
                default:
                    break;
            }
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
        },
        addNewSet: (state, action) => {
            state.savedSets.push(action.payload)
        },
        removeSet: (state, action) => {
            const newState = state.savedSets.filter((element) => {
                return element.id !== action.payload.id;
            });
            state.savedSets = newState
        },
        changeCurrentClothingType: (state, action) => {
            state.currentClothingType = action.payload
        },
    },
})

export const {
    pickingItem, returningItem, initializingClothes, addNewSet, removeSet, changeCurrentClothingType
} = clothingSlice.actions

export const selectShirts = (state) => state.clothing.shirts;
export const selectPants = (state) => state.clothing.pants;
export const selectShoes = (state) => state.clothing.shoes;
export const selectSavedSets = (state) => state.clothing.savedSets;
export const selectCurrentSet = (state) => state.clothing.currentSet;
export const selectCurrentClothingType = (state) => state.clothing.currentClothingType;

export default clothingSlice.reducer