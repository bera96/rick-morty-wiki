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
        },
        getInfo: (state, action) => {
            state.info = action.payload
            state.info.stage = "episode"
        }
    }
})

export const {getCharacters, getInfo} = characterSlice.actions
export default characterSlice.reducer

