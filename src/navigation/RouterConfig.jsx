import React from "react";
import { Routes, Route } from "react-router-dom";
import { CREATING_SETS, ROOT, SAVED_SETS, } from "navigation/Constants";
import { SavedSets, Home, CreatingSets } from "pages";

export const RouterConfig = () => {
    console.log();
    return (
        <div>
            <Routes>
                <Route exact path={ROOT} element={<Home />} />
                <Route exact path={CREATING_SETS} element={<CreatingSets />} />
                <Route exact path={SAVED_SETS} element={<SavedSets />} />
            </Routes>
        </div>
    );
};