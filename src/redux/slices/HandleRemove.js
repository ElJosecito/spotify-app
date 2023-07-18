import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: []
};

export const HandleRemoveSlice = createSlice({
    name: "HandleRemove",
    initialState,
    reducers: {
        HandleRemoveTrack: (state, action) => {  
            state.list = action.payload;
        },
        HandleRemoveAlbum: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { HandleRemoveTrack } = HandleRemoveSlice.actions;
export const { HandleRemoveAlbum } = HandleRemoveSlice.actions;
//
export default HandleRemoveSlice.reducer;

//funciones
export const HandleRTrack = (track) => async (dispatch) => {
    const token = localStorage.getItem('access_token');
    
    try{
        const response = await axios.delete(`https://api.spotify.com/v1/me/tracks?ids=${track}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        dispatch(HandleRemoveTrack(response.data));
        //console.log(response.data);
    }catch(error){
        console.log(error);
    }

};

export const HandleRAlbum = (album) => async (dispatch) => {
    const token = localStorage.getItem('access_token');
    
    try{
        const response = await axios.delete(`https://api.spotify.com/v1/me/albums?ids=${album}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        dispatch(HandleRemoveAlbum(response.data));
        //console.log(response.data);
    }catch(error){
        console.log(error);
    }

};