import { configureStore } from "@reduxjs/toolkit";

//slices
import User from "./slices/UserSlice";
import Recommendation from "./slices/RecommendationSlices";
import HandleAdd from "./slices/HandleAdd";
import HandleRemove from "./slices/HandleRemove";
import GetTrackList from "./slices/GetTrackList";

export default configureStore({
    reducer: {
        User: User,
        Recommendation: Recommendation,
        HandleAdd: HandleAdd,
        HandleRemove: HandleRemove,
        TrackList: GetTrackList
    }
})
