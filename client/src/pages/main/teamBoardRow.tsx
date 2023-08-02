import React from 'react'
import { api } from './fakeapi'
import { Avatar, Box, Button, IconButton, Paper } from '@mui/material'
import { type testLocalDataType } from './types'
import SettingsIcon from '@mui/icons-material/Settings'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import AscensionElement from './ascensionElement'

interface TeamBoardRowProps {
  char: testLocalDataType
}

const TeamBoardRow: React.FC<TeamBoardRowProps> = ({ char }): JSX.Element => {
  const dataBaseChar = api.characters.find(c => c.name === char.charName)
  const isAscensionsRequired = (dataBaseChar?.ascensions.find(a => a.lvl === char.lvl)) != null
  const ascensions = isAscensionsRequired ? dataBaseChar?.ascensions.find(a => a.lvl === char.lvl) : undefined

  return (
    <Paper variant="outlined" sx={isAscensionsRequired ? { margin: '10px' } : { margin: '10px', order: '-1', width: '45%' }} >
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
          {isAscensionsRequired ? <Button variant="outlined" disabled>Raise</Button> : <Button variant="outlined" startIcon={<PlusOneIcon />}>Level Up</Button>}
      </Box>

      {isAscensionsRequired &&
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', bgcolor: '#d3d3d3', borderRadius: '5px', margin: '5px' }}>
          {ascensions?.set.map((a) => <AscensionElement key={a.name} ascension={a}></AscensionElement>)}
        </Box>
      }
    </Paper>
  )
}

export default TeamBoardRow
