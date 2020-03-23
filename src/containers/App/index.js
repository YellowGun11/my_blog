import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('../Home'))
const Header = React.lazy(() => import('../../components/Header'))

export default function App(props) {

    const { match } = props;
    return (
        <div>
            <Suspense fallback={<div>Loading</div>}>
                <Header />
                <Route path={match.url} exact component={Home} ></Route>
            </Suspense>
        </div>
    )
}
