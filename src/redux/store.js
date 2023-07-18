import { configureStore } from "@reduxjs/toolkit";


import User from "./slices/UserSlice";
import Recommendation from "./slices/RecommendationSlices";
import HandleAdd from "./slices/HandleAdd";

export default configureStore({
    reducer: {
        User: User,
        Recommendation: Recommendation,
        HandleAdd: HandleAdd
    }
})
