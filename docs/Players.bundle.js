!function(e){function n(n){for(var l,o,i=n[0],c=n[1],s=n[2],h=0,p=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&p.push(t[o][0]),t[o]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(u&&u(n);p.length;)p.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],l=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(l=!1)}l&&(r.splice(n--,1),e=o(o.s=a[0]))}return e}var l={},t={4:0},r=[];function o(n){if(l[n])return l[n].exports;var a=l[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,n,a){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)o.d(a,l,function(n){return e[n]}.bind(null,l));return a},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var u=c;r.push([49,0,8]),a()}({23:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var l,t=a(1),r=a.n(t),o=a(4),i=a.n(o);!function(e){function n(){return(n=i()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch("./fplData.json").then((function(n){200===n.status?n.json().then((function(n){e(n)})):console.log("Looks like there was a problem. Status Code: "+n.status)})).catch((function(e){console.log("Fetch Error :-S",e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.getstaticData=function(){return n.apply(this,arguments)}}(l||(l={}))},25:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var l,t=a(0),r=a.n(t),o=a(13),i=a.n(o),c=function(){function e(n){switch(r()(this,e),this.id=n.id,this.image="".concat("https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p"+n.code,".png"),this.availabilityType=n.status,this.teamID=n.team,this.price=this.getPlayerCost(n.now_cost,n.cost_change_start_fall),this.name=n.web_name,this.playerType=n.element_type,this.teamID){case 1:this.teamName="Arsenal",this.teamShort="ARS";break;case 2:this.teamName="Aston Villa",this.teamShort="AST";break;case 3:this.teamName="Brentford",this.teamShort="BRE";break;case 4:this.teamName="Brighton and Hove Albion",this.teamShort="BHA";break;case 5:this.teamName="Burnley",this.teamShort="BUR";break;case 6:this.teamName="Chelsea",this.teamShort="CHE";break;case 7:this.teamName="Crystal Palace",this.teamShort="CRY";break;case 8:this.teamName="Everton",this.teamShort="EVE";break;case 9:this.teamName="Leicester",this.teamShort="LEI";break;case 10:this.teamName="Leeds",this.teamShort="LEE";break;case 11:this.teamName="Liverpool",this.teamShort="LIV";break;case 12:this.teamName="Manchester City",this.teamShort="MNC";break;case 13:this.teamName="Manchester United",this.teamShort="MNU";break;case 14:this.teamName="Newcastle",this.teamShort="NEW";break;case 15:this.teamName="Norwich",this.teamShort="NOR";break;case 16:this.teamName="Southampton",this.teamShort="SOU";break;case 17:this.teamName="Tottenham Hotspur",this.teamShort="TOT";break;case 18:this.teamName="Watford",this.teamShort="WAT";break;case 19:this.teamName="West Ham",this.teamShort="WHU";break;case 20:this.teamName="Wolves",this.teamShort="WOL"}switch(!0){case"i"===this.availabilityType:this.availabilityType="temporary-unavailable",this.isUnavailable=!0,this.availabilityNews=n.news;break;case"u"===this.availabilityType||"n"===this.availabilityType:this.availabilityType="unavailable-for-season",this.isUnavailable=!0,this.unavailableForSeason=!0,this.availabilityNews=n.news;break;default:this.isUnavailable=!1,this.availabilityType="available",this.unavailableForSeason=!1}}return i()(e,[{key:"getPlayerCost",value:function(e,n){return((e+n)/10).toFixed(1)}}]),e}(),s=function(){function e(n){r()(this,e),this.players=n,this.filteredPlayers=n}return i()(e,[{key:"getFilteredPlayers",value:function(e,n,a){var l=e||"",t=n||"",r=a||null,o=this.players.filter((function(e){return e.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().indexOf(l)>-1}));return o=o.filter((function(e){return e.price.indexOf(t)>-1})),null!==r&&(o=o.filter((function(e){return e.teamID===r}))),this.filteredPlayers=o}},{key:"getFilteredPlayersOfType",value:function(e,n,a,l){var t=this.getPlayersOfType(e).filter((function(a){return a.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().indexOf(n)>-1&&a.playerType===e})).filter((function(n){return n.price.indexOf(a)>-1&&n.playerType===e}));null!==l&&(t=t.filter((function(e){return e.teamID===l})));var r=Math.ceil(t.length/2);return[t.slice(0,r),t.slice(r)]}},{key:"getPlayersOfType",value:function(e){return this.players.filter((function(n){return n.playerType===e}))}},{key:"getSplitPlayersOfType",value:function(e){var n=this.getPlayersOfType(e),a=Math.floor(n.length/2);return[n.slice(0,a),n.slice(a)]}}]),e}();(l||(l={})).createPlayerData=function(e){var n=e.elements.map((function(e){return new c(e)}));return new s(n)}},26:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var l,t=a(0),r=a.n(t),o=function e(n){r()(this,e),this.teamID=n.id,this.teamCode=n.code,this.teamName=n.name,this.teamNameShort=n.short_name},i=function e(n){r()(this,e),this.teams=n};(l||(l={})).createTeamData=function(e){var n=e.teams.map((function(e){return new o(e)}));return new i(n)}},29:function(e,n){e.exports=function(e){return e&&"string"==typeof e?e.toLowerCase():""}},39:function(e,n,a){"use strict";(function(e){a.d(n,"a",(function(){return r}));var l=a(52),t=e(".filter-container");function r(e){t.append(l(e))}}).call(this,a(9))},49:function(e,n,a){"use strict";a.r(n),function(e){a(50),a(51);var n,l,t,r=a(25),o=a(26),i=a(23),c=a(5),s=a(86),u=a(39),h=a(68),p=e(".player-container"),m=e(".filter-container");function d(n,a,l,r){var o=a,i=l,s=r,u=n.players,m=n.getFilteredPlayers(a,l,r),d=n.getFilteredPlayersOfType(c.a.Goalkeeper,o||"",i||"",s||null),f=n.getFilteredPlayersOfType(c.a.Defender,o||"",i||"",s||null),y=n.getFilteredPlayersOfType(c.a.Midfielder,o||"",i||"",s||null),v=n.getFilteredPlayersOfType(c.a.Forward,o||"",i||"",s||null);t={filteredPlayers:m,players:u,gkLeft:d[0],gkRight:d[1],dfLeft:f[0],dfRight:f[1],mfLeft:y[0],mfRight:y[1],fwLeft:v[0],fwRight:v[1]},p.empty().append(h(t)),e(".loading").hide()}i.a.getstaticData().then((function(e){n=r.a.createPlayerData(e),l=o.a.createTeamData(e),d(n),Object(u.a)(l)})),m.on("paste, keyup","#search-name",Object(s.a)((function(a){var l=e(a.currentTarget).val(),t=e("#search-price").val(),r=parseInt(e(".badge-link.active").attr("id"),10);d(n,l.toLowerCase(),t,r)}),500)),m.on("change","#search-price",(function(a){var l=e(a.currentTarget),t=e("#search-name").val(),r=l.val(),o=parseInt(e(".badge-link.active").attr("id"),10);d(n,t.toLowerCase(),r,o)})),m.on("click",".badge-link",(function(a){a.preventDefault();var l=e(a.currentTarget);e(".badge-link").removeClass("active"),l.hasClass("active")?l.removeClass("active"):l.addClass("active");var t=e("#search-name").val(),r=e("#search-price").val(),o=parseInt(e(".badge-link.active").attr("id"),10);d(n,t.toLowerCase(),r,o)})),m.on("click",".clear-filter",(function(a){a.preventDefault();var l=e(a.currentTarget).siblings(".form-group").find("select, input, #search-team");switch(l.attr("id")){case"search-name":l.val("");break;case"search-price":l.val("").prop("selected");break;case"search-team":l.find(".badge .badge-link").removeClass("active")}var t=e("#search-name").val(),r=e("#search-price").val(),o=parseInt(e(".badge-link.active").attr("id"),10);d(n,t.toLowerCase(),r,o)}))}.call(this,a(9))},5:function(e,n,a){"use strict";var l,t;a.d(n,"a",(function(){return l})),a.d(n,"b",(function(){return t})),function(e){e[e.Goalkeeper=1]="Goalkeeper",e[e.Defender=2]="Defender",e[e.Midfielder=3]="Midfielder",e[e.Forward=4]="Forward"}(l||(l={})),function(e){e[e.GK=1]="GK",e[e.DEF=2]="DEF",e[e.MID=3]="MID",e[e.FWD=4]="FWD"}(t||(t={}))},50:function(e,n,a){},51:function(e,n,a){e.exports=a.p+"/badges-sprite.png"},52:function(e,n,a){var l=a(14);e.exports=(l.default||l).template({1:function(e,n,l,t,r){var o,i,c=null!=n?n:e.nullContext||{},s=e.escapeExpression,u=e.hooks.helperMissing,h=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'                    <div class="badge"><a class="badge-link badge-'+s((i=a(29),i&&(i.__esModule?i.default:i)).call(c,null!=n?h(n,"teamNameShort"):n,{name:"toLower",hash:{},data:r,loc:{start:{line:55,column:66},end:{line:55,column:91}}}))+'" title="'+s("function"==typeof(o=null!=(o=h(l,"teamName")||(null!=n?h(n,"teamName"):n))?o:u)?o.call(c,{name:"teamName",hash:{},data:r,loc:{start:{line:55,column:100},end:{line:55,column:112}}}):o)+'"\r\n                            id="'+s("function"==typeof(o=null!=(o=h(l,"teamID")||(null!=n?h(n,"teamID"):n))?o:u)?o.call(c,{name:"teamID",hash:{},data:r,loc:{start:{line:56,column:32},end:{line:56,column:42}}}):o)+'" href="#"></a></div>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="d-flex justify-content-between align-items-center">\r\n    <h4 class="mb-0">Filters</h4>\r\n    <a class="filter-toggle" data-toggle="collapse" href="#filter-collapse" title="Collapse filters" role="button" aria-expanded="false"\r\n        aria-controls="filter-collapse"><i class="fas fa-lg fa-chevron-circle-left"></i></a>\r\n</div>\r\n<hr>\r\n<div class="collapse show" id="filter-collapse">\r\n    <div class="row d-flex flex-row">\r\n        <div class="d-flex flex-column col-12 col-md-3">\r\n            <span class="clear-filter" title="clear name search">\r\n                <i class="fa fa-undo" aria-hidden="true"></i>\r\n            </span>\r\n            <label for="search-name">Filter by name</label>\r\n            <div class="form-group flex-container">\r\n                <input type="text" class="form-control" id="search-name" placeholder="Start typing to search...">\r\n            </div>\r\n        </div>\r\n        <div class="d-flex flex-column col-12 col-md-3">\r\n            <span class="clear-filter" title="clear price search">\r\n                <i class="fa fa-undo" aria-hidden="true"></i>\r\n            </span>\r\n            <label for="search-price">Filter by price</label>\r\n            <div class="form-group">\r\n                <select name="search-price" class="form-control" id="search-price">\r\n                    <option value="">All</option>\r\n                    <option value="4.0">4.0</option>\r\n                    <option value="4.5">4.5</option>\r\n                    <option value="5.0">5.0</option>\r\n                    <option value="5.5">5.5</option>\r\n                    <option value="6.0">6.0</option>\r\n                    <option value="6.5">6.5</option>\r\n                    <option value="7.0">7.0</option>\r\n                    <option value="7.5">7.5</option>\r\n                    <option value="8.0">8.0</option>\r\n                    <option value="8.5">8.5</option>\r\n                    <option value="9.0">9.0</option>\r\n                    <option value="9.5">9.5</option>\r\n                    <option value="10.0">10.0</option>\r\n                    <option value="10.5">10.5</option>\r\n                    <option value="11.0">11.0</option>\r\n                    <option value="11.5">11.5</option>\r\n                    <option value="12.0">12.0</option>\r\n                    <option value="12.5">12.5</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class="d-flex flex-column col-xs-12 col-md-6">\r\n            <span class="clear-filter" title="clear team search">\r\n                <i class="fa fa-undo" aria-hidden="true"></i>\r\n            </span>\r\n            <label for="search-team">Filter by team</label>\r\n            <div class="form-group search-team">\r\n                <div class="d-flex flex-row flex-wrap justify-content-between" id="search-team">\r\n'+(null!=(r=o(a,"each").call(null!=n?n:e.nullContext||{},null!=n?o(n,"teams"):n,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t,loc:{start:{line:54,column:20},end:{line:57,column:29}}}))?r:"")+"                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"},useData:!0})},68:function(e,n,a){var l=a(14);e.exports=(l.default||l).template({1:function(e,n,a,l,t){var r,o=null!=n?n:e.nullContext||{},i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"    \x3c!-- Goalkeepers --\x3e\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"gkLeft"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(2,t,0),inverse:e.noop,data:t,loc:{start:{line:4,column:4},end:{line:73,column:19}}}))?r:"")+"\r\n    \x3c!-- END Goalkeepers --\x3e\r\n\r\n    \x3c!-- Defenders --\x3e\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"dfLeft"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(9,t,0),inverse:e.noop,data:t,loc:{start:{line:77,column:4},end:{line:142,column:19}}}))?r:"")+"\r\n    \x3c!-- END Defenders --\x3e\r\n\r\n    \x3c!-- Midfielders --\x3e\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"mfLeft"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(15,t,0),inverse:e.noop,data:t,loc:{start:{line:146,column:4},end:{line:211,column:19}}}))?r:"")+"\r\n    \x3c!-- END Midfielders --\x3e\r\n\r\n    \x3c!-- Forwards --\x3e\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"fwLeft"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(18,t,0),inverse:e.noop,data:t,loc:{start:{line:215,column:4},end:{line:280,column:19}}}))?r:"")+"\r\n    \x3c!-- END Forwards --\x3e\r\n"},2:function(e,n,a,l,t){var r,o=null!=n?n:e.nullContext||{},i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12">\r\n        <h3 class="mb-3">Goalkeepers</h2>\r\n    </div>\r\n    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=i(a,"each").call(o,null!=n?i(n,"gkLeft"):n,{name:"each",hash:{},fn:e.program(3,t,0),inverse:e.noop,data:t,loc:{start:{line:22,column:12},end:{line:37,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"gkRight"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(6,t,0),inverse:e.noop,data:t,loc:{start:{line:40,column:4},end:{line:73,column:11}}}))?r:"")+" "},3:function(e,n,a,l,t){var r,o,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,h=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'            <tr class="player-row '+u(typeof(o=null!=(o=h(a,"availabilityType")||(null!=n?h(n,"availabilityType"):n))?o:c)===s?o.call(i,{name:"availabilityType",hash:{},data:t,loc:{start:{line:23,column:34},end:{line:23,column:54}}}):o)+'">\r\n                <td>'+u(typeof(o=null!=(o=h(a,"id")||(null!=n?h(n,"id"):n))?o:c)===s?o.call(i,{name:"id",hash:{},data:t,loc:{start:{line:24,column:20},end:{line:24,column:26}}}):o)+'</td>\r\n                <td class="'+u(typeof(o=null!=(o=h(a,"teamName")||(null!=n?h(n,"teamName"):n))?o:c)===s?o.call(i,{name:"teamName",hash:{},data:t,loc:{start:{line:25,column:27},end:{line:25,column:39}}}):o)+'">'+u(typeof(o=null!=(o=h(a,"teamShort")||(null!=n?h(n,"teamShort"):n))?o:c)===s?o.call(i,{name:"teamShort",hash:{},data:t,loc:{start:{line:25,column:41},end:{line:25,column:54}}}):o)+'</td>\r\n                <td class="player-name">\r\n                    \x3c!-- <img src="'+u(typeof(o=null!=(o=h(a,"image")||(null!=n?h(n,"image"):n))?o:c)===s?o.call(i,{name:"image",hash:{},data:t,loc:{start:{line:27,column:35},end:{line:27,column:44}}}):o)+'" alt='+u(typeof(o=null!=(o=h(a,"name")||(null!=n?h(n,"name"):n))?o:c)===s?o.call(i,{name:"name",hash:{},data:t,loc:{start:{line:27,column:50},end:{line:27,column:58}}}):o)+" onerror=\"this.src = 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/Photo-Missing.png'\"/> --\x3e\r\n                    "+u(typeof(o=null!=(o=h(a,"name")||(null!=n?h(n,"name"):n))?o:c)===s?o.call(i,{name:"name",hash:{},data:t,loc:{start:{line:28,column:20},end:{line:28,column:28}}}):o)+"\r\n                </td>\r\n                <td>\r\n                    "+u(typeof(o=null!=(o=h(a,"price")||(null!=n?h(n,"price"):n))?o:c)===s?o.call(i,{name:"price",hash:{},data:t,loc:{start:{line:31,column:20},end:{line:31,column:29}}}):o)+" "+(null!=(r=h(a,"if").call(i,null!=n?h(n,"isUnavailable"):n,{name:"if",hash:{},fn:e.program(4,t,0),inverse:e.noop,data:t,loc:{start:{line:31,column:30},end:{line:34,column:27}}}))?r:"")+"                </td>\r\n            </tr>\r\n"},4:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"\r\n                    <i class='fas fa-exclamation-triangle'></i>\r\n                    <span class='player-status'>"+e.escapeExpression("function"==typeof(r=null!=(r=o(a,"availabilityNews")||(null!=n?o(n,"availabilityNews"):n))?r:e.hooks.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"availabilityNews",hash:{},data:t,loc:{start:{line:33,column:48},end:{line:33,column:68}}}):r)+"</span>\r\n"},6:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=o(a,"each").call(null!=n?n:e.nullContext||{},null!=n?o(n,"gkRight"):n,{name:"each",hash:{},fn:e.program(7,t,0),inverse:e.noop,data:t,loc:{start:{line:55,column:12},end:{line:70,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n    "},7:function(e,n,a,l,t){var r,o,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,h=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'            <tr class="player-row '+u(typeof(o=null!=(o=h(a,"availabilityType")||(null!=n?h(n,"availabilityType"):n))?o:c)===s?o.call(i,{name:"availabilityType",hash:{},data:t,loc:{start:{line:56,column:34},end:{line:56,column:54}}}):o)+'">\r\n                <td>'+u(typeof(o=null!=(o=h(a,"id")||(null!=n?h(n,"id"):n))?o:c)===s?o.call(i,{name:"id",hash:{},data:t,loc:{start:{line:57,column:20},end:{line:57,column:26}}}):o)+'</td>\r\n                <td class="'+u(typeof(o=null!=(o=h(a,"teamName")||(null!=n?h(n,"teamName"):n))?o:c)===s?o.call(i,{name:"teamName",hash:{},data:t,loc:{start:{line:58,column:27},end:{line:58,column:39}}}):o)+'">'+u(typeof(o=null!=(o=h(a,"teamShort")||(null!=n?h(n,"teamShort"):n))?o:c)===s?o.call(i,{name:"teamShort",hash:{},data:t,loc:{start:{line:58,column:41},end:{line:58,column:54}}}):o)+'</td>\r\n                <td class="player-name">\r\n                    \x3c!-- <img src="'+u(typeof(o=null!=(o=h(a,"image")||(null!=n?h(n,"image"):n))?o:c)===s?o.call(i,{name:"image",hash:{},data:t,loc:{start:{line:60,column:35},end:{line:60,column:44}}}):o)+'" alt='+u(typeof(o=null!=(o=h(a,"name")||(null!=n?h(n,"name"):n))?o:c)===s?o.call(i,{name:"name",hash:{},data:t,loc:{start:{line:60,column:50},end:{line:60,column:58}}}):o)+" onerror=\"this.src = 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/Photo-Missing.png'\"> --\x3e\r\n                    "+u(typeof(o=null!=(o=h(a,"name")||(null!=n?h(n,"name"):n))?o:c)===s?o.call(i,{name:"name",hash:{},data:t,loc:{start:{line:61,column:20},end:{line:61,column:28}}}):o)+"\r\n                </td>\r\n                <td>\r\n                    "+u(typeof(o=null!=(o=h(a,"price")||(null!=n?h(n,"price"):n))?o:c)===s?o.call(i,{name:"price",hash:{},data:t,loc:{start:{line:64,column:20},end:{line:64,column:29}}}):o)+" "+(null!=(r=h(a,"if").call(i,null!=n?h(n,"isUnavailable"):n,{name:"if",hash:{},fn:e.program(4,t,0),inverse:e.noop,data:t,loc:{start:{line:64,column:30},end:{line:67,column:27}}}))?r:"")+"                </td>\r\n            </tr>\r\n"},9:function(e,n,a,l,t){var r,o=null!=n?n:e.nullContext||{},i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12">\r\n        <h3>Defenders</h2>\r\n    </div>\r\n    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=i(a,"each").call(o,null!=n?i(n,"dfLeft"):n,{name:"each",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t,loc:{start:{line:95,column:12},end:{line:108,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"dfRight"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(13,t,0),inverse:e.noop,data:t,loc:{start:{line:111,column:4},end:{line:142,column:11}}}))?r:"")+" "},10:function(e,n,a,l,t){var r,o,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,h=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'            <tr class="player-row '+u(typeof(o=null!=(o=h(a,"availabilityType")||(null!=n?h(n,"availabilityType"):n))?o:c)===s?o.call(i,{name:"availabilityType",hash:{},data:t,loc:{start:{line:96,column:34},end:{line:96,column:54}}}):o)+'">\r\n                <td>'+u(typeof(o=null!=(o=h(a,"id")||(null!=n?h(n,"id"):n))?o:c)===s?o.call(i,{name:"id",hash:{},data:t,loc:{start:{line:97,column:20},end:{line:97,column:26}}}):o)+'</td>\r\n                <td class="'+u(typeof(o=null!=(o=h(a,"teamName")||(null!=n?h(n,"teamName"):n))?o:c)===s?o.call(i,{name:"teamName",hash:{},data:t,loc:{start:{line:98,column:27},end:{line:98,column:39}}}):o)+'">'+u(typeof(o=null!=(o=h(a,"teamShort")||(null!=n?h(n,"teamShort"):n))?o:c)===s?o.call(i,{name:"teamShort",hash:{},data:t,loc:{start:{line:98,column:41},end:{line:98,column:54}}}):o)+'</td>\r\n                <td class="player-name">\r\n                    \x3c!-- <img src="'+u(typeof(o=null!=(o=h(a,"image")||(null!=n?h(n,"image"):n))?o:c)===s?o.call(i,{name:"image",hash:{},data:t,loc:{start:{line:100,column:35},end:{line:100,column:44}}}):o)+'" alt='+u(typeof(o=null!=(o=h(a,"name")||(null!=n?h(n,"name"):n))?o:c)===s?o.call(i,{name:"name",hash:{},data:t,loc:{start:{line:100,column:50},end:{line:100,column:58}}}):o)+" onerror=\"this.src = 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/Photo-Missing.png'\"> --\x3e\r\n                    "+u(typeof(o=null!=(o=h(a,"name")||(null!=n?h(n,"name"):n))?o:c)===s?o.call(i,{name:"name",hash:{},data:t,loc:{start:{line:101,column:20},end:{line:101,column:28}}}):o)+"\r\n                </td>\r\n                <td> "+u(typeof(o=null!=(o=h(a,"price")||(null!=n?h(n,"price"):n))?o:c)===s?o.call(i,{name:"price",hash:{},data:t,loc:{start:{line:103,column:21},end:{line:103,column:30}}}):o)+" "+(null!=(r=h(a,"if").call(i,null!=n?h(n,"isUnavailable"):n,{name:"if",hash:{},fn:e.program(11,t,0),inverse:e.noop,data:t,loc:{start:{line:103,column:31},end:{line:106,column:27}}}))?r:"")+"</td>\r\n            </tr>\r\n"},11:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"\r\n                    <i class='fas fa-exclamation-triangle'></i>\r\n                    <span class='player-status'>"+e.escapeExpression("function"==typeof(r=null!=(r=o(a,"availabilityNews")||(null!=n?o(n,"availabilityNews"):n))?r:e.hooks.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"availabilityNews",hash:{},data:t,loc:{start:{line:105,column:48},end:{line:105,column:68}}}):r)+"</span>\r\n                    "},13:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=o(a,"each").call(null!=n?n:e.nullContext||{},null!=n?o(n,"dfRight"):n,{name:"each",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t,loc:{start:{line:126,column:12},end:{line:139,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n    "},15:function(e,n,a,l,t){var r,o=null!=n?n:e.nullContext||{},i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12">\r\n        <h3>Midfielders</h2>\r\n    </div>\r\n    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=i(a,"each").call(o,null!=n?i(n,"mfLeft"):n,{name:"each",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t,loc:{start:{line:164,column:12},end:{line:177,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"mfRight"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(16,t,0),inverse:e.noop,data:t,loc:{start:{line:180,column:4},end:{line:211,column:11}}}))?r:"")+" "},16:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=o(a,"each").call(null!=n?n:e.nullContext||{},null!=n?o(n,"mfRight"):n,{name:"each",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t,loc:{start:{line:195,column:12},end:{line:208,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n    "},18:function(e,n,a,l,t){var r,o=null!=n?n:e.nullContext||{},i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12">\r\n        <h3>Forwards</h2>\r\n    </div>\r\n    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=i(a,"each").call(o,null!=n?i(n,"fwLeft"):n,{name:"each",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t,loc:{start:{line:233,column:12},end:{line:246,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n"+(null!=(r=i(a,"if").call(o,null!=(r=null!=n?i(n,"fwRight"):n)?i(r,"length"):r,{name:"if",hash:{},fn:e.program(19,t,0),inverse:e.noop,data:t,loc:{start:{line:249,column:4},end:{line:280,column:11}}}))?r:"")+" "},19:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <div class="col-12 col-md-6">\r\n        <table class="table table-striped table-sm player-table">\r\n            <colgroup>\r\n                <col class="id">\r\n                <col class="team">\r\n                <col class="name">\r\n                <col class="price">\r\n            </colgroup>\r\n            <thead class="thead-dark">\r\n                <th>ID</th>\r\n                <th>Team</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </thead>\r\n'+(null!=(r=o(a,"each").call(null!=n?n:e.nullContext||{},null!=n?o(n,"fwRight"):n,{name:"each",hash:{},fn:e.program(10,t,0),inverse:e.noop,data:t,loc:{start:{line:264,column:12},end:{line:277,column:21}}}))?r:"")+"        </table>\r\n    </div>\r\n    "},21:function(e,n,a,l,t){return'    <div class="col-12">\r\n        <h4>Your search returned no results - try again</h4>\r\n    </div>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,a,l,t){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="row">\r\n'+(null!=(r=o(a,"if").call(null!=n?n:e.nullContext||{},null!=n?o(n,"filteredPlayers"):n,{name:"if",hash:{},fn:e.program(1,t,0),inverse:e.program(21,t,0),data:t,loc:{start:{line:2,column:4},end:{line:286,column:11}}}))?r:"")+"</div>"},useData:!0})},9:function(e,n){e.exports=jQuery}});
//# sourceMappingURL=Players.bundle.js.map