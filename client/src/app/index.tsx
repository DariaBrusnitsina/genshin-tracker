import React from 'react'
import './index.css'
import { withProviders } from './providers'
import { Routing } from 'pages'

const App = (): JSX.Element => (
  <Routing />
)

export default withProviders(App)
