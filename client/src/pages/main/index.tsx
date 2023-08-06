import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Container, ToggleButton, ToggleButtonGroup } from '@mui/material'
// import { charactersAPI } from 'shared/api/characters'
// import { LocalDataAPI } from 'shared/api/testLocalData'
import { api } from './fakeapi'
import type { ascensionsElement } from './types'
import TeamItem from './teamsMenuItem'
import AddIcon from '@mui/icons-material/Add'
import CharactersAscensionsBoard from './charactersAscensionsBoard'
import { useAppSelector } from 'shared/store/hook'

interface ascensionsLvl {
  lvl: number
  set: ascensionsElement[]
}

interface characters {
  name: string
  ascensions: ascensionsLvl[]
}

const TestPage = (): React.ReactNode => {
  const [characters, setCharacters] = useState<characters[] | undefined>(undefined)
  const myTeams = useAppSelector(state => state.myTeams)

  useEffect(() => {
    setCharacters(api.characters)
  }, [])
  console.log(characters)

  const [view, setView] = React.useState(0)

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: number): void => {
    setView(nextView)
  }

  return (
  <Container>
    <Card sx={{ display: 'flex', padding: '25px', columnGap: '10%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          onChange={handleChange}
        >
          <h2>Select a team</h2>
          {myTeams?.map((team, index) => <ToggleButton value={index} key={index}><TeamItem key={index} team={team}/></ToggleButton>)}
        </ToggleButtonGroup>
        <Button variant="text" startIcon={<AddIcon />}>Add new team</Button>
      </Box>
      <Box>{myTeams !== undefined ? <CharactersAscensionsBoard key={view} team={myTeams[view]} index={view}/> : <p>net</p>}</Box>
    </Card>
  </Container>
  )
}

export default TestPage
