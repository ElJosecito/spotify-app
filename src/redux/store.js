import { configureStore } from "@reduxjs/toolkit";

//slices
import User from "./slices/UserSlice";
import Recommendation from "./slices/RecommendationSlices";
import HandleAdd from "./slices/HandleAdd";
import GetTrackList from "./slices/GetTrackList";

export default configureStore({
    reducer: {
        User: User,
        Recommendation: Recommendation,
        HandleAdd: HandleAdd,
        TrackList: GetTrackList
    }
})
