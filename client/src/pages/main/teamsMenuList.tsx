import { ToggleButtonGroup } from '@mui/material'
import React from 'react'

interface ListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
}

export default function List<T> (props: ListProps<T>): JSX.Element {
  const [view, setView] = React.useState('list')

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string): void => {
    setView(nextView)
  }

  return (
    <ToggleButtonGroup
    orientation="vertical"
    value={view}
    exclusive
    onChange={handleChange}
  >
      {props.items.map(props.renderItem)}
    </ToggleButtonGroup>
  )
}
