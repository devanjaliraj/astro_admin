(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[135],{2029:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(51),s=t(13),r=t(14),i=t(16),l=t(15),o=t(0),c=t.n(o),u=t(1085),f=t(1086),d=t(1083),p=t(1084),m=t(1087),b=t(172),h=t(1090),g=t(800),y=t(797),v=t(793),O=t(41),j=t.n(O),E=t(27),N=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),j.a.post("http://3.108.185.7/nodejs/api/dealer/addbay",r.state).then((function(e){console.log(e),r.props.history.push("/app/setting/bay/bayList")})).catch((function(e){console.log(e)}))},r.state={bay:""},r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(f.a,{sm:"12"},c.a.createElement("div",null,c.a.createElement(d.a,{listTag:"div"},c.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),c.a.createElement(p.a,{href:"/app/setting/bay/bayList",tag:"a"},"Bay List"),c.a.createElement(p.a,{active:!0},"Add Bay"))))),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(f.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Master Oil Company")),c.a.createElement(f.a,null,c.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/setting/bay/bayList")}},"Back"))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,null,c.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(y.a,null,"Bay"),c.a.createElement(v.a,{required:!0,type:"text",name:"bay",placeholder:"",value:this.state.bay,onChange:this.changeHandler}))),c.a.createElement(u.a,null,c.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(o.Component)},793:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),i=t(12),l=t(0),o=t.n(l),c=t(1),u=t.n(c),f=t(4),d=t.n(f),p=t(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),y=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":y&&(j=f?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var E=Object(p.mapToCssModules)(d()(a,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,j),t);return("input"===O||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":c}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},797:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),i=t.n(r),l=t(1),o=t.n(l),c=t(4),u=t.n(c),f=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:f.tagPropType,className:o.a.string,cssModule:o.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,p=e.size,m=e.for,b=Object(s.a)(e,d),h=[];l.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,i=!n;if(Object(f.isObject)(s)){var l,o=i?"-":"-"+a+"-";r=g(i,a,s.size),h.push(Object(f.mapToCssModules)(u()(((l={})[r]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(i,a,s),h.push(r)}}));var y=Object(f.mapToCssModules)(u()(a,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:m},b,{className:y}))};y.propTypes=b,y.defaultProps=h,a.a=y},800:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),i=t(12),l=t(0),o=t.n(l),c=t(1),u=t.n(c),f=t(4),d=t.n(f),p=t(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,m),u=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:u}))},a}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=135.0c0a9cf1.chunk.js.map