import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list: []
};

export const HandleAddSlices = createSlice({
    name: "HandleAdd",
    initialState,
    reducers: {
        HandleAddTrack: (state, action) => {  
            state.list = action.payload;
        },
        HandleAddAlbum: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { HandleAddTrack } = HandleAddSlices.actions;
export const { HandleAddAlbum } = HandleAddSlices.actions;
//
export default HandleAddSlices.reducer;

//funciones
export const HandleTrack = (track) => async (dispatch) => {
    const token = localStorage.getItem('access_token');
    
    try{
        const response = await axios.put(`https://api.spotify.com/v1/me/tracks?ids=${track}`,{}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        dispatch(HandleAddTrack(response.data));
        //console.log(response.data);
    }catch(error){
        console.log(error);
    }

};

export const HandleAlbum = (track) => async (dispatch) => {
    const token = localStorage.getItem('access_token');
    
    try{
        const response = await axios.put(`https://api.spotify.com/v1/me/albums?ids=${track}`,{}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        dispatch(HandleAddAlbum(response.data));
        //console.log(response.data);
    }catch(error){
        console.log(error);
    }

};