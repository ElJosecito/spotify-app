import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: []
};

const GetTrackList = createSlice({
    name: "GetTrackList",
    initialState,
    reducers: {
        setTrackList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setTrackList } = GetTrackList.actions;
export default GetTrackList.reducer;

//funciones

export const getTrackList = () => async (dispatch) => {
    const token = localStorage.getItem('access_token');
    
    try{
        const response = await axios.get(`https://api.spotify.com/v1/me/tracks?limit=50&offset=0`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setTrackList(response.data));
        console.log(response.data);
    }catch(error){
        console.log(error);
    }
};