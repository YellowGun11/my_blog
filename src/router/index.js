import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = React.lazy(() => import('../containers/App'))
const Login = React.lazy(() => import('../containers/Login'))

export default class Index extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading</div>}>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/' component={App} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </div>
        )
    }
}