import { configureStore } from "@reduxjs/toolkit";
import currentSetReducer from "./currentSetReducer"

export default configureStore({
    reducer: {
        currentSet: currentSetReducer,
        // clothesSupply: clothesSupplyReducer,
        // savedSets: savedSetsReducer,
    },
});