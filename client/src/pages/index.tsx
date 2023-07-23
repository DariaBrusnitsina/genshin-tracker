// Либо использовать @loadable/component, в рамках туториала - некритично
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const TestPage = lazy(async () => await import('./main'))

export const Routing = (): JSX.Element => {
  return (
        <Routes>
            <Route path="/" element={<TestPage/>} />
        </Routes>
  )
}
