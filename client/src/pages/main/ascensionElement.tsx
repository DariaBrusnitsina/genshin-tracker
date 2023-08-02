import React from 'react'
import { type ascensionsElement } from './types'
import { Avatar, Box, Button } from '@mui/material'
import PlusOneIcon from '@mui/icons-material/PlusOne'

interface AscensionElementProps {
  ascension: ascensionsElement
}

const AscensionElement: React.FC<AscensionElementProps> = ({ ascension }): JSX.Element => {
  return (
    <Box sx={{ margin: '15px', width: '40%', bgcolor: 'white', borderRadius: '5px', padding: '5px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5%' }}>
        <Avatar alt={ascension.name} src="/broken-image.jpg" />
        <h4>{ascension.name}</h4>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5%' }}>
        <p>Counter: 0/{ascension.counter}</p>
        <Button variant="outlined" startIcon={<PlusOneIcon />}>Add</Button>
      </Box>

    </Box>
  )
}

export default AscensionElement
