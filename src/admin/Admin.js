import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import AdminMenu from './AdminMenu';
import AdminPortifolio from './AdminPortifolio';

export default class Admin extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h2>Painel Administrativo</h2>
                <Route path={`/`} component={AdminMenu}/>
                <Route path={`${this.props.match.url}/AdminPortifolio`} component={AdminPortifolio}/>
                
            </div>
        )
    }
}
