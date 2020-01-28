import React, { Component } from 'react'
let v1=null,v2=null;
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
            u.style.fill='green';
            u=document.getElementById(`point${v2}`);
            u.style.fill='green';
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
                v1=null
                v2=null
            })
            this.forceUpdate()
        }
    }

    render() {
        var pts=this.state.points.map((x,idx)=>{
            return(
            <circle key={"point"+idx} id={"point"+idx} cx={x.x} cy={x.y} r="12" stroke="black" onClick={(event)=>this.drawLine(event,idx)} strokeWidth=".5" style={{fill:"green",zIndex:'1'}} />
            )
        })
        var ptsidx=this.state.points.map((pt,idx)=>{
            return(
                <text fill="#fff" key={"index"+idx} id={"index"+idx} fontSize="12" fontFamily="Arial" x={pt.x-4} y={pt.y+4} onClick={(event)=>this.drawLine(event,idx)} style={{zIndex:'1'}}>{idx}</text>
            )
        })
        var lines=this.state.edges.map((q,idx)=>{
            return(
                <line key={"edge"+idx} x1={this.state.points[q.u].x} y1={this.state.points[q.u].y} x2={this.state.points[q.v].x} y2={this.state.points[q.v].y} style={{stroke:'rgb(255,0,0)',strokeWidth:'2',zIndex:'-1'}} />
            )
        })
        return (
            <div>
            <svg paintOrder='markers' ref='svg' width={window.innerWidth} height="400" style={{backgroundColor: 'rgb(230, 230, 230)'}} onClick={(event)=>this.getMousePosition(event)}>
            {pts}
            {ptsidx}
            {lines}
            </svg>
            </div>
        )
    }
}

export default Canvas
