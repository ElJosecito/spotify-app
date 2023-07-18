import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserSlice = createSlice({
    name: "User",
    initialState: {
        list: [],
    },
    reducers: {
        UserFunction: (state, action) => {
            state.list = action.payload;
        }
    }

});

export const { UserFunction } = UserSlice.actions;

export default UserSlice.reducer;

export const FetchCurrentUser = () => async (dispatch) => {

    const token = localStorage.getItem('access_token');

    try{
        const response = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(UserFunction(response.data));
       // console.log(response.data);
    }catch(error){
        console.log(error);
    }
};

