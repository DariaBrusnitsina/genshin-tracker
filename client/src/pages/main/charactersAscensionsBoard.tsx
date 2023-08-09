import React from 'react'
import type { testLocalDataType } from './types'
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CharacterCard from './characterCard'
import { api } from './fakeapi'
import NeedAscensionsNow from './needAscensionsNow'
import { useAppSelector } from 'shared/store/hook'

interface CharactersAscensionsBoardProps {
  team: testLocalDataType[]
  index: number
  key: number
}

interface IneedNow {
  type: string
  name: string
  counter: number
}

interface IneedRes {
  type: string
  set: arr[]
}

interface arr {
  name: string
  need: number
  have: number
}

const CharactersAscensionsBoard: React.FC<CharactersAscensionsBoardProps> = ({ team, index }): JSX.Element => {
  const myAscensionMatherials = useAppSelector(state => state.myAscensionMatherials)
  let needNow: IneedNow[] = []
  const needNowForDisplay: IneedRes[] = [{ type: 'ascensionMatherials', set: [] }, { type: 'localSpecialties', set: [] }, { type: 'levelUpMaterials', set: [] }, { type: 'enhancementMaterials', set: [] }]
  const [view, setView] = React.useState('now')

  for (let i = 0; i < team.length; i++) {
    const dataBaseChar = api.characters.find(c => c.name === team[i].charName)
    const ascensionsLvlSet = (dataBaseChar?.ascensions.find(a => a.lvl === team[i].lvl))?.set

    if (ascensionsLvlSet !== undefined) {
      needNow = [...needNow, ...ascensionsLvlSet]
    }
  }

  for (let i = 0; i < needNow.length; i++) {
    const type = needNowForDisplay.find((e) => e.type === needNow[i].type)
    const myAmount = myAscensionMatherials?.find((a) => a.name === needNow[i].name)?.counter

    console.log(myAscensionMatherials)
    if ((type?.set.find((e) => e.name === needNow[i].name)) != null) {
      const existElement = type?.set.find((e) => e.name === needNow[i].name)

      if (existElement !== undefined) {
        existElement.need = existElement?.need + needNow[i].counter
      }
    } else {
      if (myAmount != null) {
        const newElement = { name: needNow[i].name, need: needNow[i].counter, have: myAmount }
        if (needNow[i].counter > myAmount) {
          type?.set.push(newElement)
        }
      }
    }
  }

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string): void => {
    setView(nextView)
  }

  return (
    <>
      <ToggleButtonGroup
        orientation="horizontal"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="now">Need now</ToggleButton>
        <ToggleButton value="general">Need in general</ToggleButton>
      </ToggleButtonGroup>

      {view === 'now'
        ? <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>{needNowForDisplay?.map((cathegory) => cathegory.set.length !== 0 ? <NeedAscensionsNow key={cathegory.type} cathegory={cathegory} /> : <></>)}</Box>
        : <Box>Need in general</Box>
      }

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '40px' }}>
        {team?.map((char) => <CharacterCard key={char.charName} char={char} index={index} />)}
      </Box>
    </>
  )
}

export default CharactersAscensionsBoard
