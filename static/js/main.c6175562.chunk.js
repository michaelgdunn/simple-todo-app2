(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),l=n.n(r),c=n(5),i=n(1),s=n(2),d=n(4),p=n(3),u=n(17),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,o=t.id,r=t.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.props.handleChangeProps(o)}}),a.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(o)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),n}(a.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.todos.map((function(t){return a.a.createElement(m,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),n}(a.a.Component),f=function(){return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},b=n(8),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},a.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:this.state.title,name:"title",onChange:this.onChange}),a.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))}}]),n}(o.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:Object(u.a)(),title:"Setup development environment",completed:!0},{id:Object(u.a)(),title:"Develop website and add content",completed:!1},{id:Object(u.a)(),title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){console.log("clicked",t),e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteTodo=function(t){console.log("deleted: ",t),e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){var n={id:Object(u.a)(),completed:!1,title:t};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(f,null),a.a.createElement(v,{addTodoProps:this.addTodoItem}),a.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.deleteTodo}))}}]),n}(a.a.Component);n(14);l.a.render(a.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c6175562.chunk.js.map