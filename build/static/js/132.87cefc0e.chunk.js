(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[132],{2047:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(51),i=a(13),s=a(14),o=a(16),l=a(15),r=a(0),c=a.n(r),d=a(1088),m=a(1089),u=a(1086),p=a(1087),f=a(1090),b=a(172),h=a(1093),g=a(801),E=a(797),v=a(793),y=a(116),N=(a(27),a(810)),S=a.n(N),O=a(56),j=(a(800),a(842)),z=a(843),C=a(973),x=a.n(C),k=(a(846),a(815),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onEditorStateChange=function(e){s.setState({editorState:e,desc:x()(Object(j.convertToRaw)(e.getCurrentContent()))})},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),y.a.post("admin/add_notification",s.state).then((function(e){console.log(e.data),S()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/pagesetup/notification/notifiList")})).catch((function(e){console.log(e)}))},s.state={title:"",desc:"",editorState:j.EditorState.createEmpty()},s}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(u.a,{listTag:"div"},c.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(p.a,{href:"/app/pagesetup/notification/notifiList",tag:"a"},"Notification List"),c.a.createElement(p.a,{active:!0},"Add Notification"))))),c.a.createElement(f.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Notification")),c.a.createElement(m.a,null,c.a.createElement(O.b,{render:function(e){var t=e.history;return c.a.createElement(b.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/app/pagesetup/notification/notifiList")}},"Back")}}))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(d.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(E.a,null,"Title"),c.a.createElement(v.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),c.a.createElement(d.a,null),c.a.createElement(m.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(E.a,null,"Description"),c.a.createElement(z.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),c.a.createElement("br",null))),c.a.createElement(d.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),a}(r.Component))},793:function(e,t,a){"use strict";var n=a(5),i=a(9),s=a(11),o=a(12),l=a(0),r=a.n(l),c=a(1),d=a.n(c),m=a(4),u=a.n(m),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,o=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(i.a)(e,f),E=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=d||("select"===s||"textarea"===s?s:"input"),N="form-control";b?(N+="-plaintext",y=d||"input"):"file"===s?N+="-file":"range"===s?N+="-range":E&&(N=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var S=Object(p.mapToCssModules)(u()(t,c&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,N),a);return("input"===y||d&&"function"===typeof d)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),r.a.createElement(y,Object(n.a)({},g,{ref:h,className:S,"aria-invalid":c}))},t}(r.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},815:function(e,t,a){}}]);
//# sourceMappingURL=132.87cefc0e.chunk.js.map