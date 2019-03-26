(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){e.exports=n(333)},333:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(42),u=n.n(c),o=n(4),s=n.n(o),l=n(10),i=n(154),p=n(22),f=n(23),d=n(26),h=n(24),b=n(27),m=n(341),g=n(28),v=n.n(g),E="/api/blogs",O=null,w=function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(E);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k={getAll:w,setToken:function(e){var t="bearer ".concat(e);O={headers:{Authorization:t,"Content-Type":"application/json"}}},create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(E,t,O);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getOne:y,update:function(){var e=Object(l.a)(s.a.mark(function e(t,n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(E,"/").concat(t),n,O);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(E,"/").concat(t),O);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},j=n(18),x=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.notification.message?a.a.createElement("div",{className:"notification"},this.props.notification.message):null}}]),t}(a.a.Component),U=Object(j.b)(function(e){return{notification:e.notification}},null)(x),S=n(80),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return[].concat(Object(S.a)(e),[t.blog]);case"INIT_BLOGS":return t.blogs;default:return e}},B=function(e){return{type:"NEW_NOTIFICATION",notification:e}},N=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n(B(e)),setTimeout(function(){n({type:"CLEAR_NOTIFICATION"})},3e3);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return t.notification;case"CLEAR_NOTIFICATION":return{};default:return e}},I=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).addBlog=function(){var e=Object(l.a)(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.preventDefault(),n.state.title.length<5?n.props.createNotification({message:"Title of blog ".concat(n.state.title.length," must be atleast 5 characters")}):n.state.author<5?n.props.createNotification({message:"Author of blog ".concat(n.state.title.length," must be atleast 5 characters")}):(r={title:n.state.title,author:n.state.author,url:n.state.url},n.props.createNewBlog(r),n.props.createNotification({message:"A new blog ".concat(n.state.title," by ").concat(n.state.author," added")}),n.setState({title:"",author:"",url:""}))}catch(a){n.setState({error:"couldn't add new blog due to an error: ".concat(a)}),setTimeout(function(){n.setState({error:null})},3e3)}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={author:"",title:"",url:""},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h2",null,"Create new Blog"),a.a.createElement("form",{onSubmit:this.addBlog},a.a.createElement("div",null,"title",a.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){var n=t.target;return e.setState({title:n.value})}})),a.a.createElement("div",null,"author",a.a.createElement("input",{type:"text",name:"author",value:this.state.author,onChange:function(t){var n=t.target;return e.setState({author:n.value})}})),a.a.createElement("div",null,"url",a.a.createElement("input",{type:"text",name:"url",value:this.state.url,onChange:function(t){var n=t.target;return e.setState({url:n.value})}})),a.a.createElement("button",null,"create")))}}]),t}(a.a.Component),L=Object(j.b)(null,{createNewBlog:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.create(e);case 2:r=t.sent,n({type:"NEW_BLOG",blog:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},createNotification:N})(I),_={login:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":case"LOGINCRED":return t.currentUser;case"LOGOUT":return null;default:return e}},R=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).logoutHadnler=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,window.localStorage.removeItem("loggedUser"),e.next=5,n.props.logout();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.logoutHadnler},a.a.createElement("button",null,"logout")))}}]),t}(a.a.Component),D=Object(j.b)(null,{logout:A})(R),W=n(342),F=function(e){var t=e.onSubmit,n=e.username,r=e.password,c=e.handleChange;return a.a.createElement("div",null,a.a.createElement("h2",null,"Kirjaudu"),a.a.createElement(W.a,{onSubmit:t},a.a.createElement(W.a.Input,null,a.a.createElement("label",null,"k\xe4ytt\xe4j\xe4tunnus"),a.a.createElement("p",null),a.a.createElement("input",{type:"text",name:"username",value:n,onChange:c})),a.a.createElement(W.a.Input,null,a.a.createElement("label",null,"salasana"),a.a.createElement("p",null),a.a.createElement("input",{type:"password",name:"password",value:r,onChange:c})),a.a.createElement(W.a.Button,{type:"submit"},"kirjaudu")))},z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).toggleVisibility=function(){n.setState({visible:!n.state.visible})},n.state={visible:!1},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e={display:this.state.visible?"none":""},t={display:this.state.visible?"":"none"};return a.a.createElement("div",null,a.a.createElement("div",{style:e},a.a.createElement("button",{onClick:this.toggleVisibility},this.props.buttonLabel)),a.a.createElement("div",{style:t},this.props.children,a.a.createElement("button",{onClick:this.toggleVisibility},"cancel")))}}]),t}(a.a.Component),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_BLOG":return t.selectedBlog;case"UNSELECT_BLOG":return null;default:return e}},V=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).toggleVisibility=function(){n.setState({visible:!n.state.visible})},n.addLike=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,k.update(n.props.blog._id,{title:n.props.blog.title,author:n.props.blog.author,url:n.props.blog.url,user:n.props.blog.user,likes:n.props.blog.likes+1});case 4:e.sent,n.forceUpdate(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:setTimeout(function(){n.setState({error:null})},3e3);case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),n.deleteBlog=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,k.remove(n.props.blog._id);case 4:e.sent,n.forceUpdate(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0+"delete blog error");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),n.selectBlogHandler=function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("bloggerino",t),e.next=3,n.props.selectBlog(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={visible:!1},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t={display:this.state.visible?"":"none"};return a.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},className:"everything"},a.a.createElement("div",{className:"authorAndTitle",onClick:this.toggleVisibility},"Show"),a.a.createElement("tr",{key:this.props.blog._id},a.a.createElement("a",{onClick:function(){return e.selectBlogHandler(e.props.blog)}},this.props.blog.author,"  ",this.props.blog.title)),a.a.createElement("div",{className:"togglableContent",style:t},a.a.createElement("a",{href:this.props.blog.url},this.props.blog.url),a.a.createElement("p",null,this.props.blog.likes," likes ",a.a.createElement("button",{onClick:this.addLike},"like")),a.a.createElement("p",null,"added by ",this.props.blog.user.name),a.a.createElement(function(){return e.props.currentUser.username!==e.props.blog.user.username&&e.props.blog.user.username?a.a.createElement("div",null,"You can only delete your own blogs"):a.a.createElement("div",null,a.a.createElement("button",{onClick:e.deleteBlog},"delete"))},null)))}}]),t}(a.a.Component),H=Object(j.b)(function(e){return{currentUser:e.currentUser,selectedBlog:e.selectedBlog}},{selectBlog:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SELECT_BLOG",selectedBlog:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(V),M=function(e){return e.show?a.a.createElement("div",null,a.a.createElement("h2",null,"blogs"),e.blogs.map(function(t){return a.a.createElement(H,{key:t._id,blog:t,user:e.currentUser})})):null},K=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SELECT_USER",selectedUser:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_USER":return t.selectedUser;case"UNSELECT_USER":return null;default:return e}},q=Object(j.b)(function(e){return{selectedUser:e.selectedUser}},{selectUser:K})(function(e){return console.log("los props",e),a.a.createElement("div",null,a.a.createElement("h2",null,e.selectedUser.name),a.a.createElement("p",null,e.selectedUser.username),a.a.createElement("p",null,"Added blogs"),e.selectedUser.blogs.map(function(e){return a.a.createElement("li",null,e.title)}))}),P=Object(j.b)(function(e){return{users:e.users,selectedUser:e.selectedUser}},{selectUser:K})(function(e){if(!e.show)return null;if(e.selectedUser)return a.a.createElement(q,null);var t=function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectUser(n);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",null,"username"),a.a.createElement("th",null,"name"),a.a.createElement("th",null,"blogs created")),e.users.map(function(e){return a.a.createElement("tr",{key:e._id},a.a.createElement("a",{onClick:function(){return t(e)}},e.username),a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.blogs.length))})))}),Q=Object(j.b)(function(e){return{selectedBlog:e.selectedBlog}},null)(function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"titleAndAuthor"},e.selectedBlog.title," ",e.selectedBlog.author),a.a.createElement("div",{className:"likes"},"blog has ",e.selectedBlog.likes," likes",a.a.createElement("button",{onClick:e.onclick},"likes")))}),X=function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("/api/users","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),$={getAll:X,create:function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getOne:Z},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(S.a)(e),[t.user]);case"INIT_USERS":return t.users;case"GET_USER":return t.user;default:return e}},te=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.handleButtonChange=function(e){n.props.unSelectUser(),n.props.unSelectBlog(),n.setState({page:e})},n.login=function(){var e=Object(l.a)(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={username:n.state.username,password:n.state.password},e.next=5,n.props.login(r);case 5:window.localStorage.setItem("loggedUser",JSON.stringify(n.props.currentUser)),k.setToken(n.props.currentUser.token),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n.props.createNotification({message:"Wrong username or password"}),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),n.state={username:"",password:"",selectedBlog:null,user:null,page:"blogs"},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){this.props.initializeUsers(),this.props.initializeBlogs()}},{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("loggedUser");e&&(this.props.loginFromToken(JSON.parse(e)),k.setToken(JSON.parse(e).token))}},{key:"render",value:function(){var e=this;return a.a.createElement(m.a,null,a.a.createElement(U,{message:this.props.notification}),null===this.props.currentUser?a.a.createElement(F,{onSubmit:e.login,username:e.state.username,password:e.state.password,handleChange:e.handleChange}):a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("p",null,this.props.currentUser.name," logged in"),a.a.createElement("button",{onClick:function(){return e.handleButtonChange("blogs")}},"blogs"),a.a.createElement("button",{onClick:function(){return e.handleButtonChange("users")}},"users"),a.a.createElement(D,{onSubmit:e.logout})),a.a.createElement(z,{buttonLabel:"create"},a.a.createElement(L,null)),null===this.props.selectedBlog?a.a.createElement(M,{show:"blogs"===this.state.page,blogs:this.props.blogs,currentUser:this.props.currentUser}):a.a.createElement(Q,{onClick:this.addLike}),a.a.createElement(P,{show:"users"===this.state.page})))}}]),t}(a.a.Component),ne=Object(j.b)(function(e){return{blogs:e.blogs,notification:e.notification,currentUser:e.currentUser,selectedBlog:e.selectedBlog}},{createNotification:N,initializeUsers:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.getAll();case 2:n=e.sent,t({type:"INIT_USERS",users:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initializeBlogs:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",blogs:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.login(e);case 2:r=t.sent,n({type:"LOGIN",currentUser:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},logout:A,loginFromToken:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"LOGINCRED",currentUser:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unSelectUser:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UNSELECT_USER"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},unSelectBlog:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UNSELECT_BLOG"});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(te),re=n(44),ae=n(173),ce=n(174),ue=Object(re.combineReducers)({notification:T,blogs:C,users:ee,currentUser:G,selectedUser:Y,selectedBlog:J}),oe=Object(re.createStore)(ue,Object(ce.composeWithDevTools)(Object(re.applyMiddleware)(ae.a)));u.a.render(a.a.createElement(j.a,{store:oe},a.a.createElement(ne,null)),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.62ce0ebd.chunk.js.map