import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

const Header = React.lazy(() => import('../../components/Header'))
const Home = React.lazy(() => import('../Home'))
const Category = React.lazy(() => import('../Category'))
const About = React.lazy(() => import('../About'))
const Write = React.lazy(() => import('../Write'))

export default function App(props) {

    const { match, location } = props;
    return (
        <div>
            <Suspense fallback={<div>Loading</div>}>
                <Header location={location} />
                <Route path={match.url} exact component={Home} ></Route>
                <Route path='/category/:name' exact component={Category} ></Route>
                <Route path='/about'exact component={About} ></Route>
                <Route path='/write' exact component={Write} ></Route>
            </Suspense>
        </div>
    )
}
