(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{27:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/wallet.6408b500.png"},33:function(e,t,n){e.exports=n(52)},38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=n(21),i=(n(38),n(6)),s=n(2),u=n(17),d=n(10),p=n(11),m=n(13),h=n(12),E=(n(27),n(30)),f=n.n(E),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onAnyChangeInInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r),a.verifyForm())},a.verifyForm=function(){var e=a.state,t=e.email;return e.password.length>=5&&t.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)?a.setState({disabled:!1}):a.setState({disabled:!0})},a.redirect=function(){var e=a.state.email,t=a.props,n=t.history;(0,t.sendMail)(e),n.push("/carteira")},a.state={email:"",password:"",disabled:!0},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.disabled;return r.a.createElement("main",{className:"main-login"},r.a.createElement("img",{src:f.a,alt:"logo",className:"logo"}),r.a.createElement("h1",{className:"welcome"}," Welcome to the TrybeWallet "),r.a.createElement("form",{className:"main-form"},r.a.createElement("input",{"data-testid":"email-input",type:"text",name:"email",onChange:this.onAnyChangeInInput,value:t,className:"input-login",placeholder:"email"}),r.a.createElement("input",{"data-testid":"password-input",type:"password",value:n,name:"password",onChange:this.onAnyChangeInInput,className:"input-password",placeholder:"password"}),r.a.createElement("button",{type:"button",disabled:a,onClick:this.redirect,className:"btn-login"},"Entrar")))}}]),n}(r.a.Component),v=Object(i.b)(null,(function(e){return{sendMail:function(t){return e({type:"SET_USER_EMAIL",email:t})}}}))(b),g=n(8),y=n.n(g),x=n(15),w=(n(46),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.email,n=e.wallet.reduce((function(e,t){var n=t.value,a=t.currency,r=t.exchangeRates;return e+parseInt(n,10)*r[a].ask}),0);return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"email-field","data-testid":"email-field"},"".concat(t)),r.a.createElement("p",{"data-testid":"total-field",className:"total-field"},"Total de desepesas:  R$ ".concat(n?n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"):0)),r.a.createElement("p",{className:"currency","data-testid":"header-currency-field"},"Moeda: BRL"))}}]),n}(r.a.Component)),j=Object(i.b)((function(e){return{email:e.user.email,wallet:e.wallet.expenses}}))(w),O=["USDT"],C=function(){var e=Object(x.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://economia.awesomeapi.com.br/json/all");case 3:return t=e.sent,e.next=6,t.json().then((function(e){return Object.keys(e)}));case 6:return(n=e.sent).splice(1,1),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://economia.awesomeapi.com.br/json/all");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,O.length>0&&O.forEach((function(e){return delete n[e]})),e.abrupt("return",n);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),S=(n(47),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.submitExpenses=Object(x.a)(y.a.mark((function e(){var t,n,r,c,l,o,i,s,u,d;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.addExepenses,e.next=3,N();case 3:n=e.sent,a.setState({currencies:n}),r=a.state,c=r.value,l=r.description,o=r.currency,i=r.paymentMethod,s=r.category,u=r.currencies,d={value:function(){if(0===c){return 0}return c.includes(",")?parseFloat(c.replace(",",".")):parseFloat(c)}(),description:l,currency:o,method:i,tag:s,exchangeRates:u},t(d);case 9:case"end":return e.stop()}}),e)}))),a.state={value:0,description:"",currency:"USD",paymentMethod:"Cart\xe3o de cr\xe9dito",category:"Alimenta\xe7\xe3o",currencies:[]},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.currencies,t=this.state.value;return r.a.createElement("main",{className:"expenditure-main"},r.a.createElement("form",{className:"expenditure-form"},r.a.createElement("label",{htmlFor:"value",className:"label-expenditure"},"Valor de despesa:",r.a.createElement("input",{"data-testid":"value-input",name:"value",id:"value",onChange:this.handleChange,value:t,className:"input-expenditure-value"})),r.a.createElement("label",{htmlFor:"value",className:"label-expenditure"},"Descri\xe7\xe3o",r.a.createElement("input",{"data-testid":"description-input",type:"text",name:"description",onChange:this.handleChange,className:"input-expenditure-description"})),r.a.createElement("label",{htmlFor:"Moeda",className:"label-expenditure"},"Moeda:",r.a.createElement("select",{className:"select-expenditure",name:"currency","data-testid":"currency-input",id:"Moeda",onChange:this.handleChange},e.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"method-input",className:"label-expenditure"},"Metodo de pagamento",r.a.createElement("select",{"data-testid":"method-input",onChange:this.handleChange,name:"paymentMethod",id:"method-input",className:"select-expenditure"},r.a.createElement("option",null,"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",null,"Dinheiro"),r.a.createElement("option",null,"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"category",className:"label-expenditure"},"Categoria de despesa:",r.a.createElement("select",{name:"category","data-testid":"tag-input",onChange:this.handleChange,id:"category",className:"select-expenditure"},r.a.createElement("option",null,"Alimenta\xe7\xe3o"),r.a.createElement("option",null,"Lazer"),r.a.createElement("option",null,"Trabalho"),r.a.createElement("option",null,"Transporte"),r.a.createElement("option",null,"Sa\xfade"))),r.a.createElement("button",{onClick:this.submitExpenses,type:"button",className:"button-expenditure"},"Adicionar despesa")))}}]),n}(r.a.Component)),k=Object(i.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{addExepenses:function(t){return e({type:"SET_EXPENSES",expense:t})}}}))(S),T=(n(48),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).deletedExpenditure=function(t){var n=e.props,a=n.expenses,r=n.deleteExpenditure,c=a.filter((function(e){return e.id!==t}));console.log(c),r(c)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.expenses;return r.a.createElement("div",{className:"tableDiv"},r.a.createElement("h2",{className:"table-title"}," Tabela de gastos "),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Excluir"))),r.a.createElement("tbody",null,t.map((function(t){var n=t.description,a=t.tag,c=t.method,l=t.value,o=t.currency,i=t.exchangeRates,s=t.id;return r.a.createElement("tr",{key:s},r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,c),r.a.createElement("td",null,parseFloat(l).toFixed(2)),r.a.createElement("td",null,i[o].name.split("/")[0]),r.a.createElement("td",null,parseFloat(i[o].ask).toFixed(2)," "),r.a.createElement("td",null,(l*i[o].ask).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{"data-testid":"delete-btn",type:"button",onClick:function(){return e.deletedExpenditure(s)}},"Excluir")))})))))}}]),n}(r.a.Component)),M=Object(i.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{deleteExpenditure:function(t){return e({type:"DELETE_EXPENSES",expense:t})}}}))(T),R=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.sendCurrencies,e.next=3,C();case 3:n=e.sent,t(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"wallet-div"},r.a.createElement(j,null),r.a.createElement(k,null),r.a.createElement(M,null))}}]),n}(r.a.Component),F=Object(i.b)(null,(function(e){return{sendCurrencies:function(t){return e({type:"SET_CURRENCIES",currencies:t})}}}))(R);var A=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{exact:!0,path:"/carteira",component:F}))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=n(14),_=n(31),U=n(9),L={email:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_EMAIL":return Object(U.a)(Object(U.a)({},e),{},{email:t.email});default:return e}},P=n(32),X={currencies:[],expenses:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENCIES":return Object(U.a)(Object(U.a)({},e),{},{currencies:t.currencies});case"SET_EXPENSES":return Object(U.a)(Object(U.a)({},e),{},{expenses:[].concat(Object(P.a)(e.expenses),[Object(U.a)({id:e.expenses.length},t.expense)])});case"DELETE_EXPENSES":return Object(U.a)(Object(U.a)({},e),{},{expenses:t.expense});default:return e}},B=Object(D.combineReducers)({user:z,wallet:$}),V=Object(D.createStore)(B,Object(_.composeWithDevTools)());l.a.render(r.a.createElement(o.a,{basename:"/trybe-project-wallet"},r.a.createElement(i.a,{store:V},r.a.createElement(A,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/trybe-project-wallet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/trybe-project-wallet","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.ba374a1f.chunk.js.map