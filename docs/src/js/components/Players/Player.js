var imageUrl = 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p';
// Player class
var Player = /** @class */ (function () {
    // Construct player objects
    function Player(player) {
        this.id = player.id;
        this.image = imageUrl + player.code + ".png";
        this.availabilityType = player.status;
        this.teamID = player.team;
        this.price = this.getPlayerCost(player.now_cost, player.cost_change_start_fall);
        this.name = player.web_name;
        this.playerType = player.element_type;
        // Create team name and team abbrevation objects depending on team ID
        switch (this.teamID) {
            case 1:
                this.teamName = 'Arsenal';
                this.teamShort = 'ARS';
                break;
            case 2:
                this.teamName = 'Bournemouth';
                this.teamShort = 'BOU';
                break;
            case 3:
                this.teamName = 'Bournemouth';
                this.teamShort = 'BOU';
                break;
            case 4:
                this.teamName = 'Brighton and Hove Albion';
                this.teamShort = 'BHA';
                break;
            case 5:
                this.teamName = 'Burnley';
                this.teamShort = 'BUR';
                break;
            case 6:
                this.teamName = 'Chelsea';
                this.teamShort = 'CHE';
                break;
            case 7:
                this.teamName = 'Crystal Palace';
                this.teamShort = 'CRY';
                break;
            case 8:
                this.teamName = 'Everton';
                this.teamShort = 'EVE';
                break;
            case 9:
                this.teamName = 'Leicester';
                this.teamShort = 'LEI';
                break;
            case 10:
                this.teamName = 'Liverpool';
                this.teamShort = 'LIV';
                break;
            case 11:
                this.teamName = 'Manchester City';
                this.teamShort = 'MNC';
                break;
            case 12:
                this.teamName = 'Manchester United';
                this.teamShort = 'MNU';
                break;
            case 13:
                this.teamName = 'Newcastle';
                this.teamShort = 'NEW';
                break;
            case 14:
                this.teamName = 'Norwich';
                this.teamShort = 'NOR';
                break;
            case 15:
                this.teamName = 'Sheffield United';
                this.teamShort = 'SHU';
                break;
            case 16:
                this.teamName = 'Southampton';
                this.teamShort = 'SOU';
                break;
            case 17:
                this.teamName = 'Tottenham Hotspur';
                this.teamShort = 'TOT';
                break;
            case 18:
                this.teamName = 'Watford';
                this.teamShort = 'WAT';
                break;
            case 19:
                this.teamName = 'West Ham';
                this.teamShort = 'WHU';
                break;
            case 20:
                this.teamName = 'Wolves';
                this.teamShort = 'WOL';
                break;
        }
        // Create availability objects
        switch (true) {
            case this.availabilityType === 'u' ||
                this.availabilityType === 'i' ||
                this.availabilityType === 'n':
                this.isUnavailable = true;
                this.availabilityNews = player.news;
                break;
            default:
                this.isUnavailable = false;
        }
        switch (true) {
            case this.availabilityType === 'u':
                this.unavailableForSeason = true;
                this.availabilityNews = player.news;
                break;
            default:
                this.unavailableForSeason = false;
        }
    }
    // Calculate out the cost using the paramaters now and change
    Player.prototype.getPlayerCost = function (now, change) {
        return ((now + change) / 10).toFixed(1);
    };
    return Player;
}());
export { Player };
//# sourceMappingURL=Player.js.map