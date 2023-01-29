import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    info: {},
}

const characterSlice = createSlice({
    name: "characterSlice",
    initialState: initialState,
    reducers: {
        getCharacters: (state, action) => {
            state.characters = action.payload
            console.log(action.payload,"Slice içinde action.payload")
        },
        getInfo: (state, action) => {
            state.info = action.payload
            console.log(action.payload, "getInfo")
        }
    }
})

export const {getCharacters, getInfo} = characterSlice.actions
export default characterSlice.reducer

