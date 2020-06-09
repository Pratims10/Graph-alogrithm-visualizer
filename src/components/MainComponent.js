import React, { Component } from 'react'
import ShortestPath from './ShortestPath'
import Canvas from './canvas'
import HomeComponent from './HomeComponent'
import MST from './MST'
import {NavLink, Switch, Route,Redirect} from 'react-router-dom'

export class MainComponent extends Component {
    render() {
        return (
            <div>
            <NavLink to='/bfsdfs'>Graph Traversal Algo</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/djikstra'>Shortest Path Algo</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/mst'>Minimal Spanning Tree</NavLink>
                <Switch>
                    <Route path='/home' component={HomeComponent}/>
                    <Route path='/bfsdfs' component={Canvas}/>
                    <Route path='/djikstra' component={ShortestPath}/>
                    <Route path='/mst' component={MST}/>
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default MainComponent
