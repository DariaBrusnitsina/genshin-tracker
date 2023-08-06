import React from 'react'
import type { testLocalDataType } from './types'
import { Avatar, Badge, type BadgeProps, Stack, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import { deepOrange } from '@mui/material/colors'
import SettingsIcon from '@mui/icons-material/Settings'

interface TeamItemProps {
  team: testLocalDataType[]
  key: number
}

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    top: 10,
    padding: '0 5px'
  }
}))

const TeamMenuItem: React.FC<TeamItemProps> = ({ team }): JSX.Element => {
  return (
    <Stack direction="row" spacing={2} >
      {team.map((char) =>
      <StyledBadge
      badgeContent={char.lvl}
      key={char.charName}
      color='primary'
    >
      <Avatar alt={char.charName} src="/broken-image.jpg" sx={{ bgcolor: deepOrange[300] }}/>
      </StyledBadge>
      )}
      <IconButton aria-label="setting">
        <SettingsIcon />
      </IconButton>
    </Stack>
  )
}

export default TeamMenuItem
