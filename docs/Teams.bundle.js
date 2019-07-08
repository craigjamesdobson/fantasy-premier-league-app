!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=50)}([function(e,t,a){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var a=0,n=e.length;a<n;a++)if(e[a]===t)return a;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!i.test(e))return e;return e.replace(r,o)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,i=/[&<>"'`=]/;function o(e){return n[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var a in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],a)&&(e[a]=arguments[t][a]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,a){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","message","name","number","stack"];function r(e,t){var a=t&&t.loc,i=void 0,o=void 0;a&&(e+=" - "+(i=a.start.line)+":"+(o=a.start.column));for(var l=Error.prototype.constructor.call(this,e),s=0;s<n.length;s++)this[n[s]]=l[n[s]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{a&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:o,enumerable:!0}):this.column=o)}catch(e){}}r.prototype=new Error,t.default=r,e.exports=t.default},function(e,t,a){"use strict";var n,r;a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r}),function(e){e[e.Goalkeeper=1]="Goalkeeper",e[e.Defender=2]="Defender",e[e.Midfielder=3]="Midfielder",e[e.Forward=4]="Forward"}(n||(n={})),function(e){e[e.GK=1]="GK",e[e.DEF=2]="DEF",e[e.MID=3]="MID",e[e.FWD=4]="FWD"}(r||(r={}))},function(e,t){var a;a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(a=window)}e.exports=a},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var r=a(0),i=n(a(1)),o=a(12),l=a(20),s=n(a(22));t.VERSION="4.1.2";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,t,a){this.helpers=e||{},this.partials=t||{},this.decorators=a||{},o.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===r.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple helpers");r.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===r.toString.call(e))r.extend(this.partials,e);else{if(void 0===t)throw new i.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===r.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple decorators");r.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=r.createFrame,t.logger=s.default},function(e,t){e.exports=jQuery},function(e,t,a){e.exports=a(11).default},,function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n,r=function(e,t,a,n){return new(a||(a=Promise))(function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new a(function(t){t(e.value)}).then(o,l)}s((n=n.apply(e,t||[])).next())})},i=function(e,t){var a,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};!function(e){e.getstaticData=function(){return r(this,void 0,void 0,function(){return i(this,function(e){return[2,new Promise(function(e,t){fetch("./fplData.json").then(function(t){200===t.status?t.json().then(function(t){e(t)}):console.log("Looks like there was a problem. Status Code: "+t.status)}).catch(function(e){console.log("Fetch Error :-S",e)})})]})})}}(n||(n={}))},function(e,t,a){"use strict";var n,r="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",i=function(){function e(e){switch(this.id=e.id,this.image=r+e.code+".png",this.availabilityType=e.status,this.teamID=e.team,this.price=this.getPlayerCost(e.now_cost,e.cost_change_start_fall),this.name=e.web_name,this.playerType=e.element_type,this.teamID){case 1:this.teamName="Arsenal",this.teamShort="ARS";break;case 2:case 3:this.teamName="Bournemouth",this.teamShort="BOU";break;case 4:this.teamName="Brighton and Hove Albion",this.teamShort="BHA";break;case 5:this.teamName="Burnley",this.teamShort="BUR";break;case 6:this.teamName="Chelsea",this.teamShort="CHE";break;case 7:this.teamName="Crystal Palace",this.teamShort="CRY";break;case 8:this.teamName="Everton",this.teamShort="EVE";break;case 9:this.teamName="Leicester",this.teamShort="LEI";break;case 10:this.teamName="Liverpool",this.teamShort="LIV";break;case 11:this.teamName="Manchester City",this.teamShort="MNC";break;case 12:this.teamName="Manchester United",this.teamShort="MNU";break;case 13:this.teamName="Newcastle",this.teamShort="NEW";break;case 14:this.teamName="Norwich",this.teamShort="NOR";break;case 15:this.teamName="Sheffield United",this.teamShort="SHU";break;case 16:this.teamName="Southampton",this.teamShort="SOU";break;case 17:this.teamName="Tottenham Hotspur",this.teamShort="TOT";break;case 18:this.teamName="Watford",this.teamShort="WAT";break;case 19:this.teamName="West Ham",this.teamShort="WHU";break;case 20:this.teamName="Wolves",this.teamShort="WOL"}switch(!0){case"u"===this.availabilityType||"i"===this.availabilityType||"n"===this.availabilityType:this.isUnavailable=!0,this.availabilityNews=e.news;break;default:this.isUnavailable=!1}switch(!0){case"u"===this.availabilityType:this.unavailableForSeason=!0,this.availabilityNews=e.news;break;default:this.unavailableForSeason=!1}}return e.prototype.getPlayerCost=function(e,t){return((e+t)/10).toFixed(1)},e}(),o=function(){function e(e){this.players=e}return e.prototype.getFilteredPlayersOfType=function(e,t){var a=this.getPlayersOfType(e).filter(function(a){return a.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().indexOf(t)>-1&&a.playerType===e}),n=Math.ceil(a.length/2);return[a.slice(0,n),a.slice(n)]},e.prototype.getPlayersOfType=function(e){return this.players.filter(function(t){return t.playerType===e})},e.prototype.getSplitPlayersOfType=function(e){var t=this.getPlayersOfType(e),a=Math.floor(t.length/2);return[t.slice(0,a),t.slice(a)]},e}();a.d(t,"a",function(){return n}),function(e){(n||(n={})).createPlayerData=function(e){var t=e.elements.map(function(e){return new i(e)});return new o(t)}}()},,function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.__esModule=!0;var i=r(a(4)),o=n(a(23)),l=n(a(1)),s=r(a(0)),u=r(a(24)),c=n(a(25));function f(){var e=new i.HandlebarsEnvironment;return s.extend(e,i),e.SafeString=o.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var h=f();h.create=f,c.default(h),h.default=h,t.default=h,e.exports=t.default},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){r.default(e),i.default(e),o.default(e),l.default(e),s.default(e),u.default(e),c.default(e)};var r=n(a(13)),i=n(a(14)),o=n(a(15)),l=n(a(16)),s=n(a(17)),u=n(a(18)),c=n(a(19))},function(e,t,a){"use strict";t.__esModule=!0;var n=a(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,a){var r=a.inverse,i=a.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(n.isArray(t))return t.length>0?(a.ids&&(a.ids=[a.name]),e.helpers.each(t,a)):r(this);if(a.data&&a.ids){var o=n.createFrame(a.data);o.contextPath=n.appendContextPath(a.data.contextPath,a.name),a={data:o}}return i(t,a)})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var n=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a(1));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new r.default("Must pass iterator to #each");var a=t.fn,i=t.inverse,o=0,l="",s=void 0,u=void 0;function c(t,r,i){s&&(s.key=t,s.index=r,s.first=0===r,s.last=!!i,u&&(s.contextPath=u+t)),l+=a(e[t],{data:s,blockParams:n.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(s=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var f=e.length;o<f;o++)o in e&&c(o,o,o===e.length-1);else{var h=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==h&&c(h,o-1),h=p,o++);void 0!==h&&c(h,o-1,!0)}return 0===o&&(l=i(this)),l})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(1));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new n.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var n=a(0);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,a){return e.helpers.if.call(this,t,{fn:a.inverse,inverse:a.fn,hash:a.hash})})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],a=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var r=1;null!=a.hash.level?r=a.hash.level:a.data&&null!=a.data.level&&(r=a.data.level),t[0]=r,e.log.apply(e,t)})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e?"constructor"!==t||e.propertyIsEnumerable(t)?e[t]:void 0:e})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var n=a(0);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var a=t.fn;if(n.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),a(e,{data:r,blockParams:n.blockParams([e],[r&&r.contextPath])})})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){n.default(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(a(21))},function(e,t,a){"use strict";t.__esModule=!0;var n=a(0);t.default=function(e){e.registerDecorator("inline",function(e,t,a,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var o=a.partials;a.partials=n.extend({},o,t.partials);var l=e(r,i);return a.partials=o,l}),t.partials[r.args[0]]=r.fn,i})},e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0;var n=a(0),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(r.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=r.lookupLevel(e),"undefined"!=typeof console&&r.lookupLevel(r.level)<=e){var t=r.methodMap[e];console[t]||(t="log");for(var a=arguments.length,n=Array(a>1?a-1:0),i=1;i<a;i++)n[i-1]=arguments[i];console[t].apply(console,n)}}};t.default=r,e.exports=t.default},function(e,t,a){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,a){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,a=i.COMPILER_REVISION;if(t!==a){if(t<a){var n=i.REVISION_CHANGES[a],o=i.REVISION_CHANGES[t];throw new r.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new r.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new r.default("No environment passed to template");if(!e||!e.main)throw new r.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var a={strict:function(e,t){if(!(t in e))throw new r.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var a=e.length,n=0;n<a;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:n.escapeExpression,invokePartial:function(a,i,o){o.hash&&(i=n.extend({},i,o.hash),o.ids&&(o.ids[0]=!0));a=t.VM.resolvePartial.call(this,a,i,o);var l=t.VM.invokePartial.call(this,a,i,o);null==l&&t.compile&&(o.partials[o.name]=t.compile(a,e.compilerOptions,t),l=o.partials[o.name](i,o));if(null!=l){if(o.indent){for(var s=l.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=o.indent+s[u];l=s.join("\n")}return l}throw new r.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var a=e[t];return a.decorator=e[t+"_d"],a},programs:[],program:function(e,t,a,n,r){var i=this.programs[e],l=this.fn(e);return t||r||n||a?i=o(this,e,l,t,a,n,r):i||(i=this.programs[e]=o(this,e,l)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var a=e||t;return e&&t&&e!==t&&(a=n.extend({},t,e)),a},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function l(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=n.data;l._setup(n),!n.partial&&e.useData&&(r=function(e,t){t&&"root"in t||((t=t?i.createFrame(t):{}).root=e);return t}(t,r));var o=void 0,u=e.useBlockParams?[]:void 0;function c(t){return""+e.main(a,t,a.helpers,a.partials,r,u,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(c=s(e.main,c,a,n.depths||[],r,u))(t,n)}return l.isTop=!0,l._setup=function(n){n.partial?(a.helpers=n.helpers,a.partials=n.partials,a.decorators=n.decorators):(a.helpers=a.merge(n.helpers,t.helpers),e.usePartial&&(a.partials=a.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=a.merge(n.decorators,t.decorators)))},l._child=function(t,n,i,l){if(e.useBlockParams&&!i)throw new r.default("must pass block params");if(e.useDepths&&!l)throw new r.default("must pass parent depths");return o(a,t,e[t],n,0,i,l)},l},t.wrapProgram=o,t.resolvePartial=function(e,t,a){e?e.call||a.name||(a.name=e,e=a.partials[e]):e="@partial-block"===a.name?a.data["partial-block"]:a.partials[a.name];return e},t.invokePartial=function(e,t,a){var o=a.data&&a.data["partial-block"];a.partial=!0,a.ids&&(a.data.contextPath=a.ids[0]||a.data.contextPath);var s=void 0;a.fn&&a.fn!==l&&function(){a.data=i.createFrame(a.data);var e=a.fn;s=a.data["partial-block"]=function(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return a.data=i.createFrame(a.data),a.data["partial-block"]=o,e(t,a)},e.partials&&(a.partials=n.extend({},a.partials,e.partials))}();void 0===e&&s&&(e=s);if(void 0===e)throw new r.default("The partial "+a.name+" could not be found");if(e instanceof Function)return e(t,a)},t.noop=l;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0)),r=function(e){return e&&e.__esModule?e:{default:e}}(a(1)),i=a(4);function o(e,t,a,n,r,i,o){function l(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(l=[t].concat(o)),a(e,t,e.helpers,e.partials,r.data||n,i&&[r.blockParams].concat(i),l)}return(l=s(a,l,e,o,n,i)).program=t,l.depth=o?o.length:0,l.blockParams=r||0,l}function l(){return""}function s(e,t,a,r,i,o){if(e.decorator){var l={};t=e.decorator(t,l,a,r&&r[0],i,o,r),n.extend(t,l)}return t}},function(e,t,a){"use strict";(function(a){t.__esModule=!0,t.default=function(e){var t=void 0!==a?a:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(this,a(3))},,,,function(e,t,a){"use strict";var n=function(){return function(e){this.transferId=e.transfer_id,this.transferWeek=e.transfer_week}}(),r=function(){return function(e){this.playerID=e.player_id,this.transfers=e.transfers.map(function(e){return new n(e)})}}(),i=function(){return function(e){this.teamID=e.team_id,this.teamName=e.team_name,this.allowedTransfers=e.allowed_transfers,this.teamPlayers=e.team_players.map(function(e){return new r(e)})}}();a.d(t,"a",function(){return o});var o,l=function(e,t,a,n){return new(a||(a=Promise))(function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new a(function(t){t(e.value)}).then(o,l)}s((n=n.apply(e,t||[])).next())})},s=function(e,t){var a,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};!function(e){(o||(o={})).getDraftedTeamData=function(){return l(this,void 0,void 0,function(){return s(this,function(e){return[2,new Promise(function(e,t){fetch("./FantasyTeams.json").then(function(a){200!==a.status&&t("Looks like there was a problem. Status Code:  "+a.status),a.json().then(function(t){var a=t.drafted_teams.map(function(e){return new i(e)});e(a)})}).catch(function(e){alert("fetch error "+e)})})]})})}}()},function(e,t,a){"use strict";var n,r=function(){return function(e){this.teamID=e.id,this.teamCode=e.code,this.teamName=e.name,this.teamNameShort=e.short_name}}(),i=function(){return function(e){this.teams=e}}();a.d(t,"a",function(){return n}),function(e){(n||(n={})).createTeamData=function(e){var t=e.teams.map(function(e){return new r(e)});return new i(t)}}()},function(e,t,a){"use strict";var n=a(2),r=function(){return function(e,t){this.playerId=e.id,this.playerName=e.name,this.playerPosition=n.b[e.playerType],this.playerTeamId=e.teamID,this.playerTeamName=e.teamName,this.playerTeamShort=e.teamShort,this.isUnAvailable=e.isUnavailable,this.playerStatus=e.availabilityType,this.playerPrice=e.price,this.transfers=t}}();a.d(t,"a",function(){return i});var i=function(){return function(e,t){this.teamID=e.teamID,this.teamName=e.teamName,this.invalidErrorMsg=[],this.isInvalidTeam=!1,this.allowedTransfers=e.allowedTransfers,this.teamValueAllowed=this.allowedTransfers?80:90,this.teamPlayers=t.map(function(e){return new r(e.player,e.transfers)}),this.totalTeamValue=this.teamPlayers.reduce(function(e,t){return e+parseInt(t.playerPrice,10)},0);for(var a=0,n=0,i=0,o=0,l=0,s=this.teamPlayers;l<s.length;l++)switch(s[l].playerPosition){case"GK":a++;break;case"DEF":n++;break;case"MID":i++;break;case"FWD":o++}a>1&&(this.isInvalidTeam=!0,this.invalidErrorMsg.push("There are too many goalkeepers in the team")),n>4&&(this.isInvalidTeam=!0,this.invalidErrorMsg.push("There are too many defenders in the team")),i>3&&(this.isInvalidTeam=!0,this.invalidErrorMsg.push("There are too many midfielders in the team")),o>4&&(this.isInvalidTeam=!0,this.invalidErrorMsg.push("There are too many fowards in the team")),this.totalTeamValue>this.teamValueAllowed&&(this.isInvalidTeam=!0,this.invalidErrorMsg.push("The team value exceeds the "+this.teamValueAllowed+" million limit"))}}()},,function(e,t,a){},,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"draftedTeams",function(){return h});a(33),a(51);var n=a(31),r=a(9),i=a(30),o=a(29),l=a(8),s=function(e,t,a,n){return new(a||(a=Promise))(function(r,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?r(e.value):new a(function(t){t(e.value)}).then(o,l)}s((n=n.apply(e,t||[])).next())})},u=function(e,t){var a,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},c=a(53),f=e(".teams-container"),h=[];l.a.getstaticData().then(function(t){return s(void 0,void 0,void 0,function(){return u(this,function(a){switch(a.label){case 0:return[4,function(e){return s(this,void 0,void 0,function(){var t=this;return u(this,function(a){return[2,new Promise(function(a){return s(t,void 0,void 0,function(){var t;return u(this,function(r){switch(r.label){case 0:return[4,o.a.getDraftedTeamData()];case 1:return t=r.sent(),h=t.map(function(t){var a=t.teamPlayers.map(function(t){return{player:e.players.filter(function(e){return e.id===t.playerID})[0],transfers:t.transfers}});return new n.a(t,a)}),f.append(c(h)),a(),[2]}})})})]})})}(r.a.createPlayerData(t))];case 1:return a.sent(),i.a.createTeamData(t),e(".loading").hide(),[2]}})})})}.call(this,a(5))},function(e,t,a){},,function(e,t,a){var n=a(6);e.exports=(n.default||n).template({1:function(e,t,a,n,r){var i,o,l=null!=t?t:e.nullContext||{},s=a.helperMissing,u=e.escapeExpression;return'    <div class="col-xs-12 col-md-3">\r\n        <table class="table mb-2 mt-4">\r\n            <tbody>\r\n                <tr class="header-row drafted-team-name '+(null!=(i=a.if.call(l,null!=t?t.isInvalidTeam:t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.noop,data:r}))?i:"")+'" data-id="'+u("function"==typeof(o=null!=(o=a.teamID||(null!=t?t.teamID:t))?o:s)?o.call(l,{name:"teamID",hash:{},data:r}):o)+'">\r\n                    <th colspan="5">\r\n                        '+u("function"==typeof(o=null!=(o=a.teamName||(null!=t?t.teamName:t))?o:s)?o.call(l,{name:"teamName",hash:{},data:r}):o)+" "+(null!=(i=a.if.call(l,null!=t?t.allowedTransfers:t,{name:"if",hash:{},fn:e.program(4,r,0),inverse:e.noop,data:r}))?i:"")+"\r\n                        "+(null!=(i=a.if.call(l,null!=t?t.isInvalidTeam:t,{name:"if",hash:{},fn:e.program(6,r,0),inverse:e.noop,data:r}))?i:"")+"\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th>ID</th>\r\n                    <th>Position</th>\r\n                    <th>Team</th>\r\n                    <th>Name</th>\r\n                    <th>Price</th>\r\n                </tr>\r\n"+(null!=(i=a.each.call(l,null!=t?t.teamPlayers:t,{name:"each",hash:{},fn:e.program(8,r,0),inverse:e.noop,data:r}))?i:"")+'                <tr class="total-team-value-row">\r\n                    <td colspan="3"></td>\r\n                    <th>Total</th>\r\n                    <td class="total-team-value">'+u("function"==typeof(o=null!=(o=a.totalTeamValue||(null!=t?t.totalTeamValue:t))?o:s)?o.call(l,{name:"totalTeamValue",hash:{},data:r}):o)+"</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n"+(null!=(i=a.if.call(l,null!=t?t.isInvalidTeam:t,{name:"if",hash:{},fn:e.program(15,r,0),inverse:e.noop,data:r}))?i:"")+"    </div>\r\n"},2:function(e,t,a,n,r){return"invalid-team"},4:function(e,t,a,n,r){return'<i class="fas fa-exchange-alt icon-transfer"\r\n                            title="Transfers allowed"></i>'},6:function(e,t,a,n,r){var i;return'<span class="invalid-team-warning">'+e.escapeExpression("function"==typeof(i=null!=(i=a.teamName||(null!=t?t.teamName:t))?i:a.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"teamName",hash:{},data:r}):i)+" IS INVALID!</span>"},8:function(e,t,a,n,r){var i,o,l=null!=t?t:e.nullContext||{},s=a.helperMissing,u="function",c=e.escapeExpression;return'                <tr class="player-total-data '+c(typeof(o=null!=(o=a.playerStatus||(null!=t?t.playerStatus:t))?o:s)===u?o.call(l,{name:"playerStatus",hash:{},data:r}):o)+'" data-player-price="'+c(typeof(o=null!=(o=a.playerPrice||(null!=t?t.playerPrice:t))?o:s)===u?o.call(l,{name:"playerPrice",hash:{},data:r}):o)+'"\r\n                    data-player-id="'+c(typeof(o=null!=(o=a.playerId||(null!=t?t.playerId:t))?o:s)===u?o.call(l,{name:"playerId",hash:{},data:r}):o)+'"\r\n                    '+(null!=(i=a.if.call(l,null!=t?t.transfers:t,{name:"if",hash:{},fn:e.program(9,r,0),inverse:e.noop,data:r}))?i:"")+'>\r\n                    <td class="id" data-original-id="'+c(typeof(o=null!=(o=a.playerId||(null!=t?t.playerId:t))?o:s)===u?o.call(l,{name:"playerId",hash:{},data:r}):o)+'">'+c(typeof(o=null!=(o=a.playerId||(null!=t?t.playerId:t))?o:s)===u?o.call(l,{name:"playerId",hash:{},data:r}):o)+'</td>\r\n                    <td class="position" data-original-position="'+c(typeof(o=null!=(o=a.playerPosition||(null!=t?t.playerPosition:t))?o:s)===u?o.call(l,{name:"playerPosition",hash:{},data:r}):o)+'">'+c(typeof(o=null!=(o=a.playerPosition||(null!=t?t.playerPosition:t))?o:s)===u?o.call(l,{name:"playerPosition",hash:{},data:r}):o)+'</td>\r\n                    <td class="club" data-original-team="'+c(typeof(o=null!=(o=a.playerTeamShort||(null!=t?t.playerTeamShort:t))?o:s)===u?o.call(l,{name:"playerTeamShort",hash:{},data:r}):o)+'">'+c(typeof(o=null!=(o=a.playerTeamShort||(null!=t?t.playerTeamShort:t))?o:s)===u?o.call(l,{name:"playerTeamShort",hash:{},data:r}):o)+'</td>\r\n                    <td class="player" data-original-name="'+c(typeof(o=null!=(o=a.playerName||(null!=t?t.playerName:t))?o:s)===u?o.call(l,{name:"playerName",hash:{},data:r}):o)+'">'+c(typeof(o=null!=(o=a.playerName||(null!=t?t.playerName:t))?o:s)===u?o.call(l,{name:"playerName",hash:{},data:r}):o)+'</td>\r\n                    <td class="price">'+c(typeof(o=null!=(o=a.playerPrice||(null!=t?t.playerPrice:t))?o:s)===u?o.call(l,{name:"playerPrice",hash:{},data:r}):o)+"</td>\r\n                </tr>\r\n"},9:function(e,t,a,n,r){var i;return'data-transfer="'+(null!=(i=a.each.call(null!=t?t:e.nullContext||{},null!=t?t.transfers:t,{name:"each",hash:{},fn:e.program(10,r,0),inverse:e.noop,data:r}))?i:"")+'"\r\n                    '},10:function(e,t,a,n,r){var i,o,l=null!=t?t:e.nullContext||{},s=a.helperMissing,u=e.escapeExpression;return u("function"==typeof(o=null!=(o=a.transferWeek||(null!=t?t.transferWeek:t))?o:s)?o.call(l,{name:"transferWeek",hash:{},data:r}):o)+"|"+u("function"==typeof(o=null!=(o=a.transferId||(null!=t?t.transferId:t))?o:s)?o.call(l,{name:"transferId",hash:{},data:r}):o)+(null!=(i=a.if.call(l,r&&r.last,{name:"if",hash:{},fn:e.program(11,r,0),inverse:e.program(13,r,0),data:r}))?i:"")},11:function(e,t,a,n,r){return""},13:function(e,t,a,n,r){return","},15:function(e,t,a,n,r){var i;return'        <ul class="error-list list-group">\r\n'+(null!=(i=a.each.call(null!=t?t:e.nullContext||{},null!=t?t.invalidErrorMsg:t,{name:"each",hash:{},fn:e.program(16,r,0),inverse:e.noop,data:r}))?i:"")+"        </ul>\r\n"},16:function(e,t,a,n,r){return'                <li class="d-flex align-items-center mb-1 small">\r\n                    <i class="fas fa-exclamation-circle mr-2"></i>\r\n                    '+e.escapeExpression(e.lambda(t,t))+"\r\n                </li>\r\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i;return'<div class="row">\r\n'+(null!=(i=a.each.call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?i:"")+"</div>"},useData:!0})}]);
//# sourceMappingURL=Teams.bundle.js.map