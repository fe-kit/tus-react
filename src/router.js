import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Detail = lazy(() => import('./pages/detail'));

export default () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
        </Suspense>
    </Router>
)