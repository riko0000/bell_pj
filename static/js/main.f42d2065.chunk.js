(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(35)},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(18),o=n.n(i),a=n(2),s=n(3),l=n(5),u=n(4),d=n(6),p=(n(24),n(13)),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClickCircle=function(){n.setState({sf:400,dp:5,circleX:n.props.x})},n.onEndOfClick=function(){n.setState({sf:400,dp:5,circleX:n.props.x-15})},n.state={sf:0,dp:0,circleX:n.props.x},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(p.Motion,{defaultStyle:{cx:this.state.circleX},style:{cx:Object(p.spring)(this.state.circleX+15,{stiffness:this.state.sf,damping:this.state.dp})}},function(t){return c.a.createElement("circle",{onMouseDown:e.onClickCircle.bind(),onMouseUp:e.onEndOfClick.bind(),cx:t.cx,cy:e.props.y})})}}]),t}(r.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderCircle",value:function(e,t){return c.a.createElement(h,{x:e,y:t})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("svg",null,this.renderCircle(260,280),this.renderCircle(400,320),this.renderCircle(180,450),this.renderCircle(300,480),this.renderCircle(430,480),this.renderCircle(150,630),this.renderCircle(310,620),this.renderCircle(480,620)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.f42d2065.chunk.js.map