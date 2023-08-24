import React from 'react'
import type { testLocalDataType } from './types'
import { Avatar, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ToggleButton, ToggleButtonGroup } from '@mui/material'
import CharacterCard from './characterCard'
import { api } from './fakeapi'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import { useAppDispatch, useAppSelector } from 'shared/store/hook'
import { updateAscensionCounter } from 'shared/store/myAscensionMatherials'

interface CharactersAscensionsBoardProps {
  team: testLocalDataType[]
  index: number
  key: number
}
interface IneedInput {
  type: string
  name: string
  counter: number
}

interface IneedOutput {
  name: string
  need: number
  have: number
  type: string
}

const CharactersAscensionsBoard: React.FC<CharactersAscensionsBoardProps> = ({ team, index }): JSX.Element => {
  const dispatch = useAppDispatch()
  const [view, setView] = React.useState('now')

  const myAscensionMatherials = useAppSelector(state => state.myAscensionMatherials)

  let needNowInput: IneedInput[] = []
  const needNowOutput: IneedOutput[] = []

  for (let i = 0; i < team.length; i++) {
    const dataBaseChar = api.characters.find(c => c.name === team[i].charName)
    const ascensionsLvlSet = (dataBaseChar?.ascensions.find(a => a.lvl === team[i].lvl))?.set

    if (ascensionsLvlSet !== undefined) {
      needNowInput = [...needNowInput, ...ascensionsLvlSet]
    }
  }

  for (let i = 0; i < needNowInput.length; i++) {
    const myAmount = myAscensionMatherials?.find((a) => a.name === needNowInput[i].name)?.counter

    if (needNowOutput.find((e) => e.name === needNowInput[i].name) != null) {
      const existElement = needNowOutput.find((e) => e.name === needNowInput[i].name)

      if (existElement !== undefined) {
        existElement.need = existElement?.need + needNowInput[i].counter
      }
    } else {
      if (myAmount != null) {
        const newElement = { name: needNowInput[i].name, need: needNowInput[i].counter, have: myAmount, type: needNowInput[i].type }
        if (needNowInput[i].counter > myAmount) {
          needNowOutput.push(newElement)
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
        ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 630 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Have / Need</TableCell>
                      <TableCell>Increase</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {needNowOutput.map((a) =>
                      <TableRow
                        key={a.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row"><Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5%' }}>
                          <Avatar alt={a.name} variant='square' src="/broken-image.jpg" />
                          <h4>{a.name}</h4>
                        </Box></TableCell>
                        <TableCell align="left">{a.have} / {a.need}</TableCell>
                        <TableCell align="left"><Button variant="text" startIcon={<PlusOneIcon />} onClick={ () => dispatch(updateAscensionCounter(a.name)) }>Add</Button></TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
        : <Box>Need in general</Box>
                    }

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '40px' }}>
        {team?.map((char) => <CharacterCard key={char.charName} char={char} index={index} />)}
      </Box>
    </>
  )
}

export default CharactersAscensionsBoard
