import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CourseSlice from "../Components/CourseSlice";
import JobInternship from "../Components/JobsInternshipSlice"

import storage from 'redux-persist/lib/storage'

import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  courseStore: CourseSlice,
  JobInternshipStore : JobInternship 
})

const persist = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:  persist ,
});


export const persistor = persistStore(store)