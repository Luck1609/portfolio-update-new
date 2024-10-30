import { configureStore } from '@reduxjs/toolkit'
import api from './api'
import userReducer from "./reducers/user"


export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
  })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']