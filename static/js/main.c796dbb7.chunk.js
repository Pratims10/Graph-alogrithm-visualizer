(this["webpackJsonpgraph-algorithm-visualizer"]=this["webpackJsonpgraph-algorithm-visualizer"]||[]).push([[0],{13:function(e,t,n){},24:function(e,t,n){e.exports=n(35)},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(20),i=n.n(o),l=(n(29),n(30),n(5)),r=n(6),c=n(8),u=n(7),d=n(9),h=(n(13),null),m=null,g=[],f=[],y=[],p="rgb(0, 204, 0)",v=!1,E=[],k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={points:[],edges:[],src:0},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"randomWeights",value:function(){for(var e=0;e<this.state.edges.length;e++)f[e]=b(1,50);this.reset(),this.forceUpdate()}},{key:"addWeights",value:function(){f.push(b(1,50)),this.forceUpdate()}},{key:"getMousePosition",value:function(e){this.reset(),v=!1;for(var t=e.clientX-this.refs.svg.getBoundingClientRect().left,n=e.clientY-this.refs.svg.getBoundingClientRect().top,a=0;a<this.state.points.length;a++){var s=this.state.points[a].x,o=this.state.points[a].y;if((t-s)*(t-s)+(n-o)*(n-o)<=1e3)return!1}this.setState((function(e){e.points.push({x:t,y:n})}),(function(){g.push([])})),this.forceUpdate()}},{key:"changeSrc",value:function(e){this.reset(),v=!1;var t=document.getElementById("src").value;this.setState({src:t})}},{key:"drawLine",value:function(e){this.reset(),v=!1;var t=document.getElementById("point".concat(e));if(t.style.fill="red",null===h)h=e;else{m=e,(t=document.getElementById("point".concat(h))).style.fill="#000",(t=document.getElementById("point".concat(m))).style.fill="#000";for(var n=0;n<this.state.edges.length;n++){if(this.state.edges[n].u===h&&this.state.edges[n].v===m)return h=null,void(m=null);if(this.state.edges[n].u===m&&this.state.edges[n].v===h)return h=null,void(m=null)}if(h===m)return h=null,void(m=null);this.setState((function(e){e.edges.push({u:h,v:m})}),(function(){this.addWeights(),g[h].push({vertex:m,edgeNo:this.state.edges.length-1}),g[m].push({vertex:h,edgeNo:this.state.edges.length-1}),h=null,m=null})),this.forceUpdate()}}},{key:"reset",value:function(){v=!1;for(var e=0;e<this.state.points.length;e++)"red"!==document.getElementById("point".concat(e)).style.fill&&(document.getElementById("point".concat(e)).style.fill="#000");for(var t=0;t<this.state.edges.length;t++)document.getElementById("edge".concat(t)).style.stroke="red",document.getElementById("weight".concat(t)).style.fill="black";for(var n=0;n<this.state.points.length;n++)document.getElementById("dist".concat(n)).textContent="\u221e";y=[],this.forceUpdate()}},{key:"clear",value:function(){v=!1,this.setState({points:[],edges:[],dist:[]},(function(){h=null,m=null,g=[],f=[],y=[]})),this.forceUpdate()}},{key:"generateRandomGraph",value:function(){var e,t=this,n=this.refs.svg.getBoundingClientRect().left+15,a=this.refs.svg.getBoundingClientRect().left+this.refs.svg.clientWidth-15,s=this.refs.svg.getBoundingClientRect().top+15,o=this.refs.svg.getBoundingClientRect().top+this.refs.svg.clientHeight-15,i=b(5,12);for(e=1;e<=i;e++){var l=void 0;setTimeout((function(){l=t.getMousePosition({clientX:b(n,a),clientY:b(s,o)})}),500*e),!1===l&&e--}for(var r=1;r<=1.1*i;r++)setTimeout((function(){var e=b(0,i-1);t.drawLine(e),e=b(0,i-1),t.drawLine(" "+e)}),500*e),e++}},{key:"showPath",value:function(e){if("/PrimMST"!==window.location.pathname&&!1!==v){var t=y[e];if(document.getElementById("point".concat(e)).style.fill="yellow",document.getElementById("index".concat(e)).style.fill="black","undefined"!==typeof t)for(;-1!==t.vertex;)document.getElementById("edge".concat(t.edgeNo)).style.stroke="yellow",document.getElementById("point".concat(t.vertex)).style.fill="yellow",document.getElementById("index".concat(t.vertex)).style.fill="black",t=y[t.vertex]}}},{key:"removePath",value:function(e){if("/PrimMST"!==window.location.pathname&&!1!==v){var t=y[e];if(document.getElementById("point".concat(e)).style.fill=p,document.getElementById("index".concat(e)).style.fill="white","undefined"!==typeof t)for(;-1!==t.vertex;)document.getElementById("edge".concat(t.edgeNo)).style.stroke="blue",document.getElementById("point".concat(t.vertex)).style.fill=p,document.getElementById("index".concat(t.vertex)).style.fill="white",t=y[t.vertex]}}},{key:"minDist",value:function(e,t){for(var n,a=1e5,s=0;s<this.state.points.length;s++)!1===t[s]&&e[s]<=a&&(a=e[s],n=s);return n}},{key:"dijkstraAnimations",value:function(e){this.reset();for(var t=[],n=0;n<this.state.points.length;n++){t.push([]);for(var a=0;a<this.state.points.length;a++)t[n].push(0)}for(var s=0;s<this.state.edges.length;s++)t[this.state.edges[s].u][this.state.edges[s].v]={wt:f[s],edgeNo:s},t[this.state.edges[s].v][this.state.edges[s].u]={wt:f[s],edgeNo:s};for(var o=[],i=0;i<this.state.points.length;i++)o[i]=!1;var l=[],r=[];y=[];for(var c=0;c<this.state.points.length;c++)r[c]=1e5;r[e]=0,y[e]={vertex:-1,edgeNo:-1},l.push({x:e,y:0,color:"setdist"});for(var u=0;u<this.state.points.length;u++){var d=this.minDist(r,o);if(1e5===r[d])return l;o[d]=!0,l.push({x:d,y:-1,color:"confirmdist"});for(var h=0;h<this.state.points.length;h++)!o[h]&&t[d][h].wt&&r[d]+t[d][h].wt<r[h]&&(y[h]={vertex:d,edgeNo:t[d][h].edgeNo},r[h]=r[d]+t[d][h].wt,l.push({x:t[d][h].edgeNo,y:-1,color:"edge"}),l.push({x:t[d][h].edgeNo,y:-1,color:"shrinkEdge"}),l.push({x:h,y:r[h],color:"setdist"}))}return l}},{key:"dijkstra",value:function(e){if(!(e>=this.state.points.length))if(""!==e||"0"===e){for(var t=0;t<e.length;t++)if("0"!==e[t]&&"1"!==e[t]&&"2"!==e[t]&&"3"!==e[t]&&"4"!==e[t]&&"5"!==e[t]&&"6"!==e[t]&&"7"!==e[t]&&"8"!==e[t]&&"9"!==e[t])return void alert("Enter an integer as source vertex");e=parseInt(e);for(var n=this.dijkstraAnimations(e),a=n.length,s=function(e){if("edge"===n[e].color){var t=setTimeout((function(){var t=document.getElementById("edge".concat(n[e].x));t.style.stroke="blue",t.style.strokeWidth="5"}),500*e);E.push(t)}else if("shrinkEdge"===n[e].color){var a=setTimeout((function(){var t=document.getElementById("edge".concat(n[e].x));t.style.stroke="blue",t.style.strokeWidth="2"}),500*e);E.push(a)}else if("setdist"===n[e].color){var s=setTimeout((function(){var t=document.getElementById("point".concat(n[e].x));t.style.fill="blue",(t=document.getElementById("dist".concat(n[e].x))).textContent=n[e].y}),500*e);E.push(s)}else{var o=setTimeout((function(){document.getElementById("point".concat(n[e].x)).style.fill=p}),500*e);E.push(o)}},o=0;o<a;o++)s(o);v=!0}else alert("Enter a source vertex")}},{key:"minDist",value:function(e,t){for(var n,a=1e5,s=0;s<this.state.points.length;s++)!1===t[s]&&e[s]<=a&&(a=e[s],n=s);return n}},{key:"primAnimations",value:function(e){this.reset();for(var t=[],n=0;n<this.state.points.length;n++){t.push([]);for(var a=0;a<this.state.points.length;a++)t[n].push(0)}for(var s=0;s<this.state.edges.length;s++)t[this.state.edges[s].u][this.state.edges[s].v]={wt:f[s],edgeNo:s},t[this.state.edges[s].v][this.state.edges[s].u]={wt:f[s],edgeNo:s};for(var o=[],i=0;i<this.state.points.length;i++)o[i]=!1;var l=[],r=[];y=[];for(var c=0;c<this.state.points.length;c++)r[c]=1e5;r[e]=0,y[e]={vertex:-1,edgeNo:-1},l.push({x:e,y:0,color:"setdist"});for(var u=0;u<this.state.points.length;u++){var d=this.minDist(r,o);if(1e5===r[d])return[];o[d]=!0,l.push({x:d,y:y[d].edgeNo,color:"confirmdist"});for(var h=0;h<this.state.points.length;h++)!o[h]&&t[d][h].wt&&t[d][h].wt<r[h]&&(y[h]={vertex:d,edgeNo:t[d][h].edgeNo},r[h]=t[d][h].wt,l.push({x:t[d][h].edgeNo,y:-1,color:"edge"}),l.push({x:t[d][h].edgeNo,y:-1,color:"shrinkEdge"}),l.push({x:h,y:r[h],color:"setdist"}))}return l}},{key:"prim",value:function(e){var t=this;if(!(e>=this.state.points.length))if(""!==e||"0"===e){for(var n=0;n<e.length;n++)if("0"!==e[n]&&"1"!==e[n]&&"2"!==e[n]&&"3"!==e[n]&&"4"!==e[n]&&"5"!==e[n]&&"6"!==e[n]&&"7"!==e[n]&&"8"!==e[n]&&"9"!==e[n])return void alert("Enter an integer as source vertex");e=parseInt(e);var a=this.primAnimations(e),s=a.length;if(0!==s){for(var o=function(e){if("edge"===a[e].color){var t=setTimeout((function(){var t=document.getElementById("edge".concat(a[e].x));t.style.stroke="blue",t.style.strokeWidth="5"}),500*e);E.push(t)}else if("shrinkEdge"===a[e].color){var n=setTimeout((function(){var t=document.getElementById("edge".concat(a[e].x));t.style.stroke="blue",t.style.strokeWidth="2"}),500*e);E.push(n)}else if("setdist"===a[e].color){var s=setTimeout((function(){var t=document.getElementById("point".concat(a[e].x));t.style.fill="blue",(t=document.getElementById("dist".concat(a[e].x))).textContent=a[e].y}),500*e);E.push(s)}else{var o=setTimeout((function(){document.getElementById("point".concat(a[e].x)).style.fill=p,-1!=a[e].y&&(document.getElementById("edge".concat(a[e].y)).style.stroke=p)}),500*e);E.push(o)}},i=0;i<s;i++)o(i);var l=setTimeout((function(){for(var e=0;e<t.state.edges.length;e++)document.getElementById("edge".concat(e)).style.stroke!==p&&(document.getElementById("edge".concat(e)).style.stroke="#bfbfbf",document.getElementById("weight".concat(e)).style.fill="#bfbfbf")}),500*s);E.push(l)}}else alert("Enter a source vertex")}},{key:"render",value:function(){var e=this,t=this.state.points.map((function(t,n){return s.a.createElement("circle",{key:"point"+n,id:"point"+n,cx:t.x,cy:t.y,r:14,stroke:"black",onClick:function(t){return e.drawLine(n)},strokeWidth:"2",style:{fill:"#000",transition:"all .2s linear",cursor:"pointer"},onMouseOver:function(){return e.showPath(n)},onMouseOut:function(){return e.removePath(n)}})})),n=this.state.points.map((function(t,n){return s.a.createElement("text",{key:"index"+n,id:"index"+n,fontSize:"14",fontFamily:"Arial",x:t.x-4,y:t.y+4,onClick:function(t){return e.drawLine(n)},style:{fill:"#fff",transition:"all .2s linear",cursor:"pointer"},onMouseOver:function(){return e.showPath(n)},onMouseOut:function(){return e.removePath(n)}},n)})),a=this.state.edges.map((function(t,n){return s.a.createElement("line",{key:"edge"+n,id:"edge"+n,x1:e.state.points[t.u].x,y1:e.state.points[t.u].y,x2:e.state.points[t.v].x,y2:e.state.points[t.v].y,style:{stroke:"red",strokeWidth:"2",zIndex:"-1",transition:"all .2s linear"}})})),o=this.state.edges.map((function(t,n){return s.a.createElement("text",{key:"weight"+n,id:"weight"+n,fontSize:"14",fontFamily:"Arial",fill:"#000",x:(e.state.points[t.u].x+e.state.points[t.v].x)/2,y:(e.state.points[t.u].y+e.state.points[t.v].y)/2},f[n])})),i=this.state.points.map((function(e,t){return s.a.createElement("text",{key:"dist"+t,id:"dist"+t,fontSize:"14",fontFamily:"Arial",fill:"#000",x:e.x+14+2,y:e.y+14+2},"\u221e")}));return s.a.createElement("div",null,s.a.createElement("center",null,"/dijkstra"===window.location.pathname?s.a.createElement("h3",null,"Dijkstra's Shortest Path Algorithm"):s.a.createElement("h3",null,"Prim's Minimal Spanning Tree Algorithm"),"/dijkstra"===window.location.pathname?s.a.createElement("button",{className:"button button4",onClick:function(){return e.dijkstra(e.state.src)}},"Dijkstra's Algorithm"):s.a.createElement("button",{className:"button button4",onClick:function(){return e.prim(e.state.src)}},"Prim's Algorithm"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.randomWeights()}},"Randomize edge weights"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.reset()}},"Reset"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.clear()}},"Clear Canvas"),s.a.createElement("text",{style:{fontFamily:"Georgia"}},"\xa0\xa0\xa0Source/Starting vertex\xa0"),s.a.createElement("input",{type:"text",id:"src",value:this.state.src,style:{width:"25px"},onChange:function(t){return e.changeSrc(t)}})),s.a.createElement("center",null,s.a.createElement("svg",{paintOrder:"markers",ref:"svg",width:.995*window.innerWidth,height:.88*window.innerHeight,style:{border:"2px solid black",backgroundColor:"#dddddd",cursor:"crosshair"},onClick:function(t){return e.getMousePosition(t)}},"/dijkstra"===window.location.pathname?s.a.createElement("rect",null,s.a.createElement("title",null,"1.Click to plot some points. 2.Connect two points by clicking on them consecutively. 3.Run the algorithm. 4.Hover on any vertex to see the shortest path from the root vertex.")):s.a.createElement("rect",null,s.a.createElement("title",null,"1.Click to plot some points. 2.Connect two points by clicking on them consecutively. 3.Run the algo and Enjoy!!!")),i,o,a,t,n)))}}]),t}(a.Component);function b(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var x=null,w=null,B=[],N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={points:[],edges:[],src:0},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"getMousePosition",value:function(e){this.reset();for(var t=e.clientX-this.refs.svg.getBoundingClientRect().left,n=e.clientY-this.refs.svg.getBoundingClientRect().top,a=0;a<this.state.points.length;a++){var s=this.state.points[a].x,o=this.state.points[a].y;if((t-s)*(t-s)+(n-o)*(n-o)<=900)return}this.setState((function(e){e.points.push({x:t,y:n})}),(function(){B.push([])})),this.forceUpdate()}},{key:"drawLine",value:function(e,t){this.reset();var n=document.getElementById("point".concat(t));if(n.style.fill="red",null===x)x=t;else{w=t,(n=document.getElementById("point".concat(x))).style.fill="#000",(n=document.getElementById("point".concat(w))).style.fill="#000";for(var a=0;a<this.state.edges.length;a++){if(this.state.edges[a].u===x&&this.state.edges[a].v===w)return x=null,void(w=null);if(this.state.edges[a].u===w&&this.state.edges[a].v===x)return x=null,void(w=null)}if(x===w)return x=null,void(w=null);this.setState((function(e){e.edges.push({u:x,v:w})}),(function(){B[x].push({vertex:w,edgeNo:this.state.edges.length-1}),B[w].push({vertex:x,edgeNo:this.state.edges.length-1}),x=null,w=null})),this.forceUpdate()}}},{key:"reset",value:function(){for(var e=0;e<this.state.points.length;e++)"blue"!==document.getElementById("point".concat(e)).style.fill&&"rgb(0, 204, 0)"!==document.getElementById("point".concat(e)).style.fill||(document.getElementById("point".concat(e)).style.fill="#000");for(var t=0;t<this.state.edges.length;t++)"blue"===document.getElementById("edge".concat(t)).style.stroke&&(document.getElementById("edge".concat(t)).style.stroke="red")}},{key:"changeSrc",value:function(e){var t=document.getElementById("src").value;this.setState({src:t})}},{key:"clear",value:function(){this.setState({points:[],edges:[],src:0},(function(){x=null,w=null,B=[]})),this.forceUpdate()}},{key:"bfsAnimations",value:function(e){for(var t=[],n=[],a=0;a<this.state.points.length;a++)n[a]=!1;var s=[];for(s.push(e),n[e]=!0;0!==s.length;){var o=s[0];s.shift(),t.push({x:o,y:-1,color:"rgb(0, 204, 0)"});for(var i=0;i<B[o].length;i++)!1===n[B[o][i].vertex]&&(n[B[o][i].vertex]=!0,s.push(B[o][i].vertex),t.push({x:B[o][i].edgeNo,y:-1,color:"edge"}),t.push({x:B[o][i].edgeNo,y:-1,color:"shrinkEdge"}),t.push({x:B[o][i].vertex,y:-1,color:"blue"}))}return t}},{key:"bfs",value:function(e){if(!(e>=this.state.points.length)){this.reset();for(var t=this.bfsAnimations(e),n=t.length,a=function(e){if("edge"===t[e].color){var n=document.getElementById("edge".concat(t[e].x));setTimeout((function(){n.style.stroke="blue",n.style.strokeWidth="5",n.style.borderRadius="2"}),500*e)}else if("shrinkEdge"===t[e].color){var a=document.getElementById("edge".concat(t[e].x));setTimeout((function(){a.style.strokeWidth="2",a.style.borderRadius="0"}),500*e)}else{var s=document.getElementById("point".concat(t[e].x));setTimeout((function(){s.style.fill=t[e].color}),500*e)}},s=0;s<n;s++)a(s)}}},{key:"dfsutil",value:function(e,t,n){n.push({x:e,y:-1,color:"rgb(0, 204, 0)"}),t[e]=!0;for(var a=0;a<B[e].length;a++)t[B[e][a].vertex]||(n.push({x:B[e][a].edgeNo,y:-1,color:"edge"}),n.push({x:B[e][a].edgeNo,y:-1,color:"shrinkEdge"}),n.push({x:B[e][a].vertex,y:-1,color:"blue"}),this.dfsutil(B[e][a].vertex,t,n))}},{key:"dfsAnimations",value:function(e){for(var t=[],n=[],a=0;a<this.state.points.length;a++)n[a]=!1;return this.dfsutil(e,n,t),t}},{key:"dfs",value:function(e){if(!(e>=this.state.points.length)){var t=this.dfsAnimations(e);this.reset();for(var n=t.length,a=function(e){if("edge"===t[e].color){var n=document.getElementById("edge".concat(t[e].x));setTimeout((function(){n.style.stroke="blue",n.style.strokeWidth="5",n.style.borderRadius="2"}),500*e)}else if("shrinkEdge"===t[e].color){var a=document.getElementById("edge".concat(t[e].x));setTimeout((function(){a.style.strokeWidth="2",a.style.borderRadius="0"}),500*e)}else{var s=document.getElementById("point".concat(t[e].x));setTimeout((function(){s.style.fill=t[e].color}),500*e)}},s=0;s<n;s++)a(s)}}},{key:"render",value:function(){var e=this,t=this.state.points.map((function(t,n){return s.a.createElement("circle",{key:"point"+n,id:"point"+n,cx:t.x,cy:t.y,r:"14",stroke:"black",onClick:function(t){return e.drawLine(t,n)},strokeWidth:"1.5",style:{fill:"#000",transition:"all .2s linear",cursor:"pointer"}})})),n=this.state.points.map((function(t,n){return s.a.createElement("text",{key:"index"+n,id:"index"+n,fontSize:"14",fontFamily:"Arial",x:t.x-4,y:t.y+4,onClick:function(t){return e.drawLine(t,n)},style:{fill:"#fff",transition:"all .2s linear",cursor:"pointer"}},n)})),a=this.state.edges.map((function(t,n){return s.a.createElement("line",{key:"edge"+n,id:"edge"+n,x1:e.state.points[t.u].x,y1:e.state.points[t.u].y,x2:e.state.points[t.v].x,y2:e.state.points[t.v].y,style:{stroke:"red",strokeWidth:"2",transition:"all .2s linear"}})}));return s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("h3",null,"Breadth First and Depth First Algorithm"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.bfs(e.state.src)}},"BFS"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.dfs(e.state.src)}},"DFS"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.reset()}},"Reset"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.clear()}},"Clear Canvas"),s.a.createElement("label",{style:{fontFamily:"Georgia"}},"\xa0\xa0\xa0Source/starting vertex \xa0"),s.a.createElement("input",{type:"text",style:{width:"25px"},id:"src",value:this.state.src,onChange:function(t){return e.changeSrc(t)}})),s.a.createElement("center",null,s.a.createElement("svg",{paintOrder:"markers",ref:"svg",width:.995*window.innerWidth,height:.88*window.innerHeight,style:{border:"2px solid black",backgroundColor:"#dddddd",cursor:"crosshair"},onClick:function(t){return e.getMousePosition(t)}},s.a.createElement("rect",null,s.a.createElement("title",null,"1.Click to plot some points. 2.Connect two points by clicking on them consecutively. 3.Run the algo and Enjoy!!!")),a,t,n)))}}]),t}(a.Component);var I=n(3),C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("center",null,s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("h1",{className:"heading",style:{color:"darkblue"}},"GRAPH ALGORITHM VISUALISER"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-md-3"},s.a.createElement("center",null,s.a.createElement("div",{className:"card box",style:{width:"100%",backgroundColor:"#fafafa"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title",style:{fontFamily:"Georgia"}},s.a.createElement("br",null),"Breadth First and Depth First Algorithms"),s.a.createElement("p",{style:{fontFamily:"Georgia"},className:"card-text"},"A simple simulation of Breadth First Traversal and Depth First traversal on an undirected graph created by the user."),s.a.createElement("center",null,s.a.createElement(I.b,{to:"/bfsdfs",style:{width:"70%",color:"white",fontFamily:"Georgia"},className:"button button4"},"BFS and DFS")))))),s.a.createElement("div",{className:"col-sm-12 col-md-3"},s.a.createElement("center",null,s.a.createElement("div",{className:"card box",style:{width:"100%",backgroundColor:"#fafafa"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title",style:{fontFamily:"Georgia"}},s.a.createElement("br",null),"Dijkstra's Shortest Path Algorithm"),s.a.createElement("p",{style:{fontFamily:"Georgia"},className:"card-text"},"A simulation of Djikstra's Shortest Path Algorithm and finding the shortest paths from the chosen source vertex to all the nodes."),s.a.createElement("center",null,s.a.createElement(I.b,{to:"/dijkstra",style:{width:"70%",color:"white",fontFamily:"Georgia"},className:"button button4"},"Dijkstra's Algorithm")))))),s.a.createElement("div",{className:"col-sm-12 col-md-3"},s.a.createElement("center",null,s.a.createElement("div",{className:"card box",style:{width:"100%",backgroundColor:"#fafafa"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title",style:{fontFamily:"Georgia"}},s.a.createElement("br",null),"Kruskal's Minimal Spanning Tree"),s.a.createElement("p",{style:{fontFamily:"Georgia"},className:"card-text"},"A simple simulation Kruskal's Algorithm for finding the Minimal Spanning Tree of a connected undirected weighted graph."),s.a.createElement("center",null,s.a.createElement(I.b,{to:"/KruskalMST",style:{width:"70%",color:"white",fontFamily:"Georgia"},className:"button button4"},"Kruskal's MST")))))),s.a.createElement("div",{className:"col-sm-12 col-md-3"},s.a.createElement("center",null,s.a.createElement("div",{className:"card box",style:{width:"100%",backgroundColor:"#fafafa"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title",style:{fontFamily:"Georgia"}},s.a.createElement("br",null),"Prim's Minimal Spanning Tree Algorithm"),s.a.createElement("p",{style:{fontFamily:"Georgia"},className:"card-text"},"A simple simulation Prim's Algorithm for finding the Minimal Spanning Tree of a connected undirected weighted graph."),s.a.createElement("center",null,s.a.createElement(I.b,{to:"/PrimMST",style:{width:"70%",color:"white",fontFamily:"Georgia"},className:"button button4"},"Prim's MST")))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("br",null),s.a.createElement("br",null))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12",style:{backgroundColor:"#fafafa",border:".5px solid #d6d6d6",borderRadius:"4px",padding:"10px 10px 0px 10px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"}),s.a.createElement("div",{className:"col-8 box"},s.a.createElement("p",{style:{fontFamily:"Georgia"}}," The application is aimed to help the users better understand the famous algorithms on graph by visualizing the steps and realizing how the algorithm actually works. The graph is user generated and the edge weights of weighted graphs are randomly generated and can be changed by the click of a button."),s.a.createElement("p",null,"This aplication is created by Pratim Sarkar. ",s.a.createElement("b",null,"CodeChef"),": pratims10(5 star:2157), ",s.a.createElement("b",null,"Codeforces"),": pratims10(Expert:1733)"),s.a.createElement("p",null,"For any query/sugesstion/feedback, mail at: ",s.a.createElement("b",null,"pratimsarkar23@gmail.com"))),s.a.createElement("div",{className:"col-2"}))))))}}]),t}(a.Component),S=null,j=null,T=[],A=[],M=[],O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={points:[],edges:[]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"randomWeights",value:function(){for(var e=0;e<this.state.edges.length;e++)A[e]=F(1,50);this.reset(),this.forceUpdate()}},{key:"addWeights",value:function(){A.push(F(1,50)),this.forceUpdate()}},{key:"getMousePosition",value:function(e){this.reset(),!1;for(var t=e.clientX-this.refs.svg.getBoundingClientRect().left,n=e.clientY-this.refs.svg.getBoundingClientRect().top,a=0;a<this.state.points.length;a++){var s=this.state.points[a].x,o=this.state.points[a].y;if((t-s)*(t-s)+(n-o)*(n-o)<=1e3)return!1}this.setState((function(e){e.points.push({x:t,y:n})}),(function(){T.push([])})),this.forceUpdate()}},{key:"drawLine",value:function(e){this.reset(),!1;var t=document.getElementById("point".concat(e));if(t.style.fill="red",null===S)S=e;else{j=e,(t=document.getElementById("point".concat(S))).style.fill="#000",(t=document.getElementById("point".concat(j))).style.fill="#000";for(var n=0;n<this.state.edges.length;n++){if(this.state.edges[n].u===S&&this.state.edges[n].v===j)return S=null,void(j=null);if(this.state.edges[n].u===j&&this.state.edges[n].v===S)return S=null,void(j=null)}if(S===j)return S=null,void(j=null);this.setState((function(e){e.edges.push({u:S,v:j})}),(function(){this.addWeights(),T[S].push({vertex:j,edgeNo:this.state.edges.length-1}),T[j].push({vertex:S,edgeNo:this.state.edges.length-1}),S=null,j=null})),this.forceUpdate()}}},{key:"reset",value:function(){!1;for(var e=0;e<this.state.points.length;e++)"red"!==document.getElementById("point".concat(e)).style.fill&&(document.getElementById("point".concat(e)).style.fill="#000");for(var t=0;t<this.state.edges.length;t++)document.getElementById("edge".concat(t)).style.stroke="red",document.getElementById("weight".concat(t)).style.fill="black";[],this.forceUpdate()}},{key:"clear",value:function(){!1,this.setState({points:[],edges:[]},(function(){S=null,j=null,T=[],A=[],[]})),this.forceUpdate()}},{key:"root",value:function(e,t){for(var n=t;e[t]!=t;)t=e[t];return e[n]=t,t}},{key:"join",value:function(e,t,n,a){var s=this.root(e,n),o=this.root(e,a);s!=o&&(t[s]<t[o]?(t[o]+=t[s],e[s]=o):(t[s]+=t[o],e[o]=s))}},{key:"kruskalAnimations",value:function(){this.reset();for(var e=[],t=0;t<this.state.edges.length;t++)e.push({u:this.state.edges[t].u,v:this.state.edges[t].v,edge:{wt:A[t],number:t}});e.sort((function(e,t){return e.edge.wt-t.edge.wt}));for(var n=[],a=0;a<this.state.points.length;a++)n[a]=!1;for(var s=[],o=[],i=[],l=0;l<this.state.points.length;l++)o[l]=l,i[l]=1;for(var r=0;r<e.length;r++)s.push({edge:e[r].edge.number,x:-1,y:-1,color:"test"}),this.root(o,e[r].u)!==this.root(o,e[r].v)?(this.join(o,i,e[r].u,e[r].v),s.push({edge:e[r].edge.number,x:e[r].u,y:e[r].v,color:"included"})):s.push({edge:e[r].edge.number,x:-1,y:-1,color:"excluded"});for(var c=o[0],u=0;u<this.state.points.length;u++)if(c!==o[u])return[];return s}},{key:"kruskal",value:function(){if(this.reset(),0!==this.state.points.length)if(1!==this.state.points.length){for(var e=this.kruskalAnimations(),t=e.length,n=function(t){if("test"===e[t].color){var n=setTimeout((function(){var n=document.getElementById("edge".concat(e[t].edge));n.style.stroke="blue",n.style.strokeWidth="5"}),500*t);M.push(n)}else if("excluded"===e[t].color){var a=setTimeout((function(){var n=document.getElementById("edge".concat(e[t].edge));n.style.stroke="#bfbfbf",n.style.strokeWidth="2",document.getElementById("weight".concat(e[t].edge)).style.fill="#bfbfbf"}),500*t);M.push(a)}else{var s=setTimeout((function(){var n=document.getElementById("edge".concat(e[t].edge));n.style.stroke="rgb(0, 204, 0)",n.style.strokeWidth="2",document.getElementById("point".concat(e[t].x)).style.fill="rgb(0, 204, 0)",document.getElementById("point".concat(e[t].y)).style.fill="rgb(0, 204, 0)"}),500*t);M.push(s)}},a=0;a<t;a++)n(a);!0}else document.getElementById("point".concat(0)).style.fill="rgb(0, 204, 0)"}},{key:"render",value:function(){var e=this,t=this.state.points.map((function(t,n){return s.a.createElement("circle",{key:"point"+n,id:"point"+n,cx:t.x,cy:t.y,r:14,stroke:"black",onClick:function(t){return e.drawLine(n)},strokeWidth:"1.5",style:{fill:"#000",transition:"all .2s linear",cursor:"pointer"}})})),n=this.state.points.map((function(t,n){return s.a.createElement("text",{key:"index"+n,id:"index"+n,fontSize:"14",fontFamily:"Arial",x:t.x-4,y:t.y+4,onClick:function(t){return e.drawLine(n)},style:{fill:"#fff",transition:"all .2s linear",cursor:"pointer"}},n)})),a=this.state.edges.map((function(t,n){return s.a.createElement("line",{key:"edge"+n,id:"edge"+n,x1:e.state.points[t.u].x,y1:e.state.points[t.u].y,x2:e.state.points[t.v].x,y2:e.state.points[t.v].y,style:{stroke:"red",strokeWidth:"2",zIndex:"-1",transition:"all .2s linear"}})})),o=this.state.edges.map((function(t,n){return s.a.createElement("text",{key:"weight"+n,id:"weight"+n,fontSize:"14",fontFamily:"Arial",fill:"#000",x:(e.state.points[t.u].x+e.state.points[t.v].x)/2,y:(e.state.points[t.u].y+e.state.points[t.v].y)/2},A[n])}));return s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement("h3",null,"Kruskal's Minimal Spanning Tree Algoriithm"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.kruskal()}},"Kruskal's Algorithm"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.randomWeights()}},"Randomize edge weights"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.reset()}},"Reset"),s.a.createElement("button",{className:"button button4",onClick:function(){return e.clear()}},"Clear Canvas")),s.a.createElement("center",null,s.a.createElement("svg",{paintOrder:"markers",ref:"svg",width:.995*window.innerWidth,height:.88*window.innerHeight,style:{border:"2px solid black",backgroundColor:"#dddddd",cursor:"crosshair"},onClick:function(t){return e.getMousePosition(t)}},s.a.createElement("rect",null,s.a.createElement("title",null,"1.Click to plot some points. 2.Connect two points by clicking on them consecutively. 3.Run the algo and Enjoy!!!")),o,a,t,n)))}}]),t}(a.Component);function F(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var W=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(I.e,null,s.a.createElement(I.d,{path:"/home",component:C}),s.a.createElement(I.d,{path:"/bfsdfs",component:N}),s.a.createElement(I.d,{path:"/dijkstra",component:k}),s.a.createElement(I.d,{path:"/PrimMST",component:k}),s.a.createElement(I.d,{path:"/KruskalMST",component:O}),s.a.createElement(I.c,{to:"/home"}))}}]),t}(a.Component);var R=function(){return s.a.createElement(I.a,null,s.a.createElement("div",null,s.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c796dbb7.chunk.js.map