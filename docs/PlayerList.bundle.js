!function(e){var t={};function a(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t){e.exports=jQuery},function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",s=function(){function e(e){switch(this.id=e.id,this.image=r+e.code+".png",this.availabilityType=e.status,this.teamID=e.team,this.price=this.getPlayerCost(e.now_cost,e.cost_change_start_fall),this.name=e.web_name,this.playerType=e.element_type,this.teamID){case 1:this.teamName="Arsenal",this.teamShort="ARS";break;case 2:this.teamName="Bournemouth",this.teamShort="BOU";break;case 3:this.teamName="Brighton and Hove Albion",this.teamShort="BHA";break;case 4:this.teamName="Burnley",this.teamShort="BUR";break;case 5:this.teamName="Chelsea",this.teamShort="CHE";break;case 6:this.teamName="Crystal Palace",this.teamShort="CRY";break;case 7:this.teamName="Everton",this.teamShort="EVE";break;case 8:this.teamName="Huddersfield Town",this.teamShort="HUD";break;case 9:this.teamName="Leicester City",this.teamShort="LEI";break;case 10:this.teamName="Liverpool",this.teamShort="LIV";break;case 11:this.teamName="Manchester City",this.teamShort="MNC";break;case 12:this.teamName="Manchester United",this.teamShort="MNU";break;case 13:this.teamName="Newcastle United",this.teamShort="NEW";break;case 14:this.teamName="Southampton",this.teamShort="SOU";break;case 15:this.teamName="Stoke City",this.teamShort="STO";break;case 16:this.teamName="Swansea City",this.teamShort="SWA";break;case 17:this.teamName="Tottenham Hotspur",this.teamShort="TOT";break;case 18:this.teamName="Watford",this.teamShort="WAT";break;case 19:this.teamName="West Bromwich Albion",this.teamShort="WBA";break;case 20:this.teamName="West Ham United",this.teamShort="WHU"}switch(!0){case"u"===this.availabilityType||"i"===this.availabilityType:this.isUnavailable=!0,this.availabilityNews=e.news;break;default:this.isUnavailable=!1}}return e.prototype.getPlayerCost=function(e,t){return((e+t)/10).toFixed(1)},e}()},function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return r});var r,s=a(1);!function(t){var a,r=[];t.getPlayerData=function(t){a=e(".loading"),!1,"https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",fetch("https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json").then(function(e){200===e.status?e.json().then(function(e){a.hide();var i={settings:{loaded:!0},players:r=e.elements.map(function(e){return new s.a(e)}),goalkeepers:r.filter(function(e){return 1===e.playerType}),defenders:r.filter(function(e){return 2===e.playerType}),midfielders:r.filter(function(e){return 3===e.playerType}),forwards:r.filter(function(e){return 4===e.playerType})};t(i)}):Error("Looks like there was a problem. Status Code:  "+e.status)}).catch(function(e){a.hide(),alert("fetch error "+e)})}}(r||(r={}))}).call(this,a(0))},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r,s=a(0),i=(a(8),a(2));!function(e){var t;e.init=function(){t=s(".player-container"),s("#players-template"),s("img"),i.a.getPlayerData(function(e){var a={gkLeft:e.goalkeepers.slice(0,Math.floor(e.goalkeepers.length/2)),gkRight:e.goalkeepers.slice(Math.floor(e.goalkeepers.length/2)),dfLeft:e.defenders.slice(0,Math.floor(e.defenders.length/2)),dfRight:e.defenders.slice(Math.floor(e.defenders.length/2)),mfLeft:e.midfielders.slice(0,Math.floor(e.midfielders.length/2)),mfRight:e.midfielders.slice(Math.floor(e.midfielders.length/2)),fwLeft:e.forwards.slice(0,Math.floor(e.forwards.length/2)),fwRight:e.forwards.slice(Math.floor(e.forwards.length/2))};fetch("/src/js/components/Templates/PlayersTemplate.hbs").then(function(e){return e.text()}).then(function(e){var r=e,s=Handlebars.compile(r)(a);t.append(s)})})}}(r||(r={})),s(function(){return r.init()})}]);
//# sourceMappingURL=PlayerList.bundle.js.map