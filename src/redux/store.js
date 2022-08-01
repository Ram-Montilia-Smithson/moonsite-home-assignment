import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./clothingReducer";
import currentSetReducer from "./currentSetReducer"
import savesSetsReducer from "./savesSetsReducer";

export default configureStore({
    reducer: {
        currentSet: currentSetReducer,
        savedSets: savesSetsReducer,
        clothing: clothingReducer
        // clothesSupply: clothesSupplyReducer,
        // savedSets: savedSetsReducer,
    },
});