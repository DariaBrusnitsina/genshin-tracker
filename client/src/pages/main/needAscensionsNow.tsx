import { Box } from '@mui/material'
import React from 'react'

interface NeedAscensionsNowProps {
  cathegory: IneedRes
  key: string
}
interface IneedRes {
  type: string
  set: arr[]
}

interface arr {
  name: string
  need: number
  have: number
}

const NeedAscensionsNow: React.FC<NeedAscensionsNowProps> = ({ cathegory }): JSX.Element => {
  return (
    <div>
      <h4>{cathegory.type}</h4>
      {cathegory?.set.map((a) =>
      <Box key={a.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#adadad', borderRadius: '15px', paddingX: '5px', marginY: '5px' }}>
        <p>{a.name}</p>
        <p>{a.have} / {a.need}</p>
      </Box>)}
    </div>
  )
}

export default NeedAscensionsNow
