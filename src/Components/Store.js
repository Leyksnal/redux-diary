import { configureStore } from '@reduxjs/toolkit'
import useReducer from './GlobalState'
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, useReducer)

export const store = configureStore({
	reducer: persistedReducer,

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
    
})