import { configureStore } from '@reduxjs/toolkit'
import myAscensionMatherials from './myAscensionMatherials'
import myTeams from './myTeams'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    myAscensionMatherials,
    myTeams
  }
})

export default store
