import React, { Component } from 'react'
let v1=null,v2=null;
let adj=[]
var delay=1000
export class Canvas extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             points:[],
             edges:[]
        }
    }
    
    getMousePosition(event) { 
        let x = event.clientX;//this.refs.svg.style.marginLeft ;
        let y = event.clientY-this.refs.svg.style.marginTop ;
        for(let i=0;i<this.state.points.length;i++)
        {
            let x1=this.state.points[i].x;
            let y1=this.state.points[i].y;
            let dist=(x-x1)*(x-x1)+(y-y1)*(y-y1);
            if(dist<=600)
            {
//                this.drawLine(event);
                return;
            }
        }
        this.setState((prev)=>{
            points:prev.points.push({
                x:x,
                y:y
            })
        },function(){
            adj.push([])
        })
        this.forceUpdate();
    }

    drawLine(e,idx){
        let u=document.getElementById(`point${idx}`);
        u.style.fill='red';
        if(v1===null)
        v1=idx;
        else {
            v2=idx;
            u=document.getElementById(`point${v1}`);
            u.style.fill='orange';
            u=document.getElementById(`point${v2}`);
            u.style.fill='orange';
            for(let i=0;i<this.state.edges.length;i++)
            {
                if(this.state.edges[i].u===v1 && this.state.edges[i].v===v2)
                {   v1=null
                    v2=null
                    return;
                }
                else if(this.state.edges[i].u===v2 && this.state.edges[i].v===v1)
                {
                    v1=null
                    v2=null
                    return;
                }
            }
            this.setState((prev)=>{
                edges:prev.edges.push({
                    u:v1,
                    v:v2
                })
            },function(){
                adj[v1].push({vertex:v2,edgeNo:this.state.edges.length-1})
                adj[v2].push({vertex:v1,edgeNo:this.state.edges.length-1})
                v1=null
                v2=null
            })
            this.forceUpdate()
        }
    }

    reset(){
        for(let i=0;i<this.state.points.length;i++){
            document.getElementById(`point${i}`).style.fill='orange'
        }
        for(let i=0;i<this.state.edges.length;i++)
        {
            document.getElementById(`edge${i}`).style.stroke='red'
        }
    }
    clear(){
        this.setState({
            points:[],
            edges:[]
        },function(){
            v1=null
            v2=null
            adj=[]
        })
        this.forceUpdate();
    }
    //BFS TRAVERSAL OF GRAPH
    bfsAnimations(s){
        let animations=[]
        let vis=[]
        for(let i=0;i<this.state.points.length;i++)
        {
            vis[i]=false
        }
        let queue=[]
        queue.push(s)
        vis[s]=true;
        while(queue.length!==0)
        {
            var x=queue[0]
            queue.shift()
            animations.push({
                x:x,
                y:-1,
                color:'green'
            })
            for(let i=0;i<adj[x].length;i++)
            {
                if(vis[adj[x][i].vertex]===false)
                {
                    vis[adj[x][i].vertex]=true;
                    queue.push(adj[x][i].vertex)
                    animations.push({
                        x:adj[x][i].edgeNo,
                        y:-1,
                        color:'edge'
                    })
                    animations.push({
                        x:adj[x][i].vertex,
                        y:-1,
                        color:'blue'
                    })
                }
            }
        }
        return animations
    }

    bfs(s){
        const animations=this.bfsAnimations(s)
        let len=animations.length
        for(let i=0;i<len;i++)
        {
            if(animations[i].color==='edge')
            {
                let x1=document.getElementById(`edge${animations[i].x}`)
                setTimeout(() => {
                    x1.style.stroke='blue'
                }, i*delay);
            }
            else
            {
                    let x=document.getElementById(`point${animations[i].x}`)
                    setTimeout(() => {
                        x.style.fill=animations[i].color
                    }, i*delay);
            }
        }
    }

    //DFS ALGORITHM
    dfsutil(s,vis,animations){
        animations.push({
            x:s,
            y:-1,
            color:'green'
        })
        vis[s]=true
        for(let i=0;i<adj[s].length;i++)
        {
            if(!vis[adj[s][i].vertex])
            {
                animations.push({
                    x:adj[s][i].edgeNo,
                    y:-1,
                    color:'edge'
                })
                animations.push({
                    x:adj[s][i].vertex,
                    y:-1,
                    color:'blue'
                })
                this.dfsutil(adj[s][i].vertex,vis,animations)
            }
        }
    }

    dfsAnimations(s){
        var animations=[]
        let vis=[]
        for(let i=0;i<this.state.points.length;i++)
        {
            vis[i]=false
        }
        this.dfsutil(s,vis,animations)
        return animations
    }

    dfs(s){
        const animations=this.dfsAnimations(s)
        let len=animations.length
        for(let i=0;i<len;i++)
        {
            if(animations[i].color==='edge')
            {
                let x1=document.getElementById(`edge${animations[i].x}`)
                setTimeout(() => {
                    x1.style.stroke='blue'
                }, i*delay);
            }
            else
            {
                    let x=document.getElementById(`point${animations[i].x}`)
                    setTimeout(() => {
                        x.style.fill=animations[i].color
                    }, i*delay);
            }
        }
    }
    render() {
        var pts=this.state.points.map((x,idx)=>{
            return(
            <circle key={"point"+idx} id={"point"+idx} cx={x.x} cy={x.y} r="15" stroke="black" onClick={(event)=>this.drawLine(event,idx)} strokeWidth=".5" style={{fill:"orange",zIndex:'1',transition:'all .2s linear'}} />
            )
        })
        var ptsidx=this.state.points.map((pt,idx)=>{
            return(
                <text  key={"index"+idx} id={"index"+idx} fontSize="14" fontFamily="Arial" x={pt.x-4} y={pt.y+4} onClick={(event)=>this.drawLine(event,idx)} style={{zIndex:'1',fill:"#fff",transition:'all .2s linear'}}>{idx}</text>
            )
        })
        var lines=this.state.edges.map((q,idx)=>{
            return(
                <line key={"edge"+idx} id={"edge"+idx} x1={this.state.points[q.u].x} y1={this.state.points[q.u].y} x2={this.state.points[q.v].x} y2={this.state.points[q.v].y} style={{stroke:'red',strokeWidth:'2',zIndex:'-1',transition:'all .2s linear'}} />
            )
        })

        return (
            <div>
            <svg paintOrder='markers' ref='svg' width={window.innerWidth} height="400" style={{backgroundColor: '#f2f2f2'}} onClick={(event)=>this.getMousePosition(event)}>
            {pts}
            {ptsidx}
            {lines}
            </svg>
            <br/>
            <button onClick={()=>this.bfs(0)}>BFS</button>
            <button onClick={()=>this.dfs(0)}>DFS</button>
            <button onClick={()=>this.reset(0)}>Reset</button>
            <button onClick={()=>this.clear(0)}>Clear Canvas</button>
            </div>
        )
    }
}

export default Canvas
