(this["webpackJsonpstackoverflow-clone"]=this["webpackJsonpstackoverflow-clone"]||[]).push([[0],{29:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(21),r=c.n(s),l=(c(29),c(6)),i=c(0);var a=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{class:"navbar",style:{"border-top":"4px solid orange"},children:Object(i.jsxs)("div",{class:"container-fluid",children:[Object(i.jsxs)(l.b,{to:"/",style:{color:"black",fontWeight:"bold",textDecoration:"none",fontSize:"20px"},children:[Object(i.jsx)("i",{class:"fab fa-stack-overflow",style:{color:"orange"}})," Stack Overflow - Clone"]}),Object(i.jsxs)("div",{class:"d-flex",children:[Object(i.jsx)("input",{class:"me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{class:"btn btn-outline-success me-2",onClick:function(){window.alert("search")},children:"Search"}),Object(i.jsx)("button",{class:"btn btn-primary me-2",onClick:function(){window.alert("Logged in")},children:"Login"}),Object(i.jsx)("button",{class:"btn btn-primary me-2",onClick:function(){window.alert("signup")},children:"Sign Up"})]})]})})})},o=c(2),j=c(12),b=c.n(j),d=c(24),x=c(22),h=c(5),u=c(23),O=c.n(u);var p=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(x.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://localhost:3000/Questions");case 2:t=e.sent,s(Object(d.a)(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.jsx)(i.Fragment,{children:c.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"row",style:{"border-left":"2px solid grey","border-right":"2px solid grey"},children:[Object(i.jsx)("div",{class:"col-lg-2",children:Object(i.jsxs)("div",{class:"stats mr-2 text-center",children:[Object(i.jsx)("b",{class:"text-muted",children:"91"}),Object(i.jsx)("p",{class:"text-muted",children:"votes"}),Object(i.jsx)("b",{class:"text-muted",children:"91"}),Object(i.jsx)("p",{class:"text-muted",children:"Answers"}),Object(i.jsx)("p",{class:"text-muted",children:"100 views"})]})}),Object(i.jsxs)("div",{class:"bodycontent col-lg-9",children:[Object(i.jsx)("a",{style:{fontSize:"25px",textDecoration:"none"},children:e.message}),Object(i.jsx)("p",{children:e.message})]})]})})}))})};var f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("ul",{class:"sidebarcontent",children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",style:{textDecoration:"none",color:"black"},children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/Questions",style:{textDecoration:"none",color:"black"},children:"Questions"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/tags",style:{textDecoration:"none",color:"black"},children:"Tags"})})]})})};var g=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{class:"Question-Container",children:[Object(i.jsx)("h4",{children:"Question tab:"}),Object(i.jsx)("label",{children:"Ask your  question here:"}),Object(i.jsx)("input",{placeholder:"type here",size:"45",style:{"margin-left":"5px",padding:"4px"},value:c,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("span",{style:{marginLeft:"4px"},children:Object(i.jsx)("button",{class:"btn btn-primary mb-1",size:"3",type:"button",onClick:function(){window.alert(c)},children:"Search"})})]})};var v=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(a,{}),Object(i.jsx)("div",{class:"wrapper",children:Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{class:"col-lg-2",children:Object(i.jsx)("div",{class:"sidebar-wrapper",children:Object(i.jsx)(f,{})})}),Object(i.jsx)("div",{class:"col-lg-6",children:Object(i.jsx)("div",{class:"content-wrapper",children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/",component:p,exact:"true"}),Object(i.jsx)(o.a,{path:"/Questions",component:g,exact:"true"})]})})}),Object(i.jsx)("div",{class:"col-lg-4",children:Object(i.jsx)("h4",{children:"Tags:"})})]})})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),r(e),l(e)}))};r.a.render(Object(i.jsx)(v,{}),document.getElementById("root")),m()}},[[50,1,2]]]);
//# sourceMappingURL=main.9cfcaf33.chunk.js.map