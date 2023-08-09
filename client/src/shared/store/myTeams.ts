import { createSlice } from '@reduxjs/toolkit'

const myTeamsDefault = [
  [
    { id: '12411', charName: 'Xiangling', lvl: 80 },
    { id: '221351', charName: 'Noelle', lvl: 30 },
    { id: '32131', charName: 'Noelle', lvl: 21 },
    { id: '4231245', charName: 'Noelle', lvl: 60 }
  ],
  [
    { id: '2431', charName: 'Noelle', lvl: 20 },
    { id: '432141', charName: 'Noelle', lvl: 33 },
    { id: '44121', charName: 'Noelle', lvl: 40 },
    { id: '123512', charName: 'Noelle', lvl: 60 }
  ]
]

export interface ImyTeams {
  id: string
  charName: string
  lvl: number
}

const existLocalStorage = localStorage.getItem('myTeams')
let local

if (existLocalStorage === null) {
  localStorage.setItem('myTeams', JSON.stringify(myTeamsDefault))
} else {
  local = JSON.parse(existLocalStorage)
}

const initialState: ImyTeams[][] | undefined = local

const myTeamsSlice = createSlice({
  name: 'myTeams',
  initialState,
  reducers: {
    //     // addTodo(state, action) {
    //     //     state.characters.push({
    //     //       id: new Date().toISOString(),
    //     //       text: action.payload.text,
    //     //       completed: false,
    //     //     });
    //     // },
    updateChar (state, action) {
      if (state !== undefined) {
        for (let i = 0; i < state.length; i++) {
          for (let j = 0; j < state[i].length; j++) {
            if (state[i][j].charName === action.payload.charName) {
              state[i][j].lvl = Number(action.payload.lvl) + 1
            }
          }
        }

        // const currentTeam = state[action.payload.index]
        // const char = currentTeam?.find(c => c.id === action.payload.id)

        // if (char !== null && char !== undefined) {
        //   char.lvl = char.lvl + 1
        // }
        // localStorage.setItem('myTeams', JSON.stringify(state))

        // for (let i = 0; i < state.length; i++) {
        //   console.log(state[i])
        // }
      }
    }
    //     // removeTodo(state, action) {
    //     //     state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    //     // }
  }
})

export const { updateChar } = myTeamsSlice.actions

export default myTeamsSlice.reducer
