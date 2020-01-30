import React, { Component } from 'react'
import ShortestPath from './ShortestPath'
import Canvas from './canvas'
import HomeComponent from './HomeComponent'
import {NavLink, Switch, Route,Redirect} from 'react-router-dom'

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomeComponent}/>
                    <Route path='/bfsdfs' component={Canvas}/>
                    <Route path='/djikstra' component={ShortestPath}/>
                    <Redirect to='/home' />
                </Switch>
                <NavLink to='/bfsdfs'>Graph Traversal Algo</NavLink>
                <br/>
                <NavLink to='/djikstra'>Shortest Path Algo</NavLink>
            </div>
        )
    }
}

export default MainComponent
