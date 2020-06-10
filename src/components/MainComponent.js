import React, { Component } from 'react'
import ShortestPath from './ShortestPath'
import Canvas from './canvas'
import HomeComp from './HomeComp'
import MST from './MST'
import {NavLink, Switch, Route,Redirect} from 'react-router-dom'

export class MainComponent extends Component {
    render() {
        return (
                <Switch>
                    <Route path='/home' component={HomeComp}/>
                    <Route path='/bfsdfs' component={Canvas}/>
                    <Route path='/dijkstra' component={ShortestPath}/>
                    <Route path='/PrimMST' component={ShortestPath}/>
                    <Route path='/KruskalMST' component={MST}/>
                    <Redirect to='/home' />
                </Switch>
        )
    }
}

export default MainComponent
