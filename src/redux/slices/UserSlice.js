import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UserSlice = createSlice({
    name: "UserFunction",
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

