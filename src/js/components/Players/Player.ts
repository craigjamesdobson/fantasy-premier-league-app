import { IPlayerData } from "../../components/Players/IPlayerData";
import { IPlayerDataElements } from "../../components/Players/IPlayerDataElements";
import { PlayerPosition } from "../../components/Players/PlayerPosition";

const imageUrl = "https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/40x40/p";

// Player class
export class Player {

    public playerType: PlayerPosition;
    private id: number;
    private image: string;
    private isUnavailable: boolean;
    private availabilityType: string;
    private availabilityNews: string;
    private teamID: number;
    private teamName: string;
    private teamShort: string;
    private name: string;
    private price: string;

    // Construct player objects
    constructor(player: IPlayerDataElements) {
        this.id = player.id;
        this.image = `${imageUrl + player.code}.png`;
        this.availabilityType = player.status;
        this.teamID = player.team;
        this.price = this.getPlayerCost(
            player.now_cost,
            player.cost_change_start_fall
        );
        this.name = player.web_name;
        this.playerType = player.element_type;

        // Create team name and team abbrevation objects depending on team ID
        switch (this.teamID) {
            case 1:
                this.teamName = "Arsenal";
                this.teamShort = "ARS";
                break;
            case 2:
                this.teamName = "Bournemouth";
                this.teamShort = "BOU";
                break;
            case 3:
                this.teamName = "Brighton and Hove Albion";
                this.teamShort = "BHA";
                break;
            case 4:
                this.teamName = "Burnley";
                this.teamShort = "BUR";
                break;
            case 5:
                this.teamName = "Chelsea";
                this.teamShort = "CHE";
                break;
            case 6:
                this.teamName = "Crystal Palace";
                this.teamShort = "CRY";
                break;
            case 7:
                this.teamName = "Everton";
                this.teamShort = "EVE";
                break;
            case 8:
                this.teamName = "Huddersfield Town";
                this.teamShort = "HUD";
                break;
            case 9:
                this.teamName = "Leicester City";
                this.teamShort = "LEI";
                break;
            case 10:
                this.teamName = "Liverpool";
                this.teamShort = "LIV";
                break;
            case 11:
                this.teamName = "Manchester City";
                this.teamShort = "MNC";
                break;
            case 12:
                this.teamName = "Manchester United";
                this.teamShort = "MNU";
                break;
            case 13:
                this.teamName = "Newcastle United";
                this.teamShort = "NEW";
                break;
            case 14:
                this.teamName = "Southampton";
                this.teamShort = "SOU";
                break;
            case 15:
                this.teamName = "Stoke City";
                this.teamShort = "STO";
                break;
            case 16:
                this.teamName = "Swansea City";
                this.teamShort = "SWA";
                break;
            case 17:
                this.teamName = "Tottenham Hotspur";
                this.teamShort = "TOT";
                break;
            case 18:
                this.teamName = "Watford";
                this.teamShort = "WAT";
                break;
            case 19:
                this.teamName = "West Bromwich Albion";
                this.teamShort = "WBA";
                break;
            case 20:
                this.teamName = "West Ham United";
                this.teamShort = "WHU";
                break;
        }

        // Create availability objects
        switch (true) {
            case this.availabilityType === "u" || this.availabilityType === "i":
                this.isUnavailable = true;
                this.availabilityNews = player.news;
                break;
            default:
                this.isUnavailable = false;
        }
    }

    // Calculate out the cost using the paramaters now and change
    private getPlayerCost(now: number, change: number): string {
        return ((now + change) / 10).toFixed(1);
    }
}
