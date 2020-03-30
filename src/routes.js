import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Binary from './pages/Binary'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Binary} />
                <Redirect to="/home" /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes