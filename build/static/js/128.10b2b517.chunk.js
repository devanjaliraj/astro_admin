(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[128],{1975:function(e,a,t){"use strict";t.r(a),t.d(a,"AddProduct",(function(){return O}));var n=t(51),r=t(13),s=t(14),l=t(16),c=t(15),o=t(0),i=t.n(o),m=t(1087),u=t(1085),d=t(1086),p=t(172),f=t(1090),h=t(800),g=t(797),b=t(793),v=t(116),E=(t(806),t(56)),y=t(790),N=t(841),O=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=e.props.match.params.id;v.a.post("/view_onecust/".concat(t),N.data).then((function(a){console.log(a),e.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;v.a.get("/getonecustomer/".concat(a)).then((function(a){console.log(a),e.setState({first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:a.data.data.status})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(y.a,{breadCrumbTitle:"Add Product",breadCrumbParent:" Product Management",breadCrumbActive:"Add Product"}),i.a.createElement(m.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Product")),i.a.createElement(d.a,null,i.a.createElement(E.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/customer/customerList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Product Name"),i.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title"})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Selling Price(MRP)"),i.a.createElement(b.a,{required:!0,type:"text",name:"mrp",placeholder:"Enter MRP"})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Discount Price"),i.a.createElement(b.a,{required:!0,type:"text",name:"offer_price",placeholder:"Enter Offer Price"})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Thumnail image1"),i.a.createElement(b.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Thumnail image2"),i.a.createElement(b.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(g.a,null,"Thumnail image3"),i.a.createElement(b.a,{required:!0,type:"file",name:"last_name",className:"form-control",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(g.a,null,"Description"),i.a.createElement("textarea",{className:"form-control",placeholder:"Description..."}))),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(o.Component);a.default=O},793:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),o=t.n(c),i=t(1),m=t.n(i),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,g=e.innerRef,b=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),N="form-control";h?(N+="-plaintext",y=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":v&&(N=u?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var O=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,N),t);return("input"===y||m&&"function"===typeof m)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(y,Object(n.a)({},b,{ref:g,className:O,"aria-invalid":i}))},a}(o.a.Component);g.propTypes=h,g.defaultProps={type:"text"},a.a=g},797:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),m=t.n(i),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,h=Object(r.a)(e,d),g=[];c.forEach((function(a,n){var r=e[a];if(delete h[a],r||""===r){var s,l=!n;if(Object(u.isObject)(r)){var c,o=l?"-":"-"+a+"-";s=b(l,a,r.size),g.push(Object(u.mapToCssModules)(m()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else s=b(l,a,r),g.push(s)}}));var v=Object(u.mapToCssModules)(m()(a,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=g,a.a=v},800:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),o=t.n(c),i=t(1),m=t.n(i),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:m}))},a}(c.Component);g.propTypes=h,g.defaultProps={tag:"form"},a.a=g}}]);
//# sourceMappingURL=128.10b2b517.chunk.js.map