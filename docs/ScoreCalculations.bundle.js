!function(e){var a={};function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/",r(r.s=4)}([function(e,a){e.exports=jQuery},function(e,a,r){"use strict";r.d(a,"a",function(){return s});var t="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",s=function(){function e(e){switch(this.id=e.id,this.image=t+e.code+".png",this.availabilityType=e.status,this.teamID=e.team,this.price=this.getPlayerCost(e.now_cost,e.cost_change_start_fall),this.name=e.web_name,this.playerType=e.element_type,this.teamID){case 1:this.teamName="Arsenal",this.teamShort="ARS";break;case 2:this.teamName="Bournemouth",this.teamShort="BOU";break;case 3:this.teamName="Brighton and Hove Albion",this.teamShort="BHA";break;case 4:this.teamName="Burnley",this.teamShort="BUR";break;case 5:this.teamName="Chelsea",this.teamShort="CHE";break;case 6:this.teamName="Crystal Palace",this.teamShort="CRY";break;case 7:this.teamName="Everton",this.teamShort="EVE";break;case 8:this.teamName="Huddersfield Town",this.teamShort="HUD";break;case 9:this.teamName="Leicester City",this.teamShort="LEI";break;case 10:this.teamName="Liverpool",this.teamShort="LIV";break;case 11:this.teamName="Manchester City",this.teamShort="MNC";break;case 12:this.teamName="Manchester United",this.teamShort="MNU";break;case 13:this.teamName="Newcastle United",this.teamShort="NEW";break;case 14:this.teamName="Southampton",this.teamShort="SOU";break;case 15:this.teamName="Stoke City",this.teamShort="STO";break;case 16:this.teamName="Swansea City",this.teamShort="SWA";break;case 17:this.teamName="Tottenham Hotspur",this.teamShort="TOT";break;case 18:this.teamName="Watford",this.teamShort="WAT";break;case 19:this.teamName="West Bromwich Albion",this.teamShort="WBA";break;case 20:this.teamName="West Ham United",this.teamShort="WHU"}switch(!0){case"u"===this.availabilityType||"i"===this.availabilityType:this.isUnavailable=!0,this.availabilityNews=e.news;break;default:this.isUnavailable=!1}}return e.prototype.getPlayerCost=function(e,a){return((e+a)/10).toFixed(1)},e}()},function(e,a,r){"use strict";(function(e){r.d(a,"a",function(){return t});var t,s=r(1);!function(a){var r,t=[];a.getPlayerData=function(a){r=e(".loading"),!1,"https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p",fetch("https://jokecamp.github.io/epl-fantasy-geek/js/static-data.json").then(function(e){200===e.status?e.json().then(function(e){r.hide();var i={settings:{loaded:!0},players:t=e.elements.map(function(e){return new s.a(e)}),goalkeepers:t.filter(function(e){return 1===e.playerType}),defenders:t.filter(function(e){return 2===e.playerType}),midfielders:t.filter(function(e){return 3===e.playerType}),forwards:t.filter(function(e){return 4===e.playerType})};a(i)}):Error("Looks like there was a problem. Status Code:  "+e.status)}).catch(function(e){r.hide(),alert("fetch error "+e)})}}(t||(t={}))}).call(this,r(0))},function(e){e.exports={fantasy_teams:[{team_id:1,team_name:"WE HAVE IT ALL",team_players:[{player_id:375,real_life_transfer:[{transfer_team:7,transfer_week:15}],transfers:[]},{player_id:101,transfers:[]},{player_id:194,transfers:[]},{player_id:222,transfers:[]},{player_id:267,transfers:[]},{player_id:24,transfers:[]},{player_id:230,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:295,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:472,transfers:[]},{player_id:134,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:1,team_name:"Lacking Creativity",team_players:[{player_id:260,transfers:[]},{player_id:117,transfers:[]},{player_id:290,transfers:[]},{player_id:80,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:367,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:394,transfers:[]},{player_id:259,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:2,team_name:"Diggers FC",team_players:[{player_id:421,transfers:[]},{player_id:60,transfers:[]},{player_id:37,transfers:[]},{player_id:353,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[]},{player_id:230,transfers:[]},{player_id:394,transfers:[]},{player_id:259,transfers:[]},{player_id:52,transfers:[]}]},{team_id:1,team_name:"WE HAVE IT ALL",team_players:[{player_id:375,real_life_transfer:[{transfer_team:7,transfer_week:15}],transfers:[]},{player_id:101,transfers:[]},{player_id:194,transfers:[]},{player_id:222,transfers:[]},{player_id:267,transfers:[]},{player_id:24,transfers:[]},{player_id:230,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:295,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:472,transfers:[]},{player_id:134,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:1,team_name:"Lacking Creativity",team_players:[{player_id:260,transfers:[]},{player_id:117,transfers:[]},{player_id:290,transfers:[]},{player_id:80,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[{transfer_id:247,transfer_week:15}]},{player_id:367,transfers:[{transfer_id:501,transfer_week:15}]},{player_id:394,transfers:[]},{player_id:259,transfers:[{transfer_id:472,transfer_week:15},{transfer_id:259,transfer_week:35}]},{player_id:285,transfers:[]}]},{team_id:2,team_name:"Diggers FC",team_players:[{player_id:421,transfers:[]},{player_id:60,transfers:[]},{player_id:37,transfers:[]},{player_id:353,transfers:[]},{player_id:405,transfers:[]},{player_id:234,transfers:[]},{player_id:388,transfers:[]},{player_id:230,transfers:[]},{player_id:394,transfers:[]},{player_id:259,transfers:[]},{player_id:52,transfers:[]}]}]}},function(e,a,r){"use strict";r.r(a);var t,s,i=r(0),n=(r(6),r(2)),f=r(3).fantasy_teams,l=[{team_players:[]}],_=[];!function(e){(t||(t={})).CreateTeam=function(e){n.a.getPlayerData(function(a){for(var r=0,t=f;r<t.length;r++){var s=t[r];l.unshift({team_id:s.team_id,team_name:s.team_name});for(var i=0,n=s.team_players;i<n.length;i++)for(var p=n[i],o=0,m=a.players;o<m.length;o++){var d=m[o];if(d.id===p.player_id){var y=void 0;switch(d.playerType){case 1:y="GK";break;case 2:y="DEF";break;case 3:y="MID";break;case 4:y="FWD"}l[1].team_players.push({player_id:d.id,player_name:d.name,player_teamshort:d.teamShort,player_type:d.player_type,player_position:y})}}_.push(l),l=[{team_players:[]}]}e(_),console.log(_)})}}(),function(e){(s||(s={})).init=function(){t.CreateTeam(function(e){i.get("/src/js/components/Templates/FantasyTeamsTemplate.hbs",function(a){var r=a,t=Handlebars.compile(r)(e);i(".teams-container").append(t)})})}}(),i(function(){return s.init()})},,function(e,a,r){}]);
//# sourceMappingURL=ScoreCalculations.bundle.js.map