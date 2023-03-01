import { createSlice } from '@reduxjs/toolkit'

const testRelationships = {
    0:{
        0:{
            description: "Taylor has absolutely normal amounts of self esteem"
        },
        1: {
            description: "Taylor is married to Rachel"
        }
    },
    1:{
        0: {
            description: "Rachel invented love that one time she pet Taylor after they reunited"
        }
    }
}
export const relationshipListSlice = createSlice({
    name: 'relationships',
    initialState: {
       ships: 
        testRelationships
       
    },
    reducers:{
        addrelationship: (state, action) => {
            state.relationships.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addrelationship } = relationshipListSlice.actions

export default relationshipListSlice.reducer