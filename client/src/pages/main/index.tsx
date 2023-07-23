/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import { Box, Card, Container } from '@mui/material'
import { charactersService, testLocalDataService } from 'shared/api/api'
// import axios from 'axios'

const TestPage = (): JSX.Element => {
  // useStore из сущности всех персонажей (единичные) на случай добавления
  // мэп по отрядам пользователя (групповые)

  const [characters, setCharacters] = useState(null)
  const [testLocalData, setTestLocalData] = useState(null)

  useEffect(() => {
    charactersService.get().then((res) => { setCharacters(res) })
    testLocalDataService.get().then((res) => { setTestLocalData(res) })
  }, [])

  console.log(characters, testLocalData)

  return (
  <Container>
    <Card>
    <Box sx={{ display: 'flex', padding: '25px' }}>
      <div>dasdas</div>

    </Box>
    </Card>
  </Container>)
}

export default TestPage
