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
            if (!state.currentSet['shirt'] && !state.currentSet['pants'] && !state.currentSet['shoes']) {
                state.currentSet['firstTime'] = Date.now()
            }
            switch (action.payload.type) {
                case 'shirt':
                    const newShirts = state.shirts.filter((element) => {
                        return element.id !== action.payload.id;
                    });
                    state.shirts = newShirts
                    state.currentSet['shirt'] = action.payload
                    break;
                case 'pants':
                    const newPants = state.pants.filter((element) => {
                        return element.id !== action.payload.id;
                    });
                    state.pants = newPants
                    state.currentSet['pants'] = action.payload
                    break;
                case 'shoes':
                    const newShoes = state.shoes.filter((element) => {
                        return element.id !== action.payload.id;
                    });
                    state.shoes = newShoes
                    state.currentSet['shoes'] = action.payload
                    break;
                default:
                    break;
            }
            window.localStorage.setItem('state', JSON.stringify(state))
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
            window.localStorage.setItem('state', JSON.stringify(state))
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
            window.localStorage.setItem('state', JSON.stringify(state))
        },
        addNewSet: (state, action) => {
            state.currentSet['lastTime'] = Date.now()
            state.savedSets.push(state.currentSet)
            state.currentSet = {}
            state.currentClothingType = ''
            window.localStorage.setItem('state', JSON.stringify(state))
        },
        removeSet: (state, action) => {
            state.pants.push(action.payload.pants)
            state.shoes.push(action.payload.shoes)
            state.shirts.push(action.payload.shirt)
            const newSavedSets = state.savedSets.filter((element) => {
                return element.firstTime !== action.payload.firstTime;
            });
            state.savedSets = newSavedSets
            window.localStorage.setItem('state', JSON.stringify(state))
        },
        changeCurrentClothingType: (state, action) => {
            state.currentClothingType = action.payload
            window.localStorage.setItem('state', JSON.stringify(state))
        },
        setState: (state, action) => {
            state.shirts = action.payload.shirts
            state.pants = action.payload.pants
            state.shoes = action.payload.shoes
            state.savedSets = action.payload.savedSets
            state.currentClothingType = action.payload.currentClothingType
            state.currentSet = action.payload.currentSet
        }
    },
})

export const {
    pickingItem, returningItem, initializingClothes, addNewSet, removeSet, changeCurrentClothingType, setState
} = clothingSlice.actions

export const selectShirts = (state) => state.clothing.shirts;
export const selectPants = (state) => state.clothing.pants;
export const selectShoes = (state) => state.clothing.shoes;
export const selectSavedSets = (state) => state.clothing.savedSets;
export const selectCurrentSet = (state) => state.clothing.currentSet;
export const selectCurrentClothingType = (state) => state.clothing.currentClothingType;

export default clothingSlice.reducer