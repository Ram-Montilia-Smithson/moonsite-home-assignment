import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./clothingReducer";

export default configureStore({
    reducer: {
        clothing: clothingReducer
    },
});