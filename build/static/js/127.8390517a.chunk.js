(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[127],{1979:function(e,a,t){"use strict";t.r(a),t.d(a,"AddCategory",(function(){return N}));var n=t(51),s=t(13),r=t(14),l=t(16),o=t(15),c=t(0),i=t.n(c),m=t(1087),u=t(1085),d=t(1086),p=t(172),f=t(1090),g=t(800),h=t(797),b=t(793),v=t(116),y=(t(806),t(56)),E=t(790),O=t(841),N=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=e.props.match.params.id;v.a.post("/view_onecust/".concat(t),O.data).then((function(a){console.log(a),e.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;v.a.get("/getonecustomer/".concat(a)).then((function(a){console.log(a),e.setState({first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:a.data.data.status})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(E.a,{breadCrumbTitle:"Add Category",breadCrumbParent:" Product Management",breadCrumbActive:"Add Category"}),i.a.createElement(m.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),i.a.createElement(d.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/customer/customerList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(h.a,null,"Category Name"),i.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Enter Category Name"})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(h.a,null,"slug Name"),i.a.createElement(b.a,{required:!0,type:"text",name:"mrp",placeholder:"slug  Name"})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(h.a,null,"Thumnail image1"),i.a.createElement(b.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler}))),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(c.Component);a.default=N},793:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),m=t.n(i),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,g=e.plaintext,h=e.innerRef,b=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=m||("select"===r||"textarea"===r?r:"input"),O="form-control";g?(O+="-plaintext",E=m||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=u?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var N=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||m&&"function"===typeof m)&&(b.type=r),b.children&&!g&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:h,className:N,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h},797:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,g=Object(s.a)(e,d),h=[];o.forEach((function(a,n){var s=e[a];if(delete g[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=b(l,a,s.size),h.push(Object(u.mapToCssModules)(m()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=b(l,a,s),h.push(r)}}));var v=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},g,{className:v}))};v.propTypes=g,v.defaultProps=h,a.a=v},800:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),m=t.n(i),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],g={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);h.propTypes=g,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=127.8390517a.chunk.js.map