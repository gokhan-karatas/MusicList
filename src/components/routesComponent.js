import React, {Component,} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import * as ROUTES from "../constants/routePaths";
import HomePage from '../pages/homePage';

class RoutesComponent extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={ROUTES.HOME} component={HomePage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default RoutesComponent;
