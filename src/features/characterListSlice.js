import { createSlice } from '@reduxjs/toolkit'

const testCharacters = [ 
    {
    id: 0,
    "name": "Horrible bug girl",
    "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f7a7f7f1-cbae-480f-b1cc-68b4f428e185/d7xmtqd-33c99686-4951-4cb8-b75f-0b695331a4e3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y3YTdmN2YxLWNiYWUtNDgwZi1iMWNjLTY4YjRmNDI4ZTE4NVwvZDd4bXRxZC0zM2M5OTY4Ni00OTUxLTRjYjgtYjc1Zi0wYjY5NTMzMWE0ZTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D5RwWUQZcZwbnwB86-F4hH8Xf-UD0nt-U7usM1KKSYE"
},
{
    id: 1,
    "name":"her wife",
    "image": "https://64.media.tumblr.com/f47345dd93d3dc256bd4898a41f07122/062912fa9558ebe2-3a/s2048x3072/e622464ede4df78fc4d8db623628bebb245a55a7.jpg"
}
]
export const characterListSlice = createSlice({
    name: 'characterList',
    initialState: {
       characters: [
        ...testCharacters
       ]
    },
    reducers:{
        addCharacter: (state, action) => {
            state.characters.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addCharacter } = characterListSlice.actions

export default characterListSlice.reducer