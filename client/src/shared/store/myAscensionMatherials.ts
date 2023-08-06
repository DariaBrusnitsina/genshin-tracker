import { createSlice } from '@reduxjs/toolkit'

const myAscensionMatherials = [
  { name: 'prithivaTopazSliver', counter: 0 },
  { name: 'prithivaTopazFragment', counter: 0 },
  { name: 'prithivaTopazChunk', counter: 0 },
  { name: 'prithivaTopazGemstone', counter: 0 },
  { name: 'valberry', counter: 0 },
  { name: 'basaltPillar', counter: 0 },
  { name: 'damagedMask', counter: 0 },
  { name: 'stainedMask', counter: 0 },
  { name: 'ominousdMask', counter: 0 }
]

export interface ImyAscensionMatherialsElement {
  name: string
  counter: number
}

const existLocalStorage = localStorage.getItem('myAscensionMatherials')
let local

if (existLocalStorage === null) {
  localStorage.setItem('myAscensionMatherials', JSON.stringify(myAscensionMatherials))
} else {
  local = JSON.parse(existLocalStorage)
}

const initialState: ImyAscensionMatherialsElement[] | undefined = local

const myAscensionMatherialsSlice = createSlice({
  name: 'myAscensionMatherials',
  initialState,
  reducers: {
    // addTodo(state, action) {
    //     state.characters.push({
    //       id: new Date().toISOString(),
    //       text: action.payload.text,
    //       completed: false,
    //     });
    // },
    updateAscensionCounter (state, action) {
      const ascension = state?.find(a => a.name === action.payload)
      if (ascension !== null && ascension !== undefined) {
        ascension.counter = ascension?.counter + 1
      }
      localStorage.setItem('myAscensionMatherials', JSON.stringify(state))
    }
    // removeTodo(state, action) {
    //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    // }
  }
})

export const { updateAscensionCounter } = myAscensionMatherialsSlice.actions

export default myAscensionMatherialsSlice.reducer
