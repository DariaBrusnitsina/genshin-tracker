import React from 'react'
import { type ascensionsElement } from './types'
import { Avatar, Box, Button } from '@mui/material'
import PlusOneIcon from '@mui/icons-material/PlusOne'
import { useAppDispatch, useAppSelector } from 'shared/store/hook'
import { updateAscensionCounter } from 'shared/store/myAscensionMatherials'

interface AscensionElementProps {
  ascension: ascensionsElement
}

const AscensionElement: React.FC<AscensionElementProps> = ({ ascension }): JSX.Element => {
  const dispatch = useAppDispatch()
  const myAscensionMatherials = useAppSelector(state => state.myAscensionMatherials)
  const currentAscension = myAscensionMatherials?.find(a => a.name === ascension.name)

  const isEnough = currentAscension !== null && currentAscension !== undefined ? currentAscension?.counter >= ascension.counter : false

  return (
    <Box sx={{ margin: '15px', width: '40%', bgcolor: 'white', borderRadius: '5px', padding: '5px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5%' }}>
        <Avatar alt={ascension.name} variant='square' src="/broken-image.jpg" />
        <h4>{ascension.name}</h4>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5%' }}>
        <p>Counter: {currentAscension?.counter}/{ascension.counter}</p>
        <Button disabled={isEnough} variant="outlined" startIcon={<PlusOneIcon />} onClick={ () => dispatch(updateAscensionCounter(ascension.name)) }>Add</Button>
      </Box>

    </Box>
  )
}

export default AscensionElement
