import { createSlice } from '@reduxjs/toolkit'

const myAscensionMatherials = [
  { name: 'prithivaTopazSliver', counter: 0 },
  { name: 'prithivaTopazFragment', counter: 0 },
  { name: 'prithivaTopazChunk', counter: 0 },
  { name: 'prithivaTopazGemstone', counter: 0 },
  { name: 'agnidusAgateSliver', counter: 0 },
  { name: 'agnidusAgateFragment', counter: 0 },
  { name: 'agnidusAgateChunk', counter: 0 },
  { name: 'agnidusAgateGemstone', counter: 0 },
  { name: 'varunadaLazuriteSliver', counter: 0 },
  { name: 'varunadaLazuriteFragment', counter: 0 },
  { name: 'varunadaLazuriteChunk', counter: 0 },
  { name: 'varunadaLazuriteGemstone', counter: 0 },

  { name: 'valberry', counter: 0 },
  { name: 'jueyunChili', counter: 0 },
  { name: 'silkFlower', counter: 0 },
  { name: 'amakumoFruit', counter: 0 },
  { name: 'windwheelAster', counter: 0 },
  { name: 'sangoPearl', counter: 0 },
  { name: 'glazeLily', counter: 0 },
  { name: 'corLapis', counter: 0 },

  { name: 'basaltPillar', counter: 0 },
  { name: 'everflameSeed', counter: 0 },
  { name: 'сleansingHeart', counter: 0 },
  { name: 'stormBeads', counter: 0 },
  { name: 'perpetualHeart', counter: 0 },
  { name: 'riftbornRegalia', counter: 0 },

  { name: 'damagedMask', counter: 0 },
  { name: 'stainedMask', counter: 0 },
  { name: 'ominousdMask', counter: 0 },
  { name: 'slimeCondensate', counter: 0 },
  { name: 'slimeSecretions', counter: 0 },
  { name: 'slimeConcentrate', counter: 0 },

  { name: 'oldHandguard', counter: 0 },
  { name: 'kageuchiHandguard', counter: 0 },
  { name: 'famedHandguard', counter: 0 },
  { name: 'treasureHoarderInsignia', counter: 0 },
  { name: 'silverRavenInsignia', counter: 0 },
  { name: 'goldenRavenInsignia', counter: 0 },
  { name: 'spectralHusk', counter: 0 },
  { name: 'spectralHeart', counter: 0 },
  { name: 'spectralNucleus', counter: 0 }
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
    updateAscensionsAfterRise (state, action) {
      const ascension = state?.find(a => a.name === action.payload.name)
      if (ascension !== null && ascension !== undefined) {
        ascension.counter = ascension?.counter - action.payload.counter
      }
      localStorage.setItem('myAscensionMatherials', JSON.stringify(state))
    },
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

export const { updateAscensionCounter, updateAscensionsAfterRise } = myAscensionMatherialsSlice.actions

export default myAscensionMatherialsSlice.reducer
