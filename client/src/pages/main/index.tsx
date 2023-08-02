/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Container, ToggleButton, ToggleButtonGroup } from '@mui/material'
// import { charactersAPI } from 'shared/api/characters'
// import { LocalDataAPI } from 'shared/api/testLocalData'
import { api } from './fakeapi'
import type { ascensionsElement, testLocalDataType } from './types'
import TeamItem from './teamItem'
import AddIcon from '@mui/icons-material/Add'
import TeamBoard from './teamBoard'

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
  const [testLocalData, setTestLocalData] = useState<testLocalDataType[][] | undefined>(undefined)

  useEffect(() => {
    setTestLocalData(api.testLocalData)
    setCharacters(api.characters)
  //   charactersAPI.getCharacters().then((res) => { setCharacters(res) })
  //   LocalDataAPI.getTestLocalData().then((res) => { setTestLocalData(res) })
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
          {testLocalData?.map((team, index) => <ToggleButton value={index} key={index}><TeamItem key={index} team={team}/></ToggleButton>)}
        </ToggleButtonGroup>
        <Button variant="text" startIcon={<AddIcon />}>Add new team</Button>
      </Box>
      <Box>{testLocalData !== undefined ? <TeamBoard key={view} team={testLocalData[view]}/> : <p>net</p>}</Box>
    </Card>
  </Container>
  )
}

export default TestPage
