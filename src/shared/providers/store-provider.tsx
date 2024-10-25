'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { ComponentBaseProps } from '../types'
import { AppStore, makeStore } from '@/lib/feature/store'

export default function StoreProvider({
  children
}: ComponentBaseProps) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    // storeRef.current.dispatch()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}