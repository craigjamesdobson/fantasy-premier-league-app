!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=42)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=l,e.indexOf=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!o.test(t))return t;return t.replace(r,i)},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=l({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(t){return a[t]}function l(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var s=Object.prototype.toString;e.toString=s;var u=function(t){return"function"==typeof t};u(/x/)&&(e.isFunction=u=function(t){return"function"==typeof t&&"[object Function]"===s.call(t)}),e.isFunction=u;var c=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===s.call(t)};e.isArray=c},function(t,e,n){"use strict";e.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];function r(t,e){var n=e&&e.loc,o=void 0,i=void 0;n&&(t+=" - "+(o=n.start.line)+":"+(i=n.start.column));for(var l=Error.prototype.constructor.call(this,t),s=0;s<a.length;s++)this[a[s]]=l[a[s]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{n&&(this.lineNumber=o,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(t){}}r.prototype=new Error,e.default=r,t.exports=e.default},function(t,e){t.exports=jQuery},function(t,e,n){"use strict";var a,r;n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r}),function(t){t[t.Goalkeeper=1]="Goalkeeper",t[t.Defender=2]="Defender",t[t.Midfielder=3]="Midfielder",t[t.Forward=4]="Forward"}(a||(a={})),function(t){t[t.GK=1]="GK",t[t.DEF=2]="DEF",t[t.MID=3]="MID",t[t.FWD=4]="FWD"}(r||(r={}))},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=u;var r=n(0),o=a(n(1)),i=n(25),l=n(17),s=a(n(15));e.VERSION="4.0.11";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(t,e){if("[object Object]"===r.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple helpers");r.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===r.toString.call(t))r.extend(this.partials,t);else{if(void 0===e)throw new o.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===r.toString.call(t)){if(e)throw new o.default("Arg not supported with multiple decorators");r.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var c=s.default.log;e.log=c,e.createFrame=r.createFrame,e.logger=s.default},function(t,e,n){t.exports=n(26).default},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a,r=function(t,e,n,a){return new(n||(n=Promise))(function(r,o){function i(t){try{s(a.next(t))}catch(t){o(t)}}function l(t){try{s(a.throw(t))}catch(t){o(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,l)}s((a=a.apply(t,e||[])).next())})},o=function(t,e){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=a[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};!function(t){t.getstaticData=function(){return r(this,void 0,void 0,function(){return o(this,function(t){return[2,new Promise(function(t,e){fetch("https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json").then(function(e){200===e.status?e.json().then(function(e){t(e)}):console.log("Looks like there was a problem. Status Code: "+e.status)}).catch(function(t){console.log("Fetch Error :-S",t)})})]})})}}(a||(a={}))},function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){function t(t){this.players=t}return t.prototype.getPlayersOfType=function(t){return this.players.filter(function(e){return e.playerType===t})},t.prototype.getSplitPlayersOfType=function(t){var e=this.getPlayersOfType(t),n=Math.floor(e.length/2);return[e.slice(0,n),e.slice(n)]},t}()},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",r=function(){function t(t){switch(this.id=t.id,this.image=a+t.code+".png",this.availabilityType=t.status,this.teamID=t.team,this.price=this.getPlayerCost(t.now_cost,t.cost_change_start_fall),this.name=t.web_name,this.playerType=t.element_type,this.teamID){case 1:this.teamName="Arsenal",this.teamShort="ARS";break;case 2:this.teamName="Bournemouth",this.teamShort="BOU";break;case 3:this.teamName="Brighton and Hove Albion",this.teamShort="BHA";break;case 4:this.teamName="Burnley",this.teamShort="BUR";break;case 5:this.teamName="Chelsea",this.teamShort="CHE";break;case 6:this.teamName="Crystal Palace",this.teamShort="CRY";break;case 7:this.teamName="Everton",this.teamShort="EVE";break;case 8:this.teamName="Huddersfield Town",this.teamShort="HUD";break;case 9:this.teamName="Leicester City",this.teamShort="LEI";break;case 10:this.teamName="Liverpool",this.teamShort="LIV";break;case 11:this.teamName="Manchester City",this.teamShort="MNC";break;case 12:this.teamName="Manchester United",this.teamShort="MNU";break;case 13:this.teamName="Newcastle United",this.teamShort="NEW";break;case 14:this.teamName="Southampton",this.teamShort="SOU";break;case 15:this.teamName="Stoke City",this.teamShort="STO";break;case 16:this.teamName="Swansea City",this.teamShort="SWA";break;case 17:this.teamName="Tottenham Hotspur",this.teamShort="TOT";break;case 18:this.teamName="Watford",this.teamShort="WAT";break;case 19:this.teamName="West Bromwich Albion",this.teamShort="WBA";break;case 20:this.teamName="West Ham United",this.teamShort="WHU"}switch(!0){case"u"===this.availabilityType||"i"===this.availabilityType:this.isUnavailable=!0,this.availabilityNews=t.news;break;default:this.isUnavailable=!1}}return t.prototype.getPlayerCost=function(t,e){return((t+e)/10).toFixed(1)},t}()},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a});var a,r=n(9),o=n(8);!function(e){e.createPlayerData=function(e){t(".loading").hide();var n=e.elements.map(function(t){return new r.a(t)});return new o.a(n)}}(a||(a={}))}).call(this,n(2))},function(t,e,n){var a=n(35);t.exports=a},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,a=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=a),t}},t.exports=e.default}).call(this,n(6))},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=l.COMPILER_REVISION;if(e!==n){if(e<n){var a=l.REVISION_CHANGES[n],r=l.REVISION_CHANGES[e];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+r+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new i.default("No environment passed to template");if(!t||!t.main)throw new i.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new i.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,a=0;a<n;a++)if(t[a]&&null!=t[a][e])return t[a][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:r.escapeExpression,invokePartial:function(n,a,o){o.hash&&(a=r.extend({},a,o.hash),o.ids&&(o.ids[0]=!0));n=e.VM.resolvePartial.call(this,n,a,o);var l=e.VM.invokePartial.call(this,n,a,o);null==l&&e.compile&&(o.partials[o.name]=e.compile(n,t.compilerOptions,e),l=o.partials[o.name](a,o));if(null!=l){if(o.indent){for(var s=l.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=o.indent+s[u];l=s.join("\n")}return l}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,a,r){var o=this.programs[t],i=this.fn(t);return e||r||a||n?o=s(this,t,i,e,n,a,r):o||(o=this.programs[t]=s(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=r.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function a(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;a._setup(r),!r.partial&&t.useData&&(o=function(t,e){e&&"root"in e||((e=e?l.createFrame(e):{}).root=t);return e}(e,o));var i=void 0,s=t.useBlockParams?[]:void 0;function u(e){return""+t.main(n,e,n.helpers,n.partials,o,s,i)}return t.useDepths&&(i=r.depths?e!=r.depths[0]?[e].concat(r.depths):r.depths:[e]),(u=c(t.main,u,n,r.depths||[],o,s))(e,r)}return a.isTop=!0,a._setup=function(a){a.partial?(n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators):(n.helpers=n.merge(a.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(a.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(a.decorators,e.decorators)))},a._child=function(e,a,r,o){if(t.useBlockParams&&!r)throw new i.default("must pass block params");if(t.useDepths&&!o)throw new i.default("must pass parent depths");return s(n,e,t[e],a,0,r,o)},a},e.wrapProgram=s,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var a=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;n.fn&&n.fn!==u&&function(){n.data=l.createFrame(n.data);var t=n.fn;o=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=a,t(e,n)},t.partials&&(n.partials=r.extend({},n.partials,t.partials))}();void 0===t&&o&&(t=o);if(void 0===t)throw new i.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=u;var a,r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),o=n(1),i=(a=o)&&a.__esModule?a:{default:a},l=n(4);function s(t,e,n,a,r,o,i){function l(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(l=[e].concat(i)),n(t,e,t.helpers,t.partials,r.data||a,o&&[r.blockParams].concat(o),l)}return(l=c(n,l,t,i,a,o)).program=e,l.depth=i?i.length:0,l.blockParams=r||0,l}function u(){return""}function c(t,e,n,a,o,i){if(t.decorator){var l={};e=t.decorator(e,l,n,a&&a[0],o,i,a),r.extend(e,l)}return e}},function(t,e,n){"use strict";function a(t){this.string=t}e.__esModule=!0,a.prototype.toString=a.prototype.toHTML=function(){return""+this.string},e.default=a,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(0),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=a.indexOf(r.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=r.lookupLevel(t),"undefined"!=typeof console&&r.lookupLevel(r.level)<=t){var e=r.methodMap[t];console[e]||(e="log");for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];console[e].apply(console,a)}}};e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(0);e.default=function(t){t.registerDecorator("inline",function(t,e,n,r){var o=t;return e.partials||(e.partials={},o=function(r,o){var i=n.partials;n.partials=a.extend({},i,e.partials);var l=t(r,o);return n.partials=i,l}),e.partials[r.args[0]]=r.fn,o})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var a,r=n(16),o=(a=r)&&a.__esModule?a:{default:a}},function(t,e,n){"use strict";e.__esModule=!0;var a=n(0);e.default=function(t){t.registerHelper("with",function(t,e){a.isFunction(t)&&(t=t.call(this));var n=e.fn;if(a.isEmpty(t))return e.inverse(this);var r=e.data;return e.data&&e.ids&&((r=a.createFrame(e.data)).contextPath=a.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:r,blockParams:a.blockParams([t],[r&&r.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],a=0;a<arguments.length-1;a++)e.push(arguments[a]);var r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),e[0]=r,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(0);e.default=function(t){t.registerHelper("if",function(t,e){return a.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||a.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a,r=n(1),o=(a=r)&&a.__esModule?a:{default:a};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a,r=n(0),o=n(1),i=(a=o)&&a.__esModule?a:{default:a};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new i.default("Must pass iterator to #each");var n=e.fn,a=e.inverse,o=0,l="",s=void 0,u=void 0;function c(e,a,o){s&&(s.key=e,s.index=a,s.first=0===a,s.last=!!o,u&&(s.contextPath=u+e)),l+=n(t[e],{data:s,blockParams:r.blockParams([t[e],e],[u+e,null])})}if(e.data&&e.ids&&(u=r.appendContextPath(e.data.contextPath,e.ids[0])+"."),r.isFunction(t)&&(t=t.call(this)),e.data&&(s=r.createFrame(e.data)),t&&"object"==typeof t)if(r.isArray(t))for(var f=t.length;o<f;o++)o in t&&c(o,o,o===t.length-1);else{var d=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==d&&c(d,o-1),d=p,o++);void 0!==d&&c(d,o-1,!0)}return 0===o&&(l=a(this)),l})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var a=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var r=n.inverse,o=n.fn;if(!0===e)return o(this);if(!1===e||null==e)return r(this);if(a.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):r(this);if(n.data&&n.ids){var i=a.createFrame(n.data);i.contextPath=a.appendContextPath(n.data.contextPath,n.name),n={data:i}}return o(e,n)})},t.exports=e.default},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){r.default(t),o.default(t),i.default(t),l.default(t),s.default(t),u.default(t),c.default(t)};var r=a(n(24)),o=a(n(23)),i=a(n(22)),l=a(n(21)),s=a(n(20)),u=a(n(19)),c=a(n(18))},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var o=r(n(4)),i=a(n(14)),l=a(n(1)),s=r(n(0)),u=r(n(13)),c=a(n(12));function f(){var t=new o.HandlebarsEnvironment;return s.extend(t,o),t.SafeString=i.default,t.Exception=l.default,t.Utils=s,t.escapeExpression=s.escapeExpression,t.VM=u,t.template=function(e){return u.template(e,t)},t}var d=f();d.create=f,c.default(d),d.default=d,e.default=d,t.exports=e.default},function(t,e,n){"use strict";var a=n(3),r=function(){return function(t,e){this.playerId=t.id,this.playerName=t.name,this.playerPosition=a.b[t.playerType],this.playerTeamId=t.teamID,this.playerTeamName=t.teamName,this.playerTeamShort=t.teamShort,this.transfers=e}}();n.d(e,"a",function(){return o});var o=function(){return function(t,e){this.teamID=t.teamID,this.teamName=t.teamName,this.allowedTransfers=t.allowedTransfers,this.teamPlayers=e.map(function(t){return new r(t.player,t.transfers)})}}()},function(t,e,n){"use strict";var a=function(){return function(t){this.transferId=t.transfer_id,this.transferWeek=t.transfer_week}}(),r=function(){return function(t){this.playerID=t.player_id,this.transfers=t.transfers.map(function(t){return new a(t)})}}();n.d(e,"a",function(){return o});var o=function(){return function(t){this.teamID=t.team_id,this.teamName=t.team_name,this.allowedTransfers=t.allowed_transfers,this.teamPlayers=t.team_players.map(function(t){return new r(t)})}}()},function(t,e,n){"use strict";var a,r=function(){return function(t){this.teamID=t.id,this.teamCode=t.code,this.teamName=t.name,this.teamNameShort=t.short_name}}(),o=function(){return function(t){this.teams=t}}();n.d(e,"a",function(){return a}),function(t){(a||(a={})).createTeamData=function(t){var e=t.teams.map(function(t){return new r(t)});return new o(e)}}()},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a});var a,r=n(28),o=function(t,e,n,a){return new(n||(n=Promise))(function(r,o){function i(t){try{s(a.next(t))}catch(t){o(t)}}function l(t){try{s(a.throw(t))}catch(t){o(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,l)}s((a=a.apply(t,e||[])).next())})},i=function(t,e){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=a[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};!function(e){e.getDraftedTeamData=function(){return o(this,void 0,void 0,function(){return i(this,function(e){return[2,new Promise(function(e,n){var a=t(".loading");fetch("FantasyTeams.json").then(function(t){200!==t.status&&n("Looks like there was a problem. Status Code:  "+t.status),t.json().then(function(t){a.hide();var n=t.drafted_teams.map(function(t){return new r.a(t)});e(n)})}).catch(function(t){a.hide(),alert("fetch error "+t)})})]})})}}(a||(a={}))}).call(this,n(2))},function(t,e){t.exports=function(t){return t&&"string"==typeof t?t.toLowerCase():""}},function(t,e,n){var a=n(5);t.exports=(a.default||a).template({1:function(t,e,a,r,o){var i,l,s,u=null!=e?e:t.nullContext||{},c=t.escapeExpression,f=a.helperMissing;return'    <tr class="position-header '+c((s=n(31),s&&(s.__esModule?s.default:s)).call(u,null!=e?e.name:e,{name:"toLower",hash:{},data:o}))+'-header" data-position="'+c("function"==typeof(l=null!=(l=a.id||(null!=e?e.id:e))?l:f)?l.call(u,{name:"id",hash:{},data:o}):l)+'">\r\n        <th colspan="5">'+c("function"==typeof(l=null!=(l=a.name||(null!=e?e.name:e))?l:f)?l.call(u,{name:"name",hash:{},data:o}):l)+'\r\n            <i class="heading-icon fas fa-chevron-down fa-xs"></i>\r\n        </th>\r\n    </tr>\r\n    <tr class="table-heading">\r\n        <th>ID</th>\r\n        <th>Players</th>\r\n        <th>\r\n            <img class="goals-image disabled" src="football.png" title="Goals Scored" alt="Goals Scored">\r\n        </th>\r\n        <th>\r\n            <img class="clean-sheet-image" src="clean_sheet.png" title="Clean Sheet" alt="Clean Sheet">\r\n        </th>\r\n        <th>\r\n            <img class="red-card-image" src="red_card.png" title="Red Card" alt="Red Card">\r\n        </th>\r\n    </tr>\r\n'+(null!=(i=a.each.call(u,null!=e?e.players:e,{name:"each",hash:{},fn:t.program(2,o,0),inverse:t.noop,data:o}))?i:"")+" "},2:function(t,e,n,a,r){var o,i=null!=e?e:t.nullContext||{},l=n.helperMissing,s=t.escapeExpression;return'    <tr class="player-data" data-points="0" data-position="'+s("function"==typeof(o=null!=(o=n.playerType||(null!=e?e.playerType:e))?o:l)?o.call(i,{name:"playerType",hash:{},data:r}):o)+'" data-id="'+s("function"==typeof(o=null!=(o=n.id||(null!=e?e.id:e))?o:l)?o.call(i,{name:"id",hash:{},data:r}):o)+'">\r\n        <td>'+s("function"==typeof(o=null!=(o=n.id||(null!=e?e.id:e))?o:l)?o.call(i,{name:"id",hash:{},data:r}):o)+"</td>\r\n        <td>"+s("function"==typeof(o=null!=(o=n.name||(null!=e?e.name:e))?o:l)?o.call(i,{name:"name",hash:{},data:r}):o)+'</td>\r\n        <td class="goals-scored">\r\n            <select class="score-select disabled" disabled="disabled" name="score">\r\n                <option value="0">0</option>\r\n                <option value="1">1</option>\r\n                <option value="2">2</option>\r\n                <option value="3">3</option>\r\n                <option value="4">4</option>\r\n                <option value="5">5</option>\r\n                <option value="6">6</option>\r\n                <option value="7">7</option>\r\n                <option value="8">8</option>\r\n                <option value="9">9</option>\r\n            </select>\r\n        </td>\r\n        <td class="clean-sheet">\r\n            <input type="checkbox" class="clean-sheet-checkbox" data-points="5" id="1" name="Mignolet" value=" ">\r\n        </td>\r\n        <td class="red-card">\r\n            <input type="checkbox" class="red-card-checkbox" name="Mignolet" value=" ">\r\n        </td>\r\n    </tr>\r\n    '},compiler:[7,">= 4.0.0"],main:function(t,e,n,a,r){var o;return"<table>\r\n"+(null!=(o=n.each.call(null!=e?e:t.nullContext||{},null!=e?e.filteredPositions:e,{name:"each",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+"\r\n</table>"},useData:!0})},function(t,e,n){var a=n(5);t.exports=(a.default||a).template({1:function(t,e,n,a,r){var o,i,l=null!=e?e:t.nullContext||{};return'    <div class="col-xs-12 col-md-3">\r\n        <table class="table">\r\n            <tbody>\r\n                <tr class="header-row">\r\n                    <th colspan="5">'+t.escapeExpression("function"==typeof(i=null!=(i=n.teamName||(null!=e?e.teamName:e))?i:n.helperMissing)?i.call(l,{name:"teamName",hash:{},data:r}):i)+" "+(null!=(o=n.if.call(l,null!=e?e.allowedTransfers:e,{name:"if",hash:{},fn:t.program(2,r,0),inverse:t.noop,data:r}))?o:"")+"</th>\r\n                </tr>\r\n                <tr>\r\n                    <th>ID</th>\r\n                    <th>Position</th>\r\n                    <th>Team</th>\r\n                    <th>Name</th>\r\n                    <th>Points</th>\r\n                </tr>\r\n"+(null!=(o=n.each.call(l,null!=e?e.teamPlayers:e,{name:"each",hash:{},fn:t.program(4,r,0),inverse:t.noop,data:r}))?o:"")+'                <tr class="total-points-row">\r\n                    <td colspan="3"></td>\r\n                    <th>Total</th>\r\n                    <td class="total-points">0</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n'},2:function(t,e,n,a,r){return'<i class="fas fa-exchange-alt icon-transfer"></i>'},4:function(t,e,n,a,r){var o,i,l=null!=e?e:t.nullContext||{},s=n.helperMissing,u="function",c=t.escapeExpression;return'                <tr class="player-total-data" data-player-id="'+c(typeof(i=null!=(i=n.playerId||(null!=e?e.playerId:e))?i:s)===u?i.call(l,{name:"playerId",hash:{},data:r}):i)+'" '+(null!=(o=n.each.call(l,null!=e?e.transfers:e,{name:"each",hash:{},fn:t.program(5,r,0),inverse:t.noop,data:r}))?o:"")+'>\r\n                    <td class="id">'+c(typeof(i=null!=(i=n.playerId||(null!=e?e.playerId:e))?i:s)===u?i.call(l,{name:"playerId",hash:{},data:r}):i)+'</td>\r\n                    <td class="position">'+c(typeof(i=null!=(i=n.playerPosition||(null!=e?e.playerPosition:e))?i:s)===u?i.call(l,{name:"playerPosition",hash:{},data:r}):i)+'</td>\r\n                    <td class="club">'+c(typeof(i=null!=(i=n.playerTeamShort||(null!=e?e.playerTeamShort:e))?i:s)===u?i.call(l,{name:"playerTeamShort",hash:{},data:r}):i)+'</td>\r\n                    <td class="player">'+c(typeof(i=null!=(i=n.playerName||(null!=e?e.playerName:e))?i:s)===u?i.call(l,{name:"playerName",hash:{},data:r}):i)+'</td>\r\n                    <td class="points">0</td>\r\n                </tr>\r\n'},5:function(t,e,n,a,r){var o,i=null!=e?e:t.nullContext||{},l=n.helperMissing,s=t.escapeExpression;return"data-transfer-week-"+s("function"==typeof(o=null!=(o=n.transferWeek||(null!=e?e.transferWeek:e))?o:l)?o.call(i,{name:"transferWeek",hash:{},data:r}):o)+'="'+s("function"==typeof(o=null!=(o=n.transferId||(null!=e?e.transferId:e))?o:l)?o.call(i,{name:"transferId",hash:{},data:r}):o)+'"'},compiler:[7,">= 4.0.0"],main:function(t,e,n,a,r){var o;return'<div class="row">\r\n'+(null!=(o=n.each.call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?o:"")+"</div>"},useData:!0})},function(t,e,n){"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */t.exports=function(t){var e=typeof t;if("string"===e){if(""===t.trim())return!1}else if("number"!==e)return!1;return t-t+1==1}},function(t,e,n){"use strict";
/*!
 * handlebars-helper-repeat <https://github.com/helpers/handlebars-helper-repeat>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */var a=n(34);t.exports=function(){var t=arguments;if(t.length>2)throw new Error(`Expected 0, 1 or 2 arguments, but got ${t.length}`);var e=t[t.length-1],n=e.hash||{},r={count:n.count||t[0]||0,start:n.start||0,step:n.step||1};return"string"!=typeof t[0]||a(t[0])||""===t[0]?r.count>0?function({count:t,start:e,step:n},a,r){var o=t*n+e,i=e,l="";do{var s={index:i,count:t,start:e,step:n,first:i===e,last:i>=o-n},u=[i,s];l+=r.fn(a,{data:s,blockParams:u}),i+=s.step}while(i<o);return l}(r,this,e):e.inverse(this):function({count:t,start:e,step:n},a){var r=t*n+e,o=e,i="";for(;o<r;)i+=a,o+=n;return i}(r,t[0])}},function(t,e,n){var a=n(5);function r(t){return t&&(t.__esModule?t.default:t)}t.exports=(a.default||a).template({1:function(t,e,a,o,i){var l,s,u=null!=e?e:t.nullContext||{},c=a.helperMissing,f=t.escapeExpression;return'    <div id="fixture-'+f("function"==typeof(s=null!=(s=a.index||i&&i.index)?s:c)?s.call(u,{name:"index",hash:{},data:i}):s)+'" class="fixtures col-xs-12 col-md-6">\r\n        <h3>Fixture '+f("function"==typeof(s=null!=(s=a.index||i&&i.index)?s:c)?s.call(u,{name:"index",hash:{},data:i}):s)+'</h3>\r\n        <table>\r\n            <tbody>\r\n                <tr>\r\n                    <td class="home-team">\r\n                        <select class="teams-dropdown">\r\n                            <option selected disabled style="display:none;">Teams</option>\r\n'+(null!=(l=a.each.call(u,null!=e?e.teams:e,{name:"each",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?l:"")+'                        </select>\r\n                        <select class="score">\r\n'+(null!=(l=r(n(11)).call(u,10,{name:"repeat",hash:{start:0},fn:t.program(4,i,0),inverse:t.noop,data:i}))?l:"")+'                        </select>\r\n                    </td>\r\n                    <td>\r\n                        <div class="versus align-center">vs</div>\r\n                    </td>\r\n                    <td class="away-team">\r\n                        <select class="teams-dropdown">\r\n                            <option selected="" style="display:none;">Teams</option>\r\n'+(null!=(l=a.each.call(u,null!=e?e.teams:e,{name:"each",hash:{},fn:t.program(2,i,0),inverse:t.noop,data:i}))?l:"")+'                        </select>\r\n                        <select class="score">\r\n'+(null!=(l=r(n(11)).call(u,10,{name:"repeat",hash:{start:0},fn:t.program(4,i,0),inverse:t.noop,data:i}))?l:"")+'                        </select>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="player-table">\r\n                        <div class="home-team-players">\r\n                        </div>\r\n                    </td>\r\n                    <td></td>\r\n                    <td class="player-table">\r\n                        <div class="away-team-players">\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n'},2:function(t,e,n,a,r){var o,i=null!=e?e:t.nullContext||{},l=n.helperMissing,s=t.escapeExpression;return'                            <option class="team-option" data-id="'+s("function"==typeof(o=null!=(o=n.teamID||(null!=e?e.teamID:e))?o:l)?o.call(i,{name:"teamID",hash:{},data:r}):o)+'" value="'+s("function"==typeof(o=null!=(o=n.teamID||(null!=e?e.teamID:e))?o:l)?o.call(i,{name:"teamID",hash:{},data:r}):o)+'">'+s("function"==typeof(o=null!=(o=n.teamName||(null!=e?e.teamName:e))?o:l)?o.call(i,{name:"teamName",hash:{},data:r}):o)+"</option>\r\n"},4:function(t,e,n,a,r){var o,i=null!=e?e:t.nullContext||{},l=n.helperMissing,s=t.escapeExpression;return'                            <option value="'+s("function"==typeof(o=null!=(o=n.index||r&&r.index)?o:l)?o.call(i,{name:"index",hash:{},data:r}):o)+'">'+s("function"==typeof(o=null!=(o=n.index||r&&r.index)?o:l)?o.call(i,{name:"index",hash:{},data:r}):o)+"</option>\r\n"},compiler:[7,">= 4.0.0"],main:function(t,e,a,o,i){var l;return'<div class="row">\r\n'+(null!=(l=r(n(11)).call(null!=e?e:t.nullContext||{},{name:"repeat",hash:{start:1,count:10},fn:t.program(1,i,0),inverse:t.noop,data:i}))?l:"")+"</div>"},useData:!0})},function(t,e,n){t.exports=n.p+"/football.png"},function(t,e,n){t.exports=n.p+"/red_card.png"},function(t,e,n){t.exports=n.p+"/clean_sheet.png"},,function(t,e,n){},function(t,e,n){"use strict";n.r(e),function(t){n(41);var e,a,r=n(27),o=n(10),i=n(29),l=n(30),s=n(7),u=function(t,e,n,a){return new(n||(n=Promise))(function(r,o){function i(t){try{s(a.next(t))}catch(t){o(t)}}function l(t){try{s(a.throw(t))}catch(t){o(t)}}function s(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,l)}s((a=a.apply(t,e||[])).next())})},c=function(t,e){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=a[2&o[0]?"return":o[0]?"throw":"next"])&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[0,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(t){o=[6,t],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},f=(n(39),n(38),n(37),n(36)),d=n(33),p=n(32),h=t(".teams-container"),m=t(".fixtures-container");s.a.getstaticData().then(function(t){var n;(function(t){u(this,void 0,void 0,function(){var e,n;return c(this,function(a){switch(a.label){case 0:return[4,l.a.getDraftedTeamData()];case 1:return e=a.sent(),n=e.map(function(e){var n=e.teamPlayers.map(function(e){return{player:t.players.filter(function(t){return t.id===e.playerID})[0],transfers:e.transfers}});return new r.a(e,n)}),h.append(d(n)),[2]}})})})(e=o.a.createPlayerData(t)),a=i.a.createTeamData(t),n=a,m.append(f(n))}),t(document).on("click",".position-header",function(e){var n=t(e.currentTarget),a="#"+n.closest(".fixtures").attr("id"),r="."+n.parents("div").attr("class"),o=n.next(".table-heading"),i=n.attr("data-position");t(a).find(r).find(".player-data").filter('[data-position="'+i+'"]').toggleClass("active"),o.toggleClass("active"),n.toggleClass("active")}),t(document).on("change",".teams-dropdown",function(n){!function(n){var a=t(n.currentTarget),r=a.find(":selected").val(),o="."+a.parent().attr("class")+"-players",i="#"+a.closest(".fixtures").attr("id"),l=(a.parent(),e.players.filter(function(t){return t.teamID===parseInt(r,10)})),s={filteredPositions:[{id:1,name:"Goalkeeper",nameShort:"GK",players:l.filter(function(t){return 1===t.playerType})},{id:2,name:"Defender",nameShort:"DEF",players:l.filter(function(t){return 2===t.playerType})},{id:3,name:"Midfielder",nameShort:"MID",players:l.filter(function(t){return 3===t.playerType})},{id:4,name:"Forward",nameShort:"FWD",players:l.filter(function(t){return 4===t.playerType})}]};t(i).find(o).html(p(s))}(n),function(e){var n=t(".team-option:selected").map(function(){return t(this).val()}).toArray();t(".team-option").removeAttr("disabled");for(var a=function(e){t(".team-option").each(function(n,a){t(a).attr("data-id")===e.toString()&&t(a).attr("disabled","disabled")})},r=0,o=n;r<o.length;r++)a(o[r])}()})}.call(this,n(2))}]);
//# sourceMappingURL=Calculations.bundle.js.map