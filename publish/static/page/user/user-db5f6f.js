webpackJsonp([4],{55:function(e,t){"use strict";function a(e,t,a){var r="";if(a)r="top";else if(t)r="good";else switch(e){case"share":r="share";break;case"ask":r="ask";break;case"job":r="job";break;default:r="default"}return r}function r(e){var t="";switch(e){case"share":t="分享";break;case"ask":t="问答";break;case"job":t="招聘";break;case"good":t="精华";break;default:t="全部"}return t}function n(e,t,a){var r="";if(a)r="置顶";else if(t)r="精华";else switch(e){case"share":r="分享";break;case"ask":r="问答";break;case"job":r="招聘";break;default:r="暂无"}return r}function l(e,t){return t?o(new Date-new Date(e)):c(new Date(e),"yyyy-MM-dd hh:mm")}function s(e){if(!e)return[];var t=[/```.+?```/g,/^```[\s\S]+?^```/gm,/`[\s\S]+?`/g,/^    .*/gm,/\b\S*?@[^\s]*?\..+?\b/g,/\[@.+?\]\(\/.+?\)/g];t.forEach((function(t){e=e.replace(t,"")}));var a=e.match(/@[a-z0-9\-_]+\b/gim),r=[],n={};if(a)for(var l=0,s=a.length;l<s;l++){var u=a[l];u=u.slice(1),n.hasOwnProperty(u)||(r.push(u),n[u]=!0)}return r}function u(e){for(var t=s(e),a=0,r=t.length;a<r;a++){var n=t[a];e=e.replace(new RegExp("@"+n+"\\b(?!\\])","g"),"[@"+n+"](/user/"+n+")")}return e}function c(e,t){var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in a)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[r]:("00"+a[r]).substr((""+a[r]).length)));return t}function o(e){var t=parseFloat(e)/1e3,a="";return null!=t&&""!=t&&(a=t>60&&t<3600?parseInt(t/60)+" 分钟前":t>=3600&&t<86400?parseInt(t/3600)+" 小时前":t>=86400&&t<2592e3?parseInt(t/86400)+" 天前":t>=2592e3&&t<31536e3?parseInt(t/2592e3)+" 个月前":t>=31536e3?parseInt(t/31536e3)+" 年前":parseInt(t)+" 秒前"),a}Object.defineProperty(t,"__esModule",{value:!0}),t.getTabClassName=a,t.getTitleByTab=r,t.getTabStr=n,t.getLastTimeStr=l,t.fetchUsers=s,t.linkUsers=u,t.fmtDate=c,t.MillisecondToDate=o},91:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function r(n,l){try{var s=t[n](l),u=s.value}catch(c){return void a(c)}return s.done?void e(u):Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}))}return r("next")})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=(function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}})(),i=a(38),f=n(i),p=a(92),d=r(p),m=a(93),g=n(m),h=(function(e){function t(){var e,a,r,n;s(this,t);for(var l=arguments.length,c=Array(l),o=0;o<l;o++)c[o]=arguments[o];return a=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.KeepAlive=!0,r.View=g["default"],r.Model=d,r.handleTypeChange=function(e){var t=e.currentTarget,a=r.store.actions.CHANGE_TYPE,n=t.getAttribute("data-type");a(n)},n=a,u(r,n)}return c(t,e),o(t,[{key:"componentWillCreate",value:(function(){function e(){return t.apply(this,arguments)}var t=l(regeneratorRuntime.mark((function a(){var e,t,r,n,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.store.actions.COMPONENT_WILL_CREATE,t=this.store.getState(),r=t.location.params.loginname,a.next=5,this.get("/user/"+r);case 5:n=a.sent,l=n.data,e({user:l});case 8:case"end":return a.stop()}}),a,this)})));return e})()}]),t})(f["default"]);t["default"]=h},92:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHANGE_TYPE=t.COMPONENT_WILL_CREATE=t.initialState=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(54);t.initialState={pageTitle:"用户",user:null,type:"replies",currentData:[]},t.COMPONENT_WILL_CREATE=function(e,t){var a=t.user;return e=(0,n.UPDATE_HTML_TITLE)(e,a.loginname),r({},e,{user:a})},t.CHANGE_TYPE=function(e,t){return r({},e,{type:t})}},93:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e){var t=e.state,a=e.handlers,r=t.user,n=t.type,u=r["recent_"+n]||[];return p["default"].createElement(v["default"],null,p["default"].createElement(l,{user:r}),p["default"].createElement(s,{type:n,currentData:u,onChange:a.handleTypeChange}))}function l(e){var t=e.user;return p["default"].createElement("section",{className:"userinfo"},p["default"].createElement("img",{className:"u-img",src:t.avatar_url}),p["default"].createElement("br",null),p["default"].createElement("span",{className:"u-name"},t.loginname),p["default"].createElement("div",{className:"u-bottom"},p["default"].createElement("span",{className:"u-time"},(0,E.getLastTimeStr)(t.create_at,!1)),p["default"].createElement("span",{className:"u-score"},"积分：",t.score)))}function s(e){var t=e.currentData,a=e.type,r=e.onChange;return p["default"].createElement("section",{className:"topics"},p["default"].createElement("ul",{className:"user-tabs"},p["default"].createElement(u,{type:"replies",selected:"replies"===a,onChange:r},"最近回复"),p["default"].createElement(u,{type:"topics",selected:"topics"===a,onChange:r},"最新发布")),p["default"].createElement(c,{list:t}))}function u(e){var t=e.type,a=e.selected,r=e.children,n=e.onChange,l=(0,m["default"])({item:!0,br:!0,selected:a});return p["default"].createElement("li",{className:l,"data-type":t,onClick:n},r)}function c(e){var t=e.list;return t&&0!==t.length?p["default"].createElement("div",null,t.map((function(e){return p["default"].createElement(o,i({},e,{key:e.id}))}))):p["default"].createElement("div",{className:"no-data"},p["default"].createElement("i",{className:"iconfont icon-empty"},""),"暂无数据!")}function o(e){var t=e.id,a=e.title,r=e.author,n=e.last_reply_at;return p["default"].createElement("div",{className:"message markdown-body"},p["default"].createElement("section",{className:"user"},p["default"].createElement(g.Link,{as:"img",className:"head",src:r.avatar_url,to:"/user/"+r.loginname}),p["default"].createElement(g.Link,{as:"div",to:"/topic/"+t,style:{width:"100%"}},p["default"].createElement("div",{className:"t-title"},a),p["default"].createElement("span",{className:"cl"},p["default"].createElement("span",{className:"name"},r.loginname)),p["default"].createElement("span",{className:"cr"},p["default"].createElement("span",{className:"name"},(0,E.getLastTimeStr)(n,!0))))))}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t["default"]=n;var f=a(2),p=r(f),d=a(61),m=r(d),g=a(58),h=a(69),v=r(h),E=a(55)}});