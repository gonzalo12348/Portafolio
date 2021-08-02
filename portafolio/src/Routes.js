import React from 'react';
import { Route, Switch } from "react-router-dom";
import IntroPage from './components/IntroPage/IntroPage';



export default function Routes () {
    return (
        <Switch>
            <Route path='/'>
                <IntroPage />
            </Route>
        </Switch>
    )
}