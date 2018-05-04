!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([,function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,a=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(n=0===s.indexOf("//")?s:0===s.indexOf("/")?r+s:a+s.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,r){var a,n,s={},i=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=a.apply(this,arguments)),n}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),f=null,l=0,c=[],p=r(1);function d(e,t){for(var r=0;r<e.length;r++){var a=e[r],n=s[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(b(a.parts[i],t))}else{var o=[];for(i=0;i<a.parts.length;i++)o.push(b(a.parts[i],t));s[a.id]={id:a.id,refs:1,parts:o}}}}function u(e,t){for(var r=[],a={},n=0;n<e.length;n++){var s=e[n],i=t.base?s[0]+t.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};a[i]?a[i].parts.push(o):r.push(a[i]={id:i,parts:[o]})}return r}function m(e,t){var r=o(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=c[c.length-1];if("top"===e.insertAt)a?a.nextSibling?r.insertBefore(t,a.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),c.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=o(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,n)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function y(e){var t=document.createElement("style");return e.attrs.type="text/css",_(t,e.attrs),m(e,t),t}function _(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function b(e,t){var r,a,n,s;if(t.transform&&e.css){if(!(s=t.transform(e.css)))return function(){};e.css=s}if(t.singleton){var i=l++;r=f||(f=y(t)),a=w.bind(null,r,i,!1),n=w.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",_(t,e.attrs),m(e,t),t}(t),a=function(e,t,r){var a=r.css,n=r.sourceMap,s=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||s)&&(a=p(a)),n&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([a],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}.bind(null,r,t),n=function(){h(r),r.href&&URL.revokeObjectURL(r.href)}):(r=y(t),a=function(e,t){var r=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),n=function(){h(r)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=u(e,t);return d(r,t),function(e){for(var a=[],n=0;n<r.length;n++){var i=r[n];(o=s[i.id]).refs--,a.push(o)}for(e&&d(u(e,t),t),n=0;n<a.length;n++){var o;if(0===(o=a[n]).refs){for(var f=0;f<o.parts.length;f++)o.parts[f]();delete s[o.id]}}}};var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function w(e,t,r,a){var n=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var s=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r,a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var s=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[a].concat(i).concat([s]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(a[s]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&a[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){"use strict";var a,n="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",s=function(){function e(e){switch(this.id=e.id,this.image=n+e.code+".png",this.availabilityType=e.status,this.teamID=e.team,this.price=this.getPlayerCost(e.now_cost,e.cost_change_start_fall),this.name=e.web_name,this.playerType=e.element_type,this.teamID){case 1:this.teamName="Arsenal",this.teamShort="ARS";break;case 2:this.teamName="Bournemouth",this.teamShort="BOU";break;case 3:this.teamName="Brighton and Hove Albion",this.teamShort="BHA";break;case 4:this.teamName="Burnley",this.teamShort="BUR";break;case 5:this.teamName="Chelsea",this.teamShort="CHE";break;case 6:this.teamName="Crystal Palace",this.teamShort="CRY";break;case 7:this.teamName="Everton",this.teamShort="EVE";break;case 8:this.teamName="Huddersfield Town",this.teamShort="HUD";break;case 9:this.teamName="Leicester City",this.teamShort="LEI";break;case 10:this.teamName="Liverpool",this.teamShort="LIV";break;case 11:this.teamName="Manchester City",this.teamShort="MNC";break;case 12:this.teamName="Manchester United",this.teamShort="MNU";break;case 13:this.teamName="Newcastle United",this.teamShort="NEW";break;case 14:this.teamName="Southampton",this.teamShort="SOU";break;case 15:this.teamName="Stoke City",this.teamShort="STO";break;case 16:this.teamName="Swansea City",this.teamShort="SWA";break;case 17:this.teamName="Tottenham Hotspur",this.teamShort="TOT";break;case 18:this.teamName="Watford",this.teamShort="WAT";break;case 19:this.teamName="West Bromwich Albion",this.teamShort="WBA";break;case 20:this.teamName="West Ham United",this.teamShort="WHU"}switch(!0){case"u"===this.availabilityType||"i"===this.availabilityType:this.isUnavailable=!0,this.availabilityNews=e.news;break;default:this.isUnavailable=!1}}return e.prototype.getPlayerCost=function(e,t){return((e+t)/10).toFixed(1)},e}();r.d(t,"a",function(){return a}),function(e){var t,r=[];(a||(a={})).getPlayerData=function(e){t=$(".loading"),fetch("https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json").then(function(a){200===a.status?a.json().then(function(a){t.hide();var n={settings:{loaded:!0},players:r=a.elements.map(function(e){return new s(e)}),goalkeepers:r.filter(function(e){return 1===e.playerType}),defenders:r.filter(function(e){return 2===e.playerType}),midfielders:r.filter(function(e){return 3===e.playerType}),forwards:r.filter(function(e){return 4===e.playerType})};e(n)}):Error("Looks like there was a problem. Status Code:  "+a.status)}).catch(function(e){t.hide(),alert("fetch error "+e)})}}()},function(e){e.exports={fantasy_teams:[{team_id:1,team_name:"WE HAVE IT ALL",team_players:[{player_id:375,real_life_transfer:[{transfer_team:7,transfer_week:15}],transfers:[]},{player_id:101,transfers:[]},{player_id:194,transfers:[]},{player_id:222,transfers:[]},{player_id:267,transfers:[]},{player_id:24,transfers:[]},{player_id:230,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:295,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:472,transfers:[]},{player_id:134,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:1,team_name:"Lacking Creativity",team_players:[{player_id:260,transfers:[]},{player_id:117,transfers:[]},{player_id:290,transfers:[]},{player_id:80,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:367,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:394,transfers:[]},{player_id:259,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:2,team_name:"Diggers FC",team_players:[{player_id:421,transfers:[]},{player_id:60,transfers:[]},{player_id:37,transfers:[]},{player_id:353,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[]},{player_id:230,transfers:[]},{player_id:394,transfers:[]},{player_id:259,transfers:[]},{player_id:52,transfers:[]}]},{team_id:1,team_name:"WE HAVE IT ALL",team_players:[{player_id:375,real_life_transfer:[{transfer_team:7,transfer_week:15}],transfers:[]},{player_id:101,transfers:[]},{player_id:194,transfers:[]},{player_id:222,transfers:[]},{player_id:267,transfers:[]},{player_id:24,transfers:[]},{player_id:230,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:295,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:472,transfers:[]},{player_id:134,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:1,team_name:"Lacking Creativity",team_players:[{player_id:260,transfers:[]},{player_id:117,transfers:[]},{player_id:290,transfers:[]},{player_id:80,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:367,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:394,transfers:[]},{player_id:259,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:2,team_name:"Diggers FC",team_players:[{player_id:421,transfers:[]},{player_id:60,transfers:[]},{player_id:37,transfers:[]},{player_id:353,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[]},{player_id:230,transfers:[]},{player_id:394,transfers:[]},{player_id:259,transfers:[]},{player_id:52,transfers:[]}]}]}},function(e,t,r){"use strict";r.r(t),r(8);var a,n,s=r(4),i=r(5).fantasy_teams,o=[{team_players:[]}],f=[];(a||(a={})).CreateTeam=function(e){s.a.getPlayerData(function(t){for(var r=0,a=i;r<a.length;r++){var n=a[r];o.unshift({team_id:n.team_id,team_name:n.team_name});for(var s=0,l=n.team_players;s<l.length;s++)for(var c=l[s],p=0,d=t.players;p<d.length;p++){var u=d[p];if(u.id===c.player_id){var m=void 0;switch(u.playerType){case 1:m="GK";break;case 2:m="DEF";break;case 3:m="MID";break;case 4:m="FWD"}o[1].team_players.push({player_id:u.id,player_name:u.name,player_teamshort:u.teamShort,player_type:u.player_type,player_position:m})}}f.push(o),o=[{team_players:[]}]}e(f),console.log(f)})},(n||(n={})).init=function(){a.CreateTeam(function(e){$.get("/src/js/components/Templates/FantasyTeamsTemplate.hbs",function(t){var r=t,a=Handlebars.compile(r)(e);$(".teams-container").append(a)})})},$(function(){return n.init()})},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,"body {\n  color: #2c2c2c;\n  font-size: 14px;\n  font-family: 'Roboto Condensed', sans-serif; }\n\nfooter {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #dedede; }\n\n.teams-container {\n  text-align: center; }\n  .teams-container table {\n    margin-bottom: 10px;\n    width: 100%;\n    max-width: 100%;\n    font-size: 12px; }\n    .teams-container table .player-total-data:nth-child(odd) {\n      background-color: #ddd; }\n    .teams-container table .player-total-data.transfered {\n      background-color: green;\n      color: #fff;\n      font-weight: bold; }\n    .teams-container table .player-total-data.current-week-transfer {\n      background-color: yellow;\n      color: #4444d1;\n      font-weight: bold; }\n    .teams-container table .player-total-data.sent-off {\n      background-color: red;\n      color: #fff; }\n  .teams-container table,\n  .teams-container td,\n  .teams-container th,\n  .teams-container tr {\n    padding: 2px 5px;\n    text-align: center;\n    border: 1px solid #ccc;\n    white-space: nowrap;\n    page-break-inside: avoid; }\n  .teams-container .total-points-row th {\n    text-align: center; }\n",""])},function(e,t,r){var a=r(7);"string"==typeof a&&(a=[[e.i,a,""]]);r(2)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)}]);
//# sourceMappingURL=ScoreCalculations.bundle.js.map