import React from 'react';
import { Router, Link } from "@reach/router"
import Home from "./pages/home";
import Company from "./pages/company";
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from './overmind'
import Storage from "./pages/storage";
import Settings from "./pages/settings"

const overmind = createOvermind(config,
    {
        devtools: "localhost:3031"
    })


class App extends React.Component {
    render() {
        return(
            <Provider value={overmind}>
                <Router>
                    <Home path="/" />
                    <Storage path="storage"/>
                    <Settings path="settings"/>
                    <Company path="company/:userId" />
                </Router>
            </Provider>
        );
    }
}
export default App