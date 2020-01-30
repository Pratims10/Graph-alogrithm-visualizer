import React, { Component } from 'react'
let v1=null,v2=null;
let adj=[]
var delay=1000
let weights=[]
var r=14
var INT_MAX=100000
var color1='rgb(0, 204, 0)';
export class ShortestPath extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             points:[],
             edges:[],
             src:0
        }
    }

    randomWeights(){
        for(let i=0;i<this.state.edges.length;i++)
        weights[i]=getRandomInt(1,50);
        this.reset()
        this.forceUpdate();
    }
    addWeights()
    {
        weights.push(getRandomInt(1,50))
        this.forceUpdate()
    }
        getMousePosition(event) { 
        let x = event.clientX;//this.refs.svg.style.marginLeft ;
        let y = event.clientY-this.refs.svg.style.marginTop ;
        for(let i=0;i<this.state.points.length;i++)
        {
            let x1=this.state.points[i].x;
            let y1=this.state.points[i].y;
            let dist=(x-x1)*(x-x1)+(y-y1)*(y-y1);
            if(dist<=1000)
                return;
        }
        this.setState((prev)=>{
            points:prev.points.push({x:x,y:y})
        },function(){
            adj.push([])
        })
        this.forceUpdate();
    }

    changeSrc(e){
        let x=document.getElementById('src').value
        this.setState({
            src:x
        })
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
            if(v1===v2)
            {
                v1=null
                v2=null
                return
            }
            this.setState((prev)=>{
                edges:prev.edges.push({
                    u:v1,
                    v:v2
                })
            },function(){
                this.addWeights()
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
        for(let i=0;i<this.state.points.length;i++)
        {
            document.getElementById(`dist${i}`).textContent='∞';
        }
        this.forceUpdate();
    }
    clear(){
        this.setState({
            points:[],
            edges:[],
            dist:[]
        },function(){
            v1=null
            v2=null
            adj=[]
            weights=[]
        })
        this.forceUpdate();
    }

    //DJIKSTRA'S SHORTEST PATH ALGORITHM
    minDist(dist,sptSet) 
    {
        // Initialize min value 
        let min = INT_MAX, min_index; 
        for (let v = 0; v < this.state.points.length; v++) 
            if (sptSet[v] == false && dist[v] <= min) 
                {
                    min = dist[v]
                    min_index = v;
                }
        return min_index;
    }
    dijkstraAnimations(s){
        let ar=[]
        for(let i=0;i<this.state.points.length;i++)
        {
            ar.push([])
            for(let j=0;j<this.state.points.length;j++)
            ar[i].push(0)
        }
        //forming adj matrix
        for(let i=0;i<this.state.edges.length;i++)
        {
            ar[this.state.edges[i].u][this.state.edges[i].v]=({wt:weights[i],edgeNo:i})
            ar[this.state.edges[i].v][this.state.edges[i].u]=({wt:weights[i],edgeNo:i})
        }
        let vis=[]
        for(let i=0;i<this.state.points.length;i++)
        vis[i]=false;
        let animations=[]
        let dist=[]
        for(let i=0;i<this.state.points.length;i++)
        dist[i]=100000
        dist[s]=0
        animations.push({
            x:s,
            y:0,
            color:'setdist'
        })
        for(let it=0;it<this.state.points.length;it++)
        {
            let u=this.minDist(dist,vis)
            vis[u]=true
            animations.push({
                x:u,
                y:-1,
                color:'confirmdist'
            })
            for(let v=0;v<this.state.points.length;v++)
            {
                if(!vis[v] && ar[u][v].wt && dist[u]+ar[u][v].wt<dist[v])
                {
                    dist[v]=dist[u]+ar[u][v].wt
                    animations.push({
                        x:ar[u][v].edgeNo,
                        y:-1,
                        color:'edge'
                    })
                    animations.push({
                        x:v,
                        y:dist[v],
                        color:'setdist'
                    })
                }
            }
        }
        return animations
    }

    dijkstra(s){
        if(s>=this.state.points.length)
        return;
        const animations=this.dijkstraAnimations(s)
        let len=animations.length
        for(let i=0;i<len;i++)
        {
            if(animations[i].color==='edge'){
                setTimeout(() => {
                    let q=document.getElementById(`edge${animations[i].x}`)
                    q.style.stroke='blue'
                }, i*delay);
            }
            else if(animations[i].color==='setdist')
            {
                setTimeout(() => {
                    let q=document.getElementById(`point${animations[i].x}`)
                    q.style.fill='blue'
                    q=document.getElementById(`dist${animations[i].x}`);
                    q.textContent=animations[i].y
                    
                }, i*delay);
            }
            else
            {
                setTimeout(() => {
                    let q=document.getElementById(`point${animations[i].x}`)
                    q.style.fill=color1
                }, i*delay);
            }
        }
    }
    render() {
        var pts=this.state.points.map((x,idx)=>{
            return(
            <circle key={"point"+idx} id={"point"+idx} cx={x.x} cy={x.y} r={r} stroke="black" onClick={(event)=>this.drawLine(event,idx)} strokeWidth=".5" style={{fill:"orange",zIndex:'1',transition:'all .2s linear',cursor:'pointer'}} />
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
        var edgeWeights=this.state.edges.map((edge,idx)=>{
            return(
                <text key={"weight"+idx} id={"weight"+idx} fontSize="14" fontFamily="Arial" fill="#000" x={(this.state.points[edge.u].x+this.state.points[edge.v].x)/2.0} y={(this.state.points[edge.u].y+this.state.points[edge.v].y)/2.0} >{weights[idx]}</text>
            )
        })
        var dists=this.state.points.map((x,idx)=>{
            return(
                <text key={"dist"+idx} id={"dist"+idx} fontSize='14' fontFamily='Arial' fill='#000' x={x.x+r+2} y={x.y+r+2}>&infin;</text>
            )
        })
        return (
            <div>
            <svg paintOrder='markers' ref='svg' width={window.innerWidth} height="400" style={{border:'1px dotted black',backgroundColor:'rgb(251, 250, 255)',cursor:'crosshair'}} onClick={(event)=>this.getMousePosition(event)}>
            {pts}
            {ptsidx}
            {lines}
            {edgeWeights}
            {dists}
            </svg>
            <br/>
            <button onClick={()=>this.dijkstra(this.state.src)}>Djikstra's Algorithm</button>
            <button onClick={()=>this.randomWeights()}>Randomize edge weights</button>
            <button onClick={()=>this.reset()}>Reset</button>
            <button onClick={()=>this.clear()}>Clear Canvas</button>
            &nbsp;&nbsp;&nbsp;Enter source vertex &nbsp;
            <input type="text" id="src" value={this.state.src} onChange={(e)=>this.changeSrc(e)} />
            </div>
        )
    }
}

export default ShortestPath
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}