import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "navigation";
import { CREATING_SETS, ROOT, SAVED_SETS, } from "navigation/Constants";
import { SavedSets, Home, CreatingSets } from "pages";

export const RouterConfig = () => {
    return (
        <div style={{ margin: '15px', marginTop: '85px' }}>
            <Routes>
                <Route exact path={ROOT} element={<Home />} />
                <Route exact path={CREATING_SETS} element={<CreatingSets />} />
                <Route exact path={SAVED_SETS} element={<SavedSets />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};