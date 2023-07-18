import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    list: []
};

export const RecommendationSlices = createSlice({
    name: "Recommendation",
    initialState,
    reducers: {
        RecommendationFunc: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { RecommendationFunc } = RecommendationSlices.actions;
export default RecommendationSlices.reducer;

//funciones
export const FetchRecommendations = (genere) => async (dispatch) => {

    const token = localStorage.getItem('access_token');

    try{
        const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=${genere}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(RecommendationFunc(response.data.tracks));
        //console.log(response.data.tracks);
    }catch(error){
        console.log(error);
    }
};

