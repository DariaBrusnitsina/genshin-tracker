import React, { Suspense } from 'react'
// import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// import store from '../../shared/store'

export const withRouter = (component: () => React.ReactNode) => () => (
        <BrowserRouter>

            <Suspense fallback="Loading...">
                {component()}
            </Suspense>
        </BrowserRouter>
)
