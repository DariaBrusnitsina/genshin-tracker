import React from 'react'
import type { testLocalDataType } from './types'
import { Box } from '@mui/material'
import CharacterCard from './characterCard'

interface CharactersAscensionsBoardProps {
  team: testLocalDataType[]
  index: number
  key: number
}

const CharactersAscensionsBoard: React.FC<CharactersAscensionsBoardProps> = ({ team, index }): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
      {team?.map((char) => <CharacterCard key={char.charName} char={char} index={index} />)}
    </Box>
  )
}

export default CharactersAscensionsBoard
