import React from 'react'
import type { testLocalDataType } from './types'
import { Box } from '@mui/material'
import TeamBoardRow from './teamBoardRow'

interface TeamItemProps {
  team: testLocalDataType[]
  key: number
}

const TeamBoard: React.FC<TeamItemProps> = ({ team }): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} >
      {team?.map((char) => <TeamBoardRow key={char.charName} char={char} />)}
    </Box>
  )
}

export default TeamBoard
