(function(e){function t(t){for(var n,i,c=t[0],l=t[1],s=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(d,i)&&d[i]&&p.push(d[i][0]),d[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);a&&a(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var l=o[c];0!==d[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},d={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/todo-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var a=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),d=o.n(n);d.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("md-card",[o("md-card-header",{staticClass:"header"},[o("div",{staticClass:"md-title"},[e._v("First Things First")]),o("div",{staticClass:"md-subhead"},[e._v("A simple todo-list app")])]),o("md-card-content",[o("md-field",[o("md-input",{attrs:{placeholder:"ADD A TODO..."},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1),o("div",{staticClass:"todo-list"},[o("ul",{staticClass:"todos"},e._l(e.todos,(function(t){return o("li",{key:t.id,staticClass:"todo-item"},[o("span",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"completed",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:[function(o){var n=t.completed,d=o.target,r=!!d.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);d.checked?c<0&&e.$set(t,"completed",n.concat([i])):c>-1&&e.$set(t,"completed",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(t,"completed",r)},e.toggleCompleted]}}),!1===t.editing?o("span",{staticClass:"todo-item-label",class:{"is-complete":t.completed},on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.label))]):e._e(),t.editing?o("div",[o("md-field",[o("md-input",{attrs:{type:"text",placeholder:"EDIT TODO..."},on:{keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.stopEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:e.stopEdit(t)}],focusout:function(o){return e.stopEdit(t)}},model:{value:t.label,callback:function(o){e.$set(t,"label",o)},expression:"todo.label"}})],1)],1):e._e()]),o("span",{staticClass:"actions"},[o("md-button",{staticClass:"btn-edit",on:{click:function(o){return e.editTodo(t)}}},[o("md-icon",[e._v("edit")])],1),o("md-button",{staticClass:"btn-delete",on:{click:function(o){return e.removeTodo(t)}}},[o("md-icon",[e._v("delete")])],1)],1)])})),0)])],1)],1)],1)},r=[],i=(o("c975"),o("a434"),{data:function(){return{todos:[],currentTodo:"",editedTodo:""}},methods:{addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,editing:!1}),this.currentTodo=""},toggleCompleted:function(){this.todo.completed=!this.todo.completed},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1)},editTodo:function(e){e.editing=!0},stopEdit:function(e){e.editing=!1}}}),c=i,l=(o("034f"),o("2877")),s=Object(l["a"])(c,d,r,!1,null,null,null),a=s.exports,u=o("9c30");o("51de");n["default"].use(u["MdField"]),n["default"].use(u["MdButton"]),n["default"].use(u["MdCard"]),n["default"].use(u["MdCheckbox"]),n["default"].use(u["MdIcon"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(a)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.ea107c5a.js.map