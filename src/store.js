import { configureStore } from '@reduxjs/toolkit'
import characterListReducer from './features/characterListSlice'
import relationshipReducer from './features/relationshipSlice'

export default configureStore({
  reducer: {
    characterList: characterListReducer,
    relationships: relationshipReducer
  }
})
