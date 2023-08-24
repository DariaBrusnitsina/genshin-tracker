import { Box } from '@mui/material'
import React from 'react'

interface NeedAscensionsNowProps {
  ascension: IAscension
  key: string
}
interface IAscension {
  name: string
  need: number
  have: number
  type: string
}

const NeedAscensionsNow: React.FC<NeedAscensionsNowProps> = ({ ascension }): JSX.Element => {
  return (
    <div>
      <Box >
        <p>{ascension.name}</p>
        <p>{ascension.have} / {ascension.need}</p>
        <h4>{ascension.type}</h4>

      </Box>
    </div>
  )
}

export default NeedAscensionsNow
