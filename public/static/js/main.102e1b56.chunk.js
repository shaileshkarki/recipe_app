(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{29:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.73990e9e.svg"},46:function(e,t,a){e.exports=a(75)},51:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(38),c=a.n(s),i=(a(51),a(14)),o=a(5),l=a(6),u=a(8),m=a(7),d=a(76),h=a(15);function p(){var e=Object(i.a)(["\n    .container {\n      max-width: 96%;  \n    }\n"]);return p=function(){return e},e}var f=h.a.div(p()),g=function(e){return r.a.createElement(f,null,r.a.createElement(d.a,null,e.children))},v=(a(29),a(2)),E=a.n(v),b=a(4);var y=function(e){return e.handleDeleteRecipe,console.log(e),e.results.map((function(t){return r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{key:t.id,className:"card  bg-dark text-white"},r.a.createElement("div",{className:"card-header text-center"},r.a.createElement("h2",null,t.title)),r.a.createElement("div",{className:"card-body text-center"},t.readyinminutes?r.a.createElement("img",{claclassName:"card-img-top",src:t.img,alt:""}):r.a.createElement("img",{claclassName:"card-img-top",src:"https://spoonacular.com/recipeImages/".concat(t.id,"-480x360.jpg"),alt:""}),r.a.createElement("h3",null,"Ready in (minutes): ",t.readyInMinutes||t.readyinminutes),t.readyinminutes?r.a.createElement("div",null,r.a.createElement(b.b,{to:"/show/".concat(t.id),className:"btn btn-primary"},"Show Details"),r.a.createElement("button",{onClick:function(){return e.handleDeleteRecipe(t.id)},className:"btn btn-danger"},"Delete")):r.a.createElement(b.b,{to:"/show/".concat(t.id),className:"btn btn-primary"},"Show Details"))))}))},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).handleSearch=function(){console.log(n.state.query);var e="https://api.spoonacular.com/recipes/findByIngredients?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&ingredients=".concat(n.state.query.split(" ").join(","),"&number=5&includeInstruction=true");console.log(e),E.a.get(e).then((function(e){n.setState({results:e.data.results,isLoading:!1}),0!==e.data.results.length&&E.a.post("/recipe",n.state.results).then((function(e){}))}))},n.handleChange=function(e){n.setState({query:e.target.value}),console.log(n.state.query)},n.state={query:"",results:[],isLoading:!0,userID:e.userID},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SPOONACULAR_APIKEY,"https://api.spoonacular.com/recipes/findByIngredients?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&ingredients=".concat(this.state.query.split(" ").join(","),"&number=5&includeInstruction=true"));console.log(t),E.a.get(t).then((function(t){e.setState({results:t.data,isLoading:!1}),0!==e.state.results.length&&E.a.post("/recipe",e.state.results).then((function(e){console.log(this.state.results)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"input-recipe"},r.a.createElement("h1",null,"Search Recipe By Ingredients"),r.a.createElement("input",{type:"text",onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSearch},"Search Recipe")),r.a.createElement("div",{className:"search-results"},r.a.createElement(y,{results:this.state.results,userID:this.state.userID,handleDeleteRecipe:this.handleDeleteRecipe})))}}]),a}(r.a.Component),D=a(3),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password_digest:"",username:"",home:!1},e}return Object(l.a)(a,[{key:"login",value:function(e){var t=this;console.log(this.props);try{E.a.post("/login",{email:this.state.email,password_digest:this.state.password_digest}).then((function(e){t.setState({home:!0}),t.props.handleLogin(e.data)}))}catch(e){console.log("\ud83d\ude31 Axios request failed: ".concat(e))}}},{key:"reset",value:function(){this.setState({email:"",password:""})}},{key:"render",value:function(){var e=this;return!0===this.state.home?r.a.createElement(D.a,{to:"/"}):r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Email"),r.a.createElement("input",{type:"email",className:"form-control",onChange:function(t){e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"",id:"",onChange:function(t){e.setState({password_digest:t.target.value})}})),r.a.createElement("button",{onClick:function(){return e.login()},className:"btn btn-info"},"Login"),r.a.createElement("button",{type:"reset",className:"btn btn-info"},"Reset"))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).handleSearch=function(){var e="https://api.spoonacular.com/recipes/search?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0&query=".concat(n.state.query,"&number=5&includeInstruction=true");E.a.get(e).then((function(e){n.setState({results:e.data.results,isLoading:!1}),0!==e.data.results.length&&E.a.post("/recipe",n.state.results).then((function(e){}))}))},n.handleChange=function(e){n.setState({query:e.target.value})},n.state={query:"",results:[],isLoading:!0,userID:e.userID},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SPOONACULAR_APIKEY,a="https://api.spoonacular.com/recipes/search?apiKey=".concat(t,"=").concat(this.state.query,"&number=5&includeInstruction=true");E.a.get(a).then((function(t){e.setState({results:t.data,isLoading:!1})})),0!==this.state.results.length&&E.a.post("/recipe",this.state.results).then((function(e){console.log(this.state.results)}))}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"input-recipe"},r.a.createElement("h1",null,"Search Recipe:"),r.a.createElement("input",{type:"text",onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSearch},"Search Recipe")),r.a.createElement("div",{className:"search-results"},r.a.createElement(y,{results:this.state.results,userID:this.state.userID,handleDeleteRecipe:this.props.handleDeleteRecipe})))}}]),a}(r.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleLike=function(){var e=n.state.userID,t=n.state.id;if(0===e)return r.a.createElement(D.a,{to:"/login"});try{E.a.post("/saveRecipe",{recipe_id:t,user_id:e}).then((function(e){console.log(e)}))}catch(a){console.log("\ud83d\ude31 Axios request failed: ".concat(a))}},n.state={id:0,instructions:"",extendedIngredients:[],userID:e.userID},console.log("props.userID",e.userID),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a="https://api.spoonacular.com/recipes/".concat(t,"/information?apiKey=0fe88fb2905449f68ae3dd65d0cf47c0");E.a.get(a).then((function(a){if(e.setState({id:t,extendedIngredients:a.data.extendedIngredients,instructions:a.data.instructions}),0!==e.state.id){for(var n="",r=0;r<e.state.extendedIngredients.length;r++)n+=e.state.extendedIngredients[r].originalString+"ingredient-needed";E.a.post("/recipe/edit/".concat(e.state.id),{instructions:e.state.instructions,extendedIngredients:n}).then((function(e){console.log("instructions and extendedIngredients",n)}))}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"recipe"},r.a.createElement("div",null,r.a.createElement(b.b,{to:"/",className:"btn btn-info"},"Go Back to Search Page"),r.a.createElement("button",{onClick:this.handleLike,className:"btn btn-success"},"Save this recipe"),r.a.createElement("h2",null,"Ingredients:"),r.a.createElement("ol",{className:"list-group"},this.state.extendedIngredients.map((function(e){return r.a.createElement("li",{className:"list-group-item"},e.originalString)}))),r.a.createElement("h2",null,"Instructions:"),r.a.createElement("div",{className:"list-group-item"}," ",this.state.instructions)))}}]),a}(r.a.Component),N=a(21);function j(e){var t=e.formErrors;return r.a.createElement("div",{className:"formErrors"},Object.keys(t).map((function(e,a){return t[e].length>0?r.a.createElement("p",{key:a},e," ",t[e]):""})))}var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",username:"",formErrors:{email:"",password:"",username:"",repassword:""},emailValid:!1,passwordValid:!1,usernameValid:!1,repasswordValid:!1,formValid:!1,toHome:!1},e}return Object(l.a)(a,[{key:"signup",value:function(e){var t=this;console.log(this.props);try{E.a.post("http://localhost:4000/signUp",{email:this.state.email,password_digest:this.state.password,user_name:this.state.username}).then((function(e){alert(e.data.result),t.setState({toHome:!0})}))}catch(e){console.log("\ud83d\ude31 Axios request failed: ".concat(e))}}},{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.emailValid,r=this.state.passwordValid,s=this.state.repasswordValid,c=this.state.usernameValid;switch(e){case"username":c=t.length>=3,a.username=c?"":" must be greater than 3 characters";break;case"email":n=!!t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=n?"":" is invalid";break;case"password":r=t.length>=6,a.password=r?"":" is too short";break;case"repassword":s=t===this.state.password,a.repassword=s?"":" did not match with password"}this.setState({formErrors:a,usernameValid:c,emailValid:n,passwordValid:r,repasswordValid:s},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.usernameValid&&this.state.emailValid&&this.state.passwordValid&&this.state.repasswordValid})}},{key:"reset",value:function(){this.setState({reset:!0})}},{key:"handleUserInput",value:function(e){var t=this,a=e.target.name,n=e.target.value;this.setState(Object(N.a)({},a,n),(function(){t.validateField(a,n)}))}},{key:"render",value:function(){var e,t=this;return this.state.toHome?r.a.createElement(D.a,{to:"/"}):r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement(j,{formErrors:this.state.formErrors})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",id:"",onChange:function(e){return t.handleUserInput(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",onChange:function(e){return t.handleUserInput(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",(e={type:"password",className:"form-control",name:"",id:""},Object(N.a)(e,"name","password"),Object(N.a)(e,"onChange",(function(e){return t.handleUserInput(e)})),e))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Retype-Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"repassword",id:"",onChange:function(e){return t.handleUserInput(e)}})),r.a.createElement("button",{onClick:function(){return t.signup()},className:"btn btn-info",disabled:!this.state.formValid},"Sign Up"),r.a.createElement("button",{type:"reset",className:"btn btn-info"},"Reset"))}}]),a}(n.Component),C=a(25),R=a.n(C),x=a(43),_=a(77),L=a(44),U=a.n(L);function V(){var e=Object(i.a)(["\n    // .jumbotron {\n    //     background: url(",") no-repeat fixed bottom;\n    //     background-size: cover;\n    //     color: #ccc;\n    //     height: 200px;\n    //     position: relative;\n    //     z-index: -2;\n    // }\n    .overlay {\n        // background-color: #000;\n        // opacity: 0.6;\n        // position: absolute;\n        // top: 0;\n        // left: 0;\n        // bottom:0;\n        // right:0;\n        // z-index:-1;\n    }\n"]);return V=function(){return e},e}var q=h.a.div(V(),U.a),A=function(){return r.a.createElement(q,null,r.a.createElement(_.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(d.a,null,r.a.createElement("h1",null,"Welcome"),r.a.createElement("h3",null,"Recipes you saved"))))},P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleDelete=function(){},n.state={userID:e.userID,results:[],page:"account"},console.log(e.userID),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.userID,a="http://localhost:4000/savedRecipes/".concat(t);E.a.get(a).then((function(t){e.setState({results:t.data})}))}},{key:"getSavedRecipes",value:function(){var e=Object(x.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/savedRecipes/".concat(t),e.next=3,E.a.get(a);case 3:n=e.sent,this.setState({results:n.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",{className:"search-results"},r.a.createElement(y,{results:this.state.results,userID:this.state.userID,handleDeleteRecipe:this.props.handleDeleteRecipe})))}}]),a}(r.a.Component),K=(a(74),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home contact-us"},r.a.createElement("h2",null,"If you have any queries, please get in touch with us."),r.a.createElement("h3",null,r.a.createElement("i",{class:"fa fa-phone"}),r.a.createElement("a",{href:"tel:+61415786186"}," 0400 000 000")),r.a.createElement("h3",null,r.a.createElement("i",{class:"fa fa-envelope"})," ",r.a.createElement("a",{href:"mailto:enquiry@findrecipe.com"},"enquiry@findrecipe.com")))}}]),a}(r.a.Component)),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home contact-us"},r.a.createElement("h1",null,"Search Recipe"),r.a.createElement("p",null,"This is an app which provides you recipe information based on dish name you or ingredients. If you like the recipe, you can save it for future rerference purpose."))}}]),a}(r.a.Component);function H(){var e=Object(i.a)(["\n    .navbar {\n      background-color: #222;  \n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return H=function(){return e},e}var B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loginStatus:!1,userID:0,username:"",toHome:!1},e.handleLogin=function(t){!0===t.status&&e.setState({loginStatus:t.status,userID:t.userID,username:t.username})},e.handleDeleteRecipe=function(t){var a=t;E.a.post("/deleteRecipe/".concat(a),{userID:e.state.userID}).then((function(e){console.log("Deleted successfully")}))},e.handleLogOut=function(){if(e.setState({loginStatus:!1,userID:0,username:"",toHome:!0}),e.state.toHome)return r.a.createElement(D.a,{to:"/"})},e}return Object(l.a)(a,[{key:"displayLogin",value:function(){return!1===this.state.loginStatus?r.a.createElement("div",null,r.a.createElement(b.b,{to:{pathname:"/login",state:{from:"root"}}},"Login"),r.a.createElement(b.b,{to:"/signUp"},"Sign Up")):r.a.createElement("div",null,r.a.createElement(b.b,{to:"/account"},"Account"),r.a.createElement(b.b,{to:"#"},"Signed in as: ",this.state.username),r.a.createElement("button",{onClick:this.handleLogOut},"Log Out"))}},{key:"render",value:function(){var e=this;h.a.div(H());return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null,r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement(b.b,{to:"/"},"Home"),r.a.createElement(b.b,{to:"/aboutUs"},"About Us"),r.a.createElement(b.b,{to:"/contactUs"},"Contact Us"),r.a.createElement("div",{className:"login-info"},this.displayLogin()))),r.a.createElement("div",{className:"content"},r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"/",render:function(){return r.a.createElement(w,{userID:e.state.userID,handleDeleteRecipe:e.handleDeleteRecipe})}}),r.a.createElement(D.b,{path:"/show/:id",render:function(t){return r.a.createElement(S,Object.assign({},t,{userID:e.state.userID}))}}),r.a.createElement(D.b,{path:"/recipeByIngredients",render:function(){return r.a.createElement(O,{userID:e.state.userID,handleDeleteRecipe:e.handleDeleteRecipe})}}),r.a.createElement(D.b,{path:"/login",render:function(){return r.a.createElement(I,{handleLogin:e.handleLogin})}}),r.a.createElement(D.b,{path:"/signUp",component:k}),r.a.createElement(D.b,{path:"/aboutUs",component:T}),r.a.createElement(D.b,{path:"/contactUs",component:K}),r.a.createElement(D.b,{path:"/account",render:function(){return r.a.createElement(P,{userID:e.state.userID,handleDeleteRecipe:e.handleDeleteRecipe})}}))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Copyright"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.102e1b56.chunk.js.map