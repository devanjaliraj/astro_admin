(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[220],{2043:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(51),r=t(13),l=t(14),s=t(16),c=t(15),m=t(0),o=t.n(m),u=t(1089),i=t(1090),p=t(1087),d=t(1088),g=t(1091),E=t(172),b=t(1094),h=t(802),v=t(798),f=t(116),y=t(814),N=t.n(y),x=t(56),A=t(789),H=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({approvedstatus:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=l.props.match.params.id;f.a.post("/admin/updteApprovedsts/".concat(a),l.state).then((function(e){console.log(e),N()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/astrology/astrologerList")})).catch((function(e){console.log(e.response)}))},l.state={approvedstatus:""},l}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(A.a,{breadCrumbTitle:"Astrologer",breadCrumbParent:"Home",breadCrumbActive:" Edit Astrologer "}),o.a.createElement(u.a,null,o.a.createElement(i.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(p.a,{listTag:"div"},o.a.createElement(d.a,{href:"/",tag:"a"},"Home"),o.a.createElement(d.a,{active:!0},"Edit Astrologer"))))),o.a.createElement(g.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Astrologer")),o.a.createElement(i.a,null,o.a.createElement(x.b,{render:function(e){var a=e.history;return o.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/astrology/astrologerList")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"approvedstatus",value:"true"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"approvedstatus",value:"false"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),o.a.createElement(u.a,null,o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},o.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=220.843d3b14.chunk.js.map