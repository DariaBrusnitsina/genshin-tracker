import React from 'react'
import { api } from './fakeapi'
import { Avatar, Box, Button, IconButton, Paper } from '@mui/material'
import { type ascensionsElement, type testLocalDataType } from './types'
import SettingsIcon from '@mui/icons-material/Settings'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import AscensionElement from './ascensionElement'
import { useAppDispatch, useAppSelector } from 'shared/store/hook'
import { updateChar } from 'shared/store/myTeams'
import { updateAscensionsAfterRise } from 'shared/store/myAscensionMatherials'

interface CharacterCardProps {
  char: testLocalDataType
  index: number
}

const CharacterCard: React.FC<CharacterCardProps> = ({ char, index }): JSX.Element => {
  const dispatch = useAppDispatch()
  const myAscensionMatherials = useAppSelector(state => state.myAscensionMatherials)

  const dataBaseChar = api.characters.find(c => c.name === char.charName)
  const ascensionsLvlSet = (dataBaseChar?.ascensions.find(a => a.lvl === char.lvl))?.set

  const isComplete = ascensionsLvlSet?.every(checkIsComplete)

  function checkIsComplete (element: ascensionsElement): boolean {
    const myAscensions = myAscensionMatherials?.find(a => a.name === element.name)?.counter
    const isEqual = myAscensions !== undefined ? myAscensions >= element.counter : false
    return isEqual
  }

  function raiseChar (): void {
    dispatch(updateChar(char))

    if (ascensionsLvlSet !== undefined) {
      for (let i = 0; i < ascensionsLvlSet?.length; i++) {
        const name = ascensionsLvlSet[i].name
        const counter = myAscensionMatherials?.find(a => a.name === name)?.counter
        dispatch(updateAscensionsAfterRise({ name, counter }))
      }
    }
  }

  return (
    <Paper variant="outlined" sx={ascensionsLvlSet !== undefined ? { margin: '10px' } : { margin: '10px', order: '-1', width: '45%' }} >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', columnGap: '10%' }}>
              <Avatar alt={char.charName} src="/broken-image.jpg" />
              <h3>{char.charName}</h3>
            </Box>
            <div>
            <IconButton aria-label="setting">
              <SettingsIcon />
            </IconButton>
            </div>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', paddingX: '10px', columnGap: '5%' }}>
          <h4>Level: {char.lvl}</h4>
          {ascensionsLvlSet !== undefined ? <Button variant="outlined" disabled={isComplete !== true} onClick={raiseChar} >Raise</Button> : <Button onClick={() => dispatch(updateChar(char))} variant="outlined" startIcon={<PlusOneIcon />}>Level Up</Button>}
      </Box>

      {ascensionsLvlSet !== undefined &&
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', bgcolor: '#d3d3d3', borderRadius: '5px', margin: '5px' }}>
          {ascensionsLvlSet?.map((a) => <AscensionElement key={a.name} ascension={a}></AscensionElement>)}
        </Box>
      }
    </Paper>
  )
}

export default CharacterCard
