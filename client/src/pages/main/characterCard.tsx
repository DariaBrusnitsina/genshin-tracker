import React from 'react'
import { api } from './fakeapi'
import { Avatar, Box, Button, IconButton, Paper } from '@mui/material'
import { type testLocalDataType } from './types'
import SettingsIcon from '@mui/icons-material/Settings'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import AscensionElement from './ascensionElement'
import { useAppDispatch } from 'shared/store/hook'
import { updateChar } from 'shared/store/myTeams'

interface CharacterCardProps {
  char: testLocalDataType
  index: number
}

const CharacterCard: React.FC<CharacterCardProps> = ({ char, index }): JSX.Element => {
  const dispatch = useAppDispatch()
  console.log()

  const dataBaseChar = api.characters.find(c => c.name === char.charName)
  const ascensionsLvlSet = (dataBaseChar?.ascensions.find(a => a.lvl === char.lvl))?.set

  // useEffect(() => {
  //   isComplete = ascensionsLvlSet?.every((e) => { return checkIsComplete(e) })
  // }, [])

  // function checkIsComplete (element: ascensionsElement): boolean {
  //   const needAmount = myAscensionMatherials?.find(a => a.name === element.name)?.counter
  //   const isEqual = needAmount !== undefined ? element.counter >= needAmount : false
  //   return isEqual
  // }
  // console.log(isComplete)

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
          {ascensionsLvlSet !== undefined ? <Button variant="outlined" disabled={true} >Raise</Button> : <Button onClick={() => dispatch(updateChar({ id: char.id, index }))} variant="outlined" startIcon={<PlusOneIcon />}>Level Up</Button>}
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
