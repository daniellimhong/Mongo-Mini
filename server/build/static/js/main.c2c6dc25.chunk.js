(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=(a(26),a(2)),u=a(3),s=a(6),i=a(4),m=a(7),d=a(5),p=(a(27),a(9)),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).state={name:"",email:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleName",value:function(e){this.setState({name:e})}},{key:"handleEmail",value:function(e){this.setState({email:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=this.props.postCustomer;return l.a.createElement("div",{className:"customer-form"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(a,n)}},l.a.createElement("h1",null,l.a.createElement("span",null," Add A Customer")," ",l.a.createElement(p.b,null)),l.a.createElement("div",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{value:a,onChange:function(t){return e.handleName(t.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{value:n,onChange:function(t){return e.handleEmail(t.target.value)}})),l.a.createElement("button",null,"Submit")))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).state={email:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.customers,n=t.deleteCustomer,r=t.updateCustomer,c=this.state.email,o=a.map(function(t){return l.a.createElement("div",{key:t._id,className:"customer"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",{className:"icon"},l.a.createElement(p.a,null)),l.a.createElement("div",null,l.a.createElement("span",null,"Name: ")," ",l.a.createElement("span",{className:"data"},t.name)),l.a.createElement("div",null,l.a.createElement("span",null,"Email: "),l.a.createElement("span",{className:"data"},t.email)),l.a.createElement("div",null,l.a.createElement("span",null,"Date Joined: "),l.a.createElement("span",{className:"data"},new Date(t.date_joined).toLocaleDateString()))),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return n(t._id)}},"Delete"))),l.a.createElement("details",null,l.a.createElement("summary",null,"Update Customer Info"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"New Email: "),l.a.createElement("input",{value:c,onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement("button",{className:"update",onClick:function(){r(t._id,c),e.setState({email:""})}},"Update"))))});return l.a.createElement("div",{className:"customer-container"},o)}}]),t}(n.Component),E=a(8),f=a.n(E),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).state={customers:[]},e.deleteCustomer=e.deleteCustomer.bind(Object(m.a)(e)),e.postCustomer=e.postCustomer.bind(Object(m.a)(e)),e.updateCustomer=e.updateCustomer.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getCustomers()}},{key:"getCustomers",value:function(){var e=this;f.a.get("/api/customer").then(function(t){e.setState({customers:t.data})}).catch(function(e){return console.log(e)})}},{key:"postCustomer",value:function(e,t){var a=this;f.a.post("/api/customer",{name:e,email:t}).then(function(e){a.setState({customers:e.data})}).catch(function(e){return console.log(e)})}},{key:"updateCustomer",value:function(e,t){var a=this;console.log(e,t),f.a.put("/api/customer/".concat(e,"?email=").concat(t)).then(function(e){a.setState({customers:e.data})}).catch(function(e){return console.log(e)})}},{key:"deleteCustomer",value:function(e){var t=this;f.a.delete("/api/customer/".concat(e)).then(function(e){t.setState({customers:e.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.customers;return l.a.createElement("div",{className:"App"},l.a.createElement(v,{customers:e,deleteCustomer:this.deleteCustomer,updateCustomer:this.updateCustomer}),l.a.createElement(h,{postCustomer:this.postCustomer}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.c2c6dc25.chunk.js.map