import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'
import { useDispatch as useAppDispatch, useSelector as useAppSelector, useStore as useAppStore } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useAppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector 
export const useStore: () => AppStore = useAppStore